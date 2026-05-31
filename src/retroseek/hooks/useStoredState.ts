import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { readLocalStorage, writeLocalStorage } from '../utils/localStorage';

type UseStoredStateOptions<T> = {
    parse?: (raw: string) => T;
    serialize?: (value: T) => string;
};

export const useStoredState = <T>(
    key: string,
    defaultValue: T,
    options?: UseStoredStateOptions<T>
): [T, Dispatch<SetStateAction<T>>] => {
    const parse = options?.parse;
    const serialize = options?.serialize;

    const [state, setState] = useState<T>(() => {
        const raw = readLocalStorage(key);
        if (!raw) {
            return defaultValue;
        }

        try {
            if (parse) {
                return parse(raw);
            }
            return JSON.parse(raw) as T;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        const serialized = serialize
            ? serialize(state)
            : JSON.stringify(state);
        writeLocalStorage(key, serialized);
    }, [key, serialize, state]);

    return [state, setState];
};
