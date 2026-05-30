import { Game, GameSearchCriteria } from '../models/Game';
import { CSVReader } from './CSVReader';

export class GameService {
    private games: Game[] = [];
    private initialized = false;

    private async initialize() {
        if (!this.initialized) {
            this.games = await CSVReader.readAllGames();
            this.games.forEach(game => {
                if (!game.releaseDate) {
                    game.releaseDate = new Date(0); // Set empty release dates to a default value
                }
            });
            this.initialized = true;
        }
    }

    async searchGames(criteria: GameSearchCriteria & { includeUnknownReleaseDate?: boolean }): Promise<Game[]> {
        await this.initialize();

        const dateFrom = criteria.dateFrom instanceof Date && !isNaN(criteria.dateFrom.getTime())
            ? criteria.dateFrom
            : undefined;
        const dateTo = criteria.dateTo instanceof Date && !isNaN(criteria.dateTo.getTime())
            ? criteria.dateTo
            : undefined;

        const selectedRegions = criteria.region?.map(region => region.trim().toLowerCase()) || [];

        let normalizedDateFrom = dateFrom;
        let normalizedDateTo = dateTo;

        if (normalizedDateFrom && normalizedDateTo && normalizedDateFrom > normalizedDateTo) {
            const temp = normalizedDateFrom;
            normalizedDateFrom = normalizedDateTo;
            normalizedDateTo = temp;
        }
        
        return this.games.filter(game => {
            let matches = true;
            const isUnknownReleaseDate = game.releaseDate.getTime() === 0 || isNaN(game.releaseDate.getTime());
            
            if (criteria.title) {
                matches = matches && game.title.toLowerCase().includes(criteria.title.trim().toLowerCase());
            }
            if (criteria.platform?.length) {
                matches = matches && game.platform.some(p => criteria.platform?.includes(p));
            }
            if (selectedRegions.length) {
                matches = matches && game.region.some(regionGroup =>
                    regionGroup
                        .split('/')
                        .map(region => region.trim().toLowerCase())
                        .some(region => selectedRegions.includes(region))
                );
            }
            if (criteria.developer) {
                matches = matches && game.developer.toLowerCase().includes(criteria.developer.trim().toLowerCase());
            }
            if (criteria.publisher) {
                matches = matches && game.publisher.toLowerCase().includes(criteria.publisher.trim().toLowerCase());
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
        });
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
