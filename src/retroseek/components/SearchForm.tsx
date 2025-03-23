import React, { useState, useEffect } from 'react';
import { GameSearchCriteria } from '../models/Game';
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
    const [includeUnknownReleaseDate, setIncludeUnknownReleaseDate] = useState<boolean>(false);

    useEffect(() => {
        const loadOptions = async () => {
            const [platformList, regionList] = await Promise.all([
                gameService.getAvailablePlatforms(),
                gameService.getAvailableRegions()
            ]);
            setPlatforms(platformList);
            setRegions(regionList);
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
        if (!criteria.title && !criteria.platform?.length && !criteria.region?.length && !criteria.dateFrom && !criteria.dateTo && !criteria.developer && !criteria.publisher && !includeUnknownReleaseDate) {
            alert('Please select at least one filter before searching.');
            return;
        }
        setGames([]);
        const newGames = await gameService.searchGames({ ...criteria, includeUnknownReleaseDate });
        setGames(newGames);
    };

    return (
        <div className="search-form-container">
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
                        onChange={e => setCriteria({...criteria, dateFrom: new Date(e.target.value)})}
                    />
                </div>
                <div className="form-group">
                    <label>Release Date To</label>
                    <input 
                        type="date"
                        onChange={e => setCriteria({...criteria, dateTo: new Date(e.target.value)})}
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
                <button type="submit">Search</button>
            </form>
            <GameList games={games} />
        </div>
    );
};

export default SearchForm;
