export interface Game {
    // La propiedad id se mantiene pero normalmente no se muestra
    id: string;
    // Orden solicitado de campos
    title: string;
    titleExact: string;
    titleScreen: string;
    titleScreenExact: string;
    platform: string[];
    region: string[];
    developer: string;
    publisher: string;
    releaseDate: Date;
    tags: string[];
}

export interface GameSearchCriteria {
    title?: string;
    platform?: string[];
    dateFrom?: Date;
    dateTo?: Date;
    releaseDateQuery?: string;
    releaseDateTo?: string;
    region?: string[];
    developer?: string;
    publisher?: string;
}
