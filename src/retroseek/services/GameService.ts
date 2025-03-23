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
        
        return this.games.filter(game => {
            let matches = true;
            
            if (criteria.title) {
                matches = matches && game.title.toLowerCase().includes(criteria.title.toLowerCase());
            }
            if (criteria.platform?.length) {
                matches = matches && game.platform.some(p => criteria.platform?.includes(p));
            }
            if (criteria.region?.length) {
                matches = matches && criteria.region.some(region => game.region.some(r => r.split('/').includes(region)));
            }
            if (criteria.developer) {
                matches = matches && game.developer.toLowerCase().includes(criteria.developer.toLowerCase());
            }
            if (criteria.publisher) {
                matches = matches && game.publisher.toLowerCase().includes(criteria.publisher.toLowerCase());
            }
            if (criteria.includeUnknownReleaseDate) {
                matches = matches && game.releaseDate.getTime() === 0;
            } else {
                if (criteria.dateFrom || criteria.dateTo) {
                    matches = matches && (
                        (criteria.dateFrom && new Date(game.releaseDate) >= new Date(criteria.dateFrom)) ||
                        (criteria.dateTo && new Date(game.releaseDate) <= new Date(criteria.dateTo)) ||
                        game.releaseDate.getTime() === 0
                    );
                }
            }
            
            return matches;
        });
    }

    async getAvailablePlatforms(): Promise<string[]> {
        await this.initialize();
        return [...new Set(this.games.flatMap(game => game.platform))];
    }

    async getAvailableRegions(): Promise<string[]> {
        await this.initialize();
        return [...new Set(this.games.flatMap(game => game.region.flatMap(r => r.split('/'))))];
    }
}
