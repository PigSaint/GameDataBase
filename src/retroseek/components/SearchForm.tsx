import React, { useState, useEffect } from 'react';
import { Game, GameSearchCriteria } from '../models/Game';
import { GameService } from '../services/GameService';
import GameList from './GameList';
import '../styles/SearchForm.css';

interface SearchFormProps {
    onSearch: (criteria: GameSearchCriteria) => void;
}

const gameService = new GameService();

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [criteria, setCriteria] = useState<GameSearchCriteria>({});
    const [platforms, setPlatforms] = useState<string[]>([]);
    const [regions, setRegions] = useState<string[]>([]);
    const [games, setGames] = useState<Game[]>([]);
    const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(true);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [searchError, setSearchError] = useState<string | null>(null);
    const [includeUnknownReleaseDate, setIncludeUnknownReleaseDate] = useState<boolean>(false);

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

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(o => o.value);
        setCriteria(prevCriteria => ({
            ...prevCriteria,
            [field]: selectedOptions
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSearchError(null);
        if (!criteria.title && !criteria.platform?.length && !criteria.region?.length && !criteria.dateFrom && !criteria.dateTo && !criteria.developer && !criteria.publisher && !includeUnknownReleaseDate) {
            alert('Please select at least one filter before searching.');
            return;
        }
        setIsSearching(true);
        setGames([]);
        try {
            const newGames = await gameService.searchGames({ ...criteria, includeUnknownReleaseDate });
            setGames(newGames);
            onSearch({ ...criteria, includeUnknownReleaseDate });
        } catch (error) {
            console.error('Error searching games:', error);
            setSearchError('Search failed. Please try again.');
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="search-form-container">
            {isLoadingOptions && <p className="status-message">Loading game data...</p>}
            {loadError && <p className="error-message">{loadError}</p>}
            {searchError && <p className="error-message">{searchError}</p>}
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text"
                        onChange={e => setCriteria({...criteria, title: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Platform</label>
                    <select 
                        multiple
                        value={criteria.platform || []}
                        onChange={e => handleSelect(e, 'platform')}
                    >
                        {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Region</label>
                    <select 
                        multiple
                        value={criteria.region || []}
                        onChange={e => handleSelect(e, 'region')}
                    >
                        {regions.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Developer</label>
                    <input 
                        type="text"
                        onChange={e => setCriteria({...criteria, developer: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Publisher</label>
                    <input 
                        type="text"
                        onChange={e => setCriteria({...criteria, publisher: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Release Date From</label>
                    <input 
                        type="date"
                        onChange={e => setCriteria({
                            ...criteria,
                            dateFrom: e.target.value ? new Date(e.target.value) : undefined
                        })}
                    />
                </div>
                <div className="form-group">
                    <label>Release Date To</label>
                    <input 
                        type="date"
                        onChange={e => setCriteria({
                            ...criteria,
                            dateTo: e.target.value ? new Date(e.target.value) : undefined
                        })}
                    />
                </div>
                <div className="form-group unknown-release-date-group">
                    <button 
                        type="button"
                        className={`unknown-release-date-btn ${includeUnknownReleaseDate ? 'active' : ''}`}
                        onClick={() => setIncludeUnknownReleaseDate(!includeUnknownReleaseDate)}
                    >
                        Only Unknown Rel. Dates
                    </button>
                </div>
                <button type="submit" disabled={isLoadingOptions || isSearching}>
                    {isSearching ? 'Searching...' : 'Search'}
                </button>
            </form>
            <GameList games={games} />
        </div>
    );
};

export default SearchForm;
