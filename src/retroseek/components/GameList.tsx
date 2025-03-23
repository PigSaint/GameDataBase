import React from 'react';
import { Game } from '../models/Game';
import '../styles/GameList.css';

interface GameListProps {
    games: Game[];
}

export const GameList: React.FC<GameListProps> = ({ games }) => {

    const formatDate = (date: Date): string => {
        if (date.getTime() === 0) return 'Unknown';
        
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        if (day === 1 && month === 1) {
            return year.toString();
        } else if (day === 1) {
            return `${year}-${month.toString().padStart(2, '0')}`;
        }
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    };

    const formatTags = (tags: string[]): JSX.Element[] => {
        return tags.map((tag, index) => (
            <span key={index} className="tag">
                #{tag}
            </span>
        ));
    };

    return (
        <div className="game-list-container">
            <div className="table-wrapper">
                <table className="game-table">
                    <thead>
                        <tr>
                            <th className="sticky-col">Title</th>
                            <th>Platform</th>
                            <th>Region</th>
                            <th>Developer</th>
                            <th>Publisher</th>
                            <th>Release Date</th>
                            <th>ID</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => (
                            <tr key={game.id}>
                                <td className="sticky-col">{game.title}</td>
                                <td>{game.platform.join(', ')}</td>
                                <td>{game.region.join(', ')}</td>
                                <td>{game.developer}</td>
                                <td>{game.publisher}</td>
                                <td>{game.releaseDate ? formatDate(game.releaseDate) : 'Unknown'}</td>
                                <td>{game.id}</td>
                                <td className="tags-column">{formatTags(game.tags).reduce((prev, curr) => [prev, ' ', curr])}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GameList;
