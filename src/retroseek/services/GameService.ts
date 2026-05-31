import { Game, GameSearchCriteria } from '../models/Game';
import { CSVReader } from './CSVReader';

export class GameService {
    private games: Game[] = [];
    private initialized = false;
    private normalizedGames: Array<{
        game: Game;
        title: string;
        developer: string;
        publisher: string;
        regions: string[];
        isUnknownReleaseDate: boolean;
    }> = [];
    private searchCache = new Map<string, Game[]>();

    private buildSearchCacheKey(criteria: GameSearchCriteria & { includeUnknownReleaseDate?: boolean }): string {
        return JSON.stringify({
            title: criteria.title?.trim().toLowerCase() || '',
            platform: [...(criteria.platform || [])].sort(),
            region: [...(criteria.region || [])].map(r => r.trim().toLowerCase()).sort(),
            developer: criteria.developer?.trim().toLowerCase() || '',
            publisher: criteria.publisher?.trim().toLowerCase() || '',
            releaseDateQuery: criteria.releaseDateQuery?.trim() || '',
            releaseDateTo: criteria.releaseDateTo?.trim() || '',
            dateFrom: criteria.dateFrom instanceof Date ? criteria.dateFrom.getTime() : null,
            dateTo: criteria.dateTo instanceof Date ? criteria.dateTo.getTime() : null,
            includeUnknownReleaseDate: Boolean(criteria.includeUnknownReleaseDate)
        });
    }

    private parseFlexibleDate(input: string): { start: Date; end: Date } | null {
        const value = input.trim();

        const yearMatch = /^(\d{4})$/.exec(value);
        if (yearMatch) {
            const year = Number(yearMatch[1]);
            return {
                start: new Date(year, 0, 1),
                end: new Date(year, 11, 31, 23, 59, 59, 999)
            };
        }

        const yearMonthMatch = /^(\d{4})-(\d{2})$/.exec(value);
        if (yearMonthMatch) {
            const year = Number(yearMonthMatch[1]);
            const month = Number(yearMonthMatch[2]);
            if (month < 1 || month > 12) {
                return null;
            }
            const monthLastDay = new Date(year, month, 0).getDate();
            return {
                start: new Date(year, month - 1, 1),
                end: new Date(year, month - 1, monthLastDay, 23, 59, 59, 999)
            };
        }

        const fullDateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
        if (fullDateMatch) {
            const year = Number(fullDateMatch[1]);
            const month = Number(fullDateMatch[2]);
            const day = Number(fullDateMatch[3]);
            const date = new Date(year, month - 1, day);
            const isValid =
                date.getFullYear() === year &&
                date.getMonth() === month - 1 &&
                date.getDate() === day;

            if (!isValid) {
                return null;
            }

            return {
                start: new Date(year, month - 1, day),
                end: new Date(year, month - 1, day, 23, 59, 59, 999)
            };
        }

        return null;
    }

    private async initialize() {
        if (!this.initialized) {
            this.games = await CSVReader.readAllGames();
            this.games.forEach(game => {
                if (!game.releaseDate) {
                    game.releaseDate = new Date(0); // Set empty release dates to a default value
                }
            });
            this.normalizedGames = this.games.map(game => ({
                game,
                title: game.title.toLowerCase(),
                developer: game.developer.toLowerCase(),
                publisher: game.publisher.toLowerCase(),
                regions: game.region
                    .flatMap(regionGroup => regionGroup.split('/'))
                    .map(region => region.trim().toLowerCase())
                    .filter(region => region.length > 0),
                isUnknownReleaseDate: game.releaseDate.getTime() === 0 || isNaN(game.releaseDate.getTime())
            }));
            this.initialized = true;
        }
    }

    async searchGames(criteria: GameSearchCriteria & { includeUnknownReleaseDate?: boolean }): Promise<Game[]> {
        await this.initialize();
        const cacheKey = this.buildSearchCacheKey(criteria);
        const cached = this.searchCache.get(cacheKey);
        if (cached) {
            return cached;
        }

        const dateFromLegacy = criteria.dateFrom instanceof Date && !isNaN(criteria.dateFrom.getTime())
            ? criteria.dateFrom
            : undefined;
        const dateToLegacy = criteria.dateTo instanceof Date && !isNaN(criteria.dateTo.getTime())
            ? criteria.dateTo
            : undefined;

        const dateQueryRange = criteria.releaseDateQuery
            ? this.parseFlexibleDate(criteria.releaseDateQuery)
            : null;
        const dateToRange = criteria.releaseDateTo
            ? this.parseFlexibleDate(criteria.releaseDateTo)
            : null;

        const selectedRegions = criteria.region?.map(region => region.trim().toLowerCase()) || [];

        let normalizedDateFrom = dateQueryRange?.start || dateFromLegacy;
        let normalizedDateTo = dateQueryRange?.end || dateToLegacy;

        if (dateQueryRange && dateToRange) {
            normalizedDateFrom = dateQueryRange.start;
            normalizedDateTo = dateToRange.end;
        }

        if (normalizedDateFrom && normalizedDateTo && normalizedDateFrom > normalizedDateTo) {
            const temp = normalizedDateFrom;
            normalizedDateFrom = normalizedDateTo;
            normalizedDateTo = temp;
        }
        
        const results = this.normalizedGames.filter(({ game, title, developer, publisher, regions, isUnknownReleaseDate }) => {
            let matches = true;
            
            if (criteria.title) {
                matches = matches && title.includes(criteria.title.trim().toLowerCase());
            }
            if (criteria.platform?.length) {
                matches = matches && game.platform.some(p => criteria.platform?.includes(p));
            }
            if (selectedRegions.length) {
                matches = matches && regions.some(region => selectedRegions.includes(region));
            }
            if (criteria.developer) {
                matches = matches && developer.includes(criteria.developer.trim().toLowerCase());
            }
            if (criteria.publisher) {
                matches = matches && publisher.includes(criteria.publisher.trim().toLowerCase());
            }
            if (criteria.includeUnknownReleaseDate) {
                matches = matches && isUnknownReleaseDate;
            } else if (normalizedDateFrom || normalizedDateTo) {
                if (isUnknownReleaseDate) {
                    return false;
                }
                if (normalizedDateFrom) {
                    matches = matches && game.releaseDate >= normalizedDateFrom;
                }
                if (normalizedDateTo) {
                    matches = matches && game.releaseDate <= normalizedDateTo;
                }
            }
            
            return matches;
        }).map(entry => entry.game);

        if (this.searchCache.size > 30) {
            const oldestKey = this.searchCache.keys().next().value;
            if (oldestKey) {
                this.searchCache.delete(oldestKey);
            }
        }
        this.searchCache.set(cacheKey, results);

        return results;
    }

    async getAvailablePlatforms(): Promise<string[]> {
        await this.initialize();
        return [...new Set(this.games.flatMap(game => game.platform))]
            .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
    }

    async getAvailableRegions(): Promise<string[]> {
        await this.initialize();
        return [...new Set(
            this.games
                .flatMap(game => game.region.flatMap(r => r.split('/')))
                .map(region => region.trim())
                .filter(region => region.length > 0)
        )]
            .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
    }
}
