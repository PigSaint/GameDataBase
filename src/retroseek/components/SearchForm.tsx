import React, { useEffect, useMemo, useState } from 'react';
import { MultiValue } from 'react-select';
import SearchAdvancedFields from './searchForm/SearchAdvancedFields';
import SearchBasicFields from './searchForm/SearchBasicFields';
import { CommonSelectProps, SelectOption, SelectOverlayStyles } from './searchForm/types';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { Z_LAYERS } from '../constants/zLayers';
import { useStoredState } from '../hooks/useStoredState';
import { Game, GameSearchCriteria } from '../models/Game';
import { GameService } from '../services/GameService';
import { recordSearchTelemetry } from '../utils/searchTelemetry';
import GameList from './GameList';
import '../styles/SearchForm.css';

interface SearchFormProps {
}

const gameService = new GameService();

const selectOverlayStyles: SelectOverlayStyles = {
    menuPortal: (base) => ({
        ...base,
        zIndex: Z_LAYERS.overlayBase
    }),
    menu: (base) => ({
        ...base,
        zIndex: Z_LAYERS.overlayBase
    })
};

type PersistedSearchState = {
    criteria?: GameSearchCriteria;
    releaseDateQuery?: string;
    releaseDateTo?: string;
    isDateToActive?: boolean;
    includeUnknownReleaseDate?: boolean;
    isAdvancedOpen?: boolean;
};

const createDefaultPersistedSearchState = (): PersistedSearchState => ({
    criteria: {},
    releaseDateQuery: '',
    releaseDateTo: '',
    isDateToActive: false,
    includeUnknownReleaseDate: false,
    isAdvancedOpen: false
});

const sanitizeCriteria = (criteria: GameSearchCriteria | undefined): GameSearchCriteria => {
    if (!criteria || typeof criteria !== 'object') {
        return {};
    }

    const cleanArray = (value: unknown): string[] | undefined => {
        if (!Array.isArray(value)) {
            return undefined;
        }
        return value
            .filter((item): item is string => typeof item === 'string')
            .map(item => item.trim())
            .filter(Boolean);
    };

    const cleanText = (value: unknown): string | undefined => {
        if (typeof value !== 'string') {
            return undefined;
        }
        return value;
    };

    return {
        title: cleanText(criteria.title),
        platform: cleanArray(criteria.platform),
        region: cleanArray(criteria.region),
        developer: cleanText(criteria.developer),
        publisher: cleanText(criteria.publisher),
        releaseDateQuery: cleanText(criteria.releaseDateQuery),
        releaseDateTo: cleanText(criteria.releaseDateTo)
    };
};

const parseStoredSearchState = (raw: string): PersistedSearchState => {
    try {
        const parsed = JSON.parse(raw) as PersistedSearchState;
        return {
            criteria: sanitizeCriteria(parsed.criteria),
            releaseDateQuery: typeof parsed.releaseDateQuery === 'string' ? parsed.releaseDateQuery : '',
            releaseDateTo: typeof parsed.releaseDateTo === 'string' ? parsed.releaseDateTo : '',
            isDateToActive: Boolean(parsed.isDateToActive),
            includeUnknownReleaseDate: Boolean(parsed.includeUnknownReleaseDate),
            isAdvancedOpen: Boolean(parsed.isAdvancedOpen)
        };
    } catch {
        return createDefaultPersistedSearchState();
    }
};

const hasAnyActiveFilter = (
    criteria: GameSearchCriteria,
    includeUnknownReleaseDate: boolean
): boolean => {
    return Boolean(
        criteria.title ||
        criteria.platform?.length ||
        criteria.region?.length ||
        criteria.releaseDateQuery ||
        criteria.releaseDateTo ||
        criteria.developer ||
        criteria.publisher ||
        includeUnknownReleaseDate
    );
};

type SearchPerformanceStats = {
    durationMs: number;
    resultCount: number;
    searchedAt: string;
};

export const SearchForm: React.FC<SearchFormProps> = () => {
    const [storedState, setStoredState] = useStoredState<PersistedSearchState>(
        STORAGE_KEYS.searchFilters,
        createDefaultPersistedSearchState(),
        { parse: parseStoredSearchState }
    );

    const menuPortalTarget = useMemo(
        () => (typeof document !== 'undefined' ? document.body : null),
        []
    );

    const [criteria, setCriteria] = useState<GameSearchCriteria>(() => sanitizeCriteria(storedState.criteria));
    const [platforms, setPlatforms] = useState<string[]>([]);
    const [regions, setRegions] = useState<string[]>([]);
    const [games, setGames] = useState<Game[]>([]);
    const [releaseDateQuery, setReleaseDateQuery] = useState<string>(() => storedState.releaseDateQuery || '');
    const [releaseDateTo, setReleaseDateTo] = useState<string>(() => storedState.releaseDateTo || '');
    const [isDateToActive, setIsDateToActive] = useState<boolean>(() => Boolean(storedState.isDateToActive));
    const [dateInputError, setDateInputError] = useState<string | null>(null);
    const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(true);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [searchError, setSearchError] = useState<string | null>(null);
    const [searchPerformance, setSearchPerformance] = useState<SearchPerformanceStats | null>(null);
    const [includeUnknownReleaseDate, setIncludeUnknownReleaseDate] = useState<boolean>(() => Boolean(storedState.includeUnknownReleaseDate));
    const [isAdvancedOpen, setIsAdvancedOpen] = useState<boolean>(() => Boolean(storedState.isAdvancedOpen));

    const commonSelectProps = useMemo<CommonSelectProps>(
        () => ({
            classNamePrefix: 'rs' as const,
            styles: selectOverlayStyles,
            menuPortalTarget,
            menuPosition: 'fixed' as const,
            isDisabled: isLoadingOptions,
            placeholder: 'Type to search...'
        }),
        [isLoadingOptions, menuPortalTarget]
    );

    useEffect(() => {
        const loadOptions = async () => {
            setIsLoadingOptions(true);
            setLoadError(null);
            try {
                const [platformList, regionList] = await Promise.all([
                    gameService.getAvailablePlatforms(),
                    gameService.getAvailableRegions()
                ]);
                setPlatforms(platformList);
                setRegions(regionList);
                if (!platformList.length || !regionList.length) {
                    setLoadError('Data loaded but platform or region options are empty.');
                }
            } catch (error) {
                console.error('Error loading filter options:', error);
                setLoadError('Could not load game data. Please refresh and try again.');
            } finally {
                setIsLoadingOptions(false);
            }
        };
        loadOptions();
    }, []);

    useEffect(() => {
        setStoredState({
            criteria,
            releaseDateQuery,
            releaseDateTo,
            isDateToActive,
            includeUnknownReleaseDate,
            isAdvancedOpen
        });
    }, [criteria, includeUnknownReleaseDate, isAdvancedOpen, isDateToActive, releaseDateQuery, releaseDateTo, setStoredState]);

    const handleMultiSelect = (selected: MultiValue<SelectOption>, field: 'platform' | 'region') => {
        const selectedOptions = selected.map(option => option.value);
        setCriteria(prevCriteria => ({
            ...prevCriteria,
            [field]: selectedOptions
        }));
    };

    const platformOptions = useMemo<SelectOption[]>(
        () => platforms.map(platform => ({ value: platform, label: platform })),
        [platforms]
    );
    const regionOptions = useMemo<SelectOption[]>(
        () => regions.map(region => ({ value: region, label: region })),
        [regions]
    );

    const selectedPlatformOptions = useMemo(
        () => platformOptions.filter(option => criteria.platform?.includes(option.value)),
        [criteria.platform, platformOptions]
    );
    const selectedRegionOptions = useMemo(
        () => regionOptions.filter(option => criteria.region?.includes(option.value)),
        [criteria.region, regionOptions]
    );
    const hasDateInput = Boolean(releaseDateQuery.trim() || releaseDateTo.trim());

    const isValidPartialDate = (value: string): boolean => {
        const trimmed = value.trim();
        if (!trimmed) {
            return true;
        }

        return /^(\d{4})(-(\d{2})(-(\d{2}))?)?$/.test(trimmed);
    };

    const normalizeDateCriteria = () => {
        const query = releaseDateQuery.trim();
        const rangeTo = releaseDateTo.trim();

        if (!isValidPartialDate(query) || !isValidPartialDate(rangeTo)) {
            setDateInputError('Use YYYY, YYYY-MM, or YYYY-MM-DD.');
            return null;
        }

        setDateInputError(null);
        return {
            releaseDateQuery: query || undefined,
            releaseDateTo: isDateToActive ? rangeTo || undefined : undefined,
            dateFrom: undefined,
            dateTo: undefined
        } as GameSearchCriteria;
    };

    const resetDates = () => {
        setReleaseDateQuery('');
        setReleaseDateTo('');
        setIsDateToActive(false);
        setDateInputError(null);
        setCriteria(prev => ({
            ...prev,
            releaseDateQuery: undefined,
            releaseDateTo: undefined,
            dateFrom: undefined,
            dateTo: undefined
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSearchError(null);
        const startedAt = performance.now();
        const normalizedDateCriteria = normalizeDateCriteria();
        if (!normalizedDateCriteria) {
            return;
        }

        const mergedCriteria = { ...criteria, ...normalizedDateCriteria };

        if (!hasAnyActiveFilter(mergedCriteria, includeUnknownReleaseDate)) {
            alert('Please select at least one filter before searching.');
            return;
        }
        setIsSearching(true);
        setGames([]);
        try {
            const newGames = await gameService.searchGames({ ...mergedCriteria, includeUnknownReleaseDate });
            const durationMs = Math.round(performance.now() - startedAt);
            setGames(newGames);
            setSearchPerformance({
                durationMs,
                resultCount: newGames.length,
                searchedAt: new Date().toISOString()
            });
            recordSearchTelemetry({
                timestamp: new Date().toISOString(),
                durationMs,
                resultCount: newGames.length,
                includesUnknownDates: includeUnknownReleaseDate
            });
        } catch (error) {
            console.error('Error searching games:', error);
            setSearchError('Search failed. Please try again.');
            setSearchPerformance(null);
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="search-form-container">
            {isLoadingOptions && <p className="status-message">Loading game data...</p>}
            {loadError && <p className="error-message">{loadError}</p>}
            {searchError && <p className="error-message">{searchError}</p>}
            {dateInputError && <p className="error-message">{dateInputError}</p>}
            {searchPerformance && (
                <p className="status-message search-performance-message">
                    Last search: {searchPerformance.durationMs} ms · {searchPerformance.resultCount} {searchPerformance.resultCount === 1 ? 'result' : 'results'}
                </p>
            )}
            <form className="search-form" onSubmit={handleSubmit}>
                <SearchBasicFields
                    title={criteria.title || ''}
                    onTitleChange={(value) => setCriteria(prev => ({ ...prev, title: value }))}
                    platformOptions={platformOptions}
                    selectedPlatformOptions={selectedPlatformOptions}
                    onPlatformChange={(selected) => handleMultiSelect(selected, 'platform')}
                    regionOptions={regionOptions}
                    selectedRegionOptions={selectedRegionOptions}
                    onRegionChange={(selected) => handleMultiSelect(selected, 'region')}
                    commonSelectProps={commonSelectProps}
                    isSubmitDisabled={isLoadingOptions || isSearching}
                    submitLabel={isSearching ? 'Searching...' : 'Search'}
                />
                <SearchAdvancedFields
                    isAdvancedOpen={isAdvancedOpen}
                    onToggleAdvanced={() => setIsAdvancedOpen(prev => !prev)}
                    developer={criteria.developer || ''}
                    onDeveloperChange={(value) => setCriteria(prev => ({ ...prev, developer: value }))}
                    publisher={criteria.publisher || ''}
                    onPublisherChange={(value) => setCriteria(prev => ({ ...prev, publisher: value }))}
                    releaseDateQuery={releaseDateQuery}
                    onReleaseDateQueryChange={setReleaseDateQuery}
                    releaseDateTo={releaseDateTo}
                    isDateToActive={isDateToActive}
                    onActivateDateTo={() => setIsDateToActive(true)}
                    onReleaseDateToChange={setReleaseDateTo}
                    hasDateInput={hasDateInput}
                    onResetDates={resetDates}
                    includeUnknownReleaseDate={includeUnknownReleaseDate}
                    onToggleUnknownReleaseDate={() => setIncludeUnknownReleaseDate(prev => !prev)}
                />
            </form>
            <GameList games={games} />
        </div>
    );
};

export default SearchForm;
