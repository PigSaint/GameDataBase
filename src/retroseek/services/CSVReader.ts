import { Game } from '../models/Game';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { readJsonLocalStorage, writeJsonLocalStorage } from '../utils/localStorage';

type CachedGameEntry = Omit<Game, 'releaseDate'> & {
    releaseDate: number;
};

type MetadataCachePayload = {
    version: 1;
    cachedAt: number;
    games: CachedGameEntry[];
};

export class CSVReader {
    private static baseUrl = 'https://raw.githubusercontent.com/PigSaint/GameDataBase/main';
    private static metadataCacheTtlMs = 1000 * 60 * 60 * 24 * 7;
    private static cachedGames: Game[] | null = null;
    private static loadingPromise: Promise<Game[]> | null = null;
    private static platformFiles = {
        'Arcade CAPCOM': 'arcade_capcom.csv',
        'Arcade IREM': 'arcade_irem.csv',
        'Arcade KONAMI': 'arcade_konami.csv',
        'Arcade Nichibutsu': 'arcade_nichibutsu.csv',
        'Arcade Nintendo': 'arcade_nintendo.csv',
        'Arcade SEGA': 'arcade_sega.csv',
        'Arcade SNK': 'arcade_snk.csv',
        'Arcade TAITO': 'arcade_taito.csv',
        'NEC PC-Engine CD': 'console_nec_cdrom2.csv',
        'NEC PC-Engine/TurboGrafx-16/SuperGrafx': 'console_nec_pcengine_turbografx_supergrafx.csv',
        'NEC PC-FX': 'console_nec_pcfx.csv',
        'Nintendo Bandai Sufami Turbo': 'console_nintendo_bandai_sufamiturbo.csv',
        'Nintendo 64DD': 'console_nintendo_64dd.csv',
        'Nintendo Famicom/NES': 'console_nintendo_famicom_nes.csv',
        'Nintendo Famicom Disk System': 'console_nintendo_famicomdisksystem.csv',
        'Nintendo Game Boy': 'console_nintendo_gameboy.csv',
        'Nintendo Game Boy Color': 'console_nintendo_gameboycolor.csv',
        'Nintendo 64': 'console_nintendo_nintendo64.csv',
        'Nintendo Satellaview': 'console_nintendo_satellaview.csv',
        'Nintendo Super Famicom/SNES': 'console_nintendo_superfamicom_snes.csv',
        'Nintendo Virtual Boy': 'console_nintendo_virtualboy.csv',
        'Pioneer LaserActive': 'console_pioneer_laseractive.csv',
        'SEGA Game Gear': 'console_sega_gamegear.csv',
        'SEGA Mark III/Master System': 'console_sega_markIII_mastersystem.csv',
        'SEGA Mega CD/Sega CD': 'console_sega_megacd_segacd.csv',
        'SEGA Mega Drive/Genesis': 'console_sega_megadrive_genesis.csv',
        'SEGA Saturn': 'console_sega_saturn.csv',
        'SEGA SG-1000/SC-3000/Othello Multivision': 'console_sega_sg1000_sc3000_othellomultivision.csv',
        'SEGA 32X': 'console_sega_super32x.csv',
        'SNK Neo Geo Pocket/Neo Geo Pocket Color': 'console_snk_neogeopocket_neogeopocketcolor.csv'
    };

    private static validRegions = [
        'Japan',
        'USA',
        'Europe',
        'World',
        'Asia',
        'Korea',
        'Hong Kong',
        'Taiwan',
        'Brazil',
        'Australia'
    ];

    static async readAllGames(): Promise<Game[]> {
        if (this.cachedGames) {
            return this.cachedGames;
        }

        if (this.loadingPromise) {
            return this.loadingPromise;
        }

        this.loadingPromise = this.loadAllGames();

        try {
            this.cachedGames = await this.loadingPromise;
            return this.cachedGames;
        } finally {
            this.loadingPromise = null;
        }
    }

    private static toCachedGame(game: Game): CachedGameEntry {
        return {
            ...game,
            releaseDate: game.releaseDate.getTime()
        };
    }

    private static fromCachedGame(game: CachedGameEntry): Game {
        return {
            ...game,
            releaseDate: new Date(game.releaseDate)
        };
    }

    private static saveMetadataCache(games: Game[]): void {
        const payload: MetadataCachePayload = {
            version: 1,
            cachedAt: Date.now(),
            games: games.map(game => this.toCachedGame(game))
        };

        writeJsonLocalStorage(STORAGE_KEYS.metadataCache, payload);
    }

    private static loadMetadataCache(): Game[] {
        const fallback: MetadataCachePayload = { version: 1, cachedAt: 0, games: [] };
        const payload = readJsonLocalStorage<MetadataCachePayload>(STORAGE_KEYS.metadataCache, fallback);

        if (!payload.cachedAt || !payload.games.length) {
            return [];
        }

        if (Date.now() - payload.cachedAt > this.metadataCacheTtlMs) {
            return [];
        }

        return payload.games.map(game => this.fromCachedGame(game));
    }

    private static async loadAllGames(): Promise<Game[]> {
        const fileEntries = Object.entries(this.platformFiles);
        const batches = await Promise.all(
            fileEntries.map(async ([platform, fileName]) => {
                try {
                    const response = await fetch(`${this.baseUrl}/${fileName}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const text = await response.text();
                    return {
                        platform,
                        loaded: true,
                        games: this.parseCSV(text, platform)
                    };
                } catch (error) {
                    console.error(`Error loading ${platform} games:`, error);
                    return {
                        platform,
                        loaded: false,
                        games: [] as Game[]
                    };
                }
            })
        );

        const loadedPlatforms = new Set(
            batches
                .filter(batch => batch.loaded)
                .map(batch => batch.platform)
        );

        let games = batches.flatMap(batch => batch.games);
        const cachedGames = this.loadMetadataCache();

        if (!games.length && cachedGames.length) {
            return cachedGames;
        }

        if (cachedGames.length && loadedPlatforms.size < fileEntries.length) {
            const fallbackGames = cachedGames.filter(game => {
                const primaryPlatform = game.platform[0] || '';
                return !loadedPlatforms.has(primaryPlatform);
            });
            games = [...games, ...fallbackGames];
        }

        if (games.length) {
            this.saveMetadataCache(games);
        }

        return games;
    }

    private static parseCSV(csv: string, platform: string): Game[] {
        const lines = csv.split('\n');
        const headers = lines[0].split(',').map(header => header.trim());

        const titleScreenColumn =
            headers.indexOf('Title screen') !== -1
                ? 'Title screen'
                : headers.indexOf('Screen title') !== -1
                    ? 'Screen title'
                    : 'Screen title @ Exact';
        const titleScreenExactColumn =
            headers.indexOf('Title screen (exact)') !== -1
                ? 'Title screen (exact)'
                : headers.indexOf('Screen title @ Exact') !== -1
                    ? 'Screen title @ Exact'
                    : 'Title screen';
        
        const columnIndexes = {
            id: headers.indexOf('ID'),
            title: headers.indexOf('Title'),
            titleExact: headers.indexOf('Title (exact)'),
            titleScreen: headers.indexOf(titleScreenColumn),
            titleScreenExact: headers.indexOf(titleScreenExactColumn),
            releaseDate: headers.indexOf('Release date'),
            developer: headers.indexOf('Developer'),
            publisher: headers.indexOf('Publisher'),
            region: headers.indexOf('Region'),
            tags: headers.indexOf('Tags')
        };

        return lines.slice(1)
            .filter(line => line.trim() !== '')
            .map((line) => {
                const values = line.split(',');
                const getValue = (index: number): string => (index >= 0 ? values[index]?.trim() || '' : '');

                const title =
                    getValue(columnIndexes.titleScreen) ||
                    getValue(columnIndexes.titleScreenExact) ||
                    getValue(columnIndexes.title) ||
                    getValue(columnIndexes.titleExact);

                const game: Game = {
                    id: getValue(columnIndexes.id),
                    title,
                    titleExact: getValue(columnIndexes.titleExact),
                    titleScreen: getValue(columnIndexes.titleScreen),
                    titleScreenExact: getValue(columnIndexes.titleScreenExact),
                    platform: [platform],
                    region: this.parseRegions(getValue(columnIndexes.region)),
                    developer: getValue(columnIndexes.developer) || 'Unknown',
                    publisher: getValue(columnIndexes.publisher) || 'Unknown',
                    releaseDate: this.parseDate(getValue(columnIndexes.releaseDate)),
                    tags: this.parseTags(getValue(columnIndexes.tags))
                };
                return game;
            })
            .filter(game => game.title);
    }

    private static parseDate(dateStr: string | undefined): Date {
        if (!dateStr) return new Date(0);
        
        const fullDate = /^(\d{4})-(\d{2})-(\d{2})$/;
        const yearMonth = /^(\d{4})-(\d{2})$/;
        const yearOnly = /^(\d{4})$/;
        
        let date = new Date(0);
        
        if (fullDate.test(dateStr)) {
            date = new Date(dateStr);
        } else if (yearMonth.test(dateStr)) {
            const [year, month] = dateStr.split('-').map(Number);
            date = new Date(year, month - 1);
        } else if (yearOnly.test(dateStr)) {
            date = new Date(parseInt(dateStr), 0);
        }
        
        return isNaN(date.getTime()) ? new Date(0) : date;
    }

    private static parseRegions(regionStr: string): string[] {
        if (!regionStr) return ['Unknown'];
        
        const regions = regionStr
            .split('/')
            .map(r => r.trim())
            .filter(r => r.length > 0);

        const validatedRegions = regions
            .filter(region => this.validRegions.some(
                validRegion => region.toLowerCase().includes(validRegion.toLowerCase())
            ));

        return validatedRegions.length > 0 ? validatedRegions : ['Unknown'];
    }

    private static parseTags(tags: string): string[] {
        if (!tags) return [];
        return tags.split(' ')
            .filter(tag => tag.startsWith('#'))
            .map(tag => tag.substring(1))
            .filter(tag => tag.length > 0);
    }
}
