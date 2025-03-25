import { Game } from '../models/Game';

export class CSVReader {
    private static baseUrl = 'https://raw.githubusercontent.com/kenta2097/GameDataBase/main';
    private static platformFiles = {
        'Arcade CAPCOM': 'arcade_capcom.csv',
        'Arcade IREM': 'arcade_irem.csv',
        'Arcade SEGA': 'arcade_sega.csv',
        'Arcade SNK': 'arcade_snk.csv',
        'Arcade TAITO': 'arcade_taito.csv',
        'NEC PC-Engine CD': 'console_nec_cdrom2.csv',
        'NEC PC-Engine/TurboGrafx-16/SuperGrafx': 'console_nec_pcengine_turbografx_supergrafx.csv',
        'NEC PC-FX': 'console_nec_pcfx.csv',
        'Nintendo 64DD': 'console_nintendo_64dd.csv',
        'Nintendo Famicom/NES': 'console_nintendo_famicom_nes.csv',
        'Nintendo Famicom Disk System': 'console_nintendo_famicomdisksystem.csv',
        'Nintendo Game Boy': 'console_nintendo_gameboy.csv',
        'Nintendo 64': 'console_nintendo_nintendo64.csv',
        'Nintendo Satellaview': 'console_nintendo_satellaview.csv',
        'Nintendo Virtual Boy': 'console_nintendo_virtualboy.csv',
        'Pioneer LaserActive': 'console_pioneer_laseractive.csv',
        'SEGA Game Gear': 'console_sega_gamegear.csv',
        'SEGA Mark III/Master System': 'console_sega_markIII_mastersystem.csv',
        'SEGA Mega CD/Sega CD': 'console_sega_megacd_segacd.csv',
        'SEGA Mega Drive/Genesis': 'console_sega_megadrive_genesis.csv',
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
        const allGames: Game[] = [];
        
        for (const [platform, fileName] of Object.entries(this.platformFiles)) {
            try {
                const response = await fetch(`${this.baseUrl}/${fileName}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                const games = this.parseCSV(text, platform);
                allGames.push(...games);
            } catch (error) {
                console.error(`Error loading ${platform} games:`, error);
            }
        }
        
        return allGames;
    }

    private static parseCSV(csv: string, platform: string): Game[] {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        
        const columnIndexes = {
            id: headers.indexOf('ID'),
            screenTitle: headers.indexOf('Screen title @ Exact'),
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
                const game: Game = {
                    id: values[columnIndexes.id]?.trim() || '',
                    title: values[columnIndexes.screenTitle]?.trim() || '',
                    platform: [platform],
                    region: [values[columnIndexes.region]?.trim() || 'Unknown'],
                    developer: values[columnIndexes.developer]?.trim() || 'Unknown',
                    publisher: values[columnIndexes.publisher]?.trim() || 'Unknown',
                    releaseDate: this.parseDate(values[columnIndexes.releaseDate]),
                    tags: this.parseTags(values[columnIndexes.tags] || '')
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
