import React, { useEffect } from 'react';
import { SearchForm } from './components/SearchForm';
import { STORAGE_KEYS } from './constants/storageKeys';
import { useStoredState } from './hooks/useStoredState';
import './styles/RetroSeek.css';

type ThemeMode = 'light' | 'dark';

const parseThemeMode = (raw: string): ThemeMode => (raw === 'dark' ? 'dark' : 'light');

export const RetroSeek: React.FC = () => {
    const [themeMode, setThemeMode] = useStoredState<ThemeMode>(
        STORAGE_KEYS.themeMode,
        'light',
        {
            parse: parseThemeMode,
            serialize: value => value
        }
    );
    const darkMode = themeMode === 'dark';

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className={`retroseek ${darkMode ? 'dark-mode' : ''}`}>
            <header className="retroseek-header">
                <div>
                    <h1>RetroSeek</h1>
                    <p className="retroseek-subtitle">GameDataBase explorer for retro catalogs</p>
                </div>
                <button
                    type="button"
                    onClick={toggleDarkMode}
                    className="dark-mode-toggle"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={darkMode ? 'Light mode' : 'Dark mode'}
                >
                    <span className={`theme-icon ${darkMode ? 'moon' : 'sun'}`} aria-hidden="true" />
                    <span className="sr-only">{darkMode ? 'Light mode' : 'Dark mode'}</span>
                </button>
            </header>
            <SearchForm />
            <footer className="retroseek-footer">
                <p className="footer-main">Built by kenta2097 with Copilot</p>
                <div className="footer-divider" aria-hidden="true" />
                <p className="footer-sub">Retro game metadata explorer for archival and discovery</p>
            </footer>
        </div>
    );
};

export default RetroSeek;
