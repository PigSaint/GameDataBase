export interface Game {
    // La propiedad id se mantiene pero normalmente no se muestra
    id: string;
    // Orden solicitado de campos
    title: string;
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
    region?: string[];
    developer?: string;
    publisher?: string;
}
