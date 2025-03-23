import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { GameList } from './components/GameList';
import { GameService } from './services/GameService';
import { Game } from './models/Game';
import './styles/RetroSeek.css';

const gameService = new GameService();

export const RetroSeek: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleSearch = async (criteria: any) => {
        const results = await gameService.searchGames(criteria);
        setGames(results);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div className={`retroseek ${darkMode ? 'dark-mode' : ''}`}>
            <h1>RetroSeek</h1>
            <SearchForm onSearch={handleSearch} />
            <footer>
                <p>by kenta2097 designed with Copilot</p>
                <button onClick={toggleDarkMode} className="dark-mode-toggle">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </footer>
        </div>
    );
};

export default RetroSeek;
