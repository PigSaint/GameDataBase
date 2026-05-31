export const isClient = (): boolean => typeof window !== 'undefined';

export const readLocalStorage = (key: string): string | null => {
    if (!isClient()) {
        return null;
    }

    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
};

export const writeLocalStorage = (key: string, value: string): void => {
    if (!isClient()) {
        return;
    }

    try {
        window.localStorage.setItem(key, value);
    } catch {
        // Ignore persistence errors (private mode or blocked storage).
    }
};

export const writeJsonLocalStorage = <T>(key: string, value: T): void => {
    writeLocalStorage(key, JSON.stringify(value));
};

export const readJsonLocalStorage = <T>(key: string, fallback: T): T => {
    const raw = readLocalStorage(key);
    if (!raw) {
        return fallback;
    }

    try {
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
};
