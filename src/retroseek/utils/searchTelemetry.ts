import { STORAGE_KEYS } from '../constants/storageKeys';
import { readJsonLocalStorage, writeJsonLocalStorage } from './localStorage';

export type SearchTelemetryEntry = {
    timestamp: string;
    durationMs: number;
    resultCount: number;
    includesUnknownDates: boolean;
};

const TELEMETRY_LIMIT = 50;

export const readSearchTelemetry = (): SearchTelemetryEntry[] => {
    return readJsonLocalStorage<SearchTelemetryEntry[]>(STORAGE_KEYS.searchTelemetry, []);
};

export const recordSearchTelemetry = (entry: SearchTelemetryEntry): void => {
    const existing = readSearchTelemetry();
    const next = [entry, ...existing].slice(0, TELEMETRY_LIMIT);
    writeJsonLocalStorage(STORAGE_KEYS.searchTelemetry, next);
};
