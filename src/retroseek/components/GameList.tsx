import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { useStoredState } from '../hooks/useStoredState';
import { Game } from '../models/Game';
import TagCell from './TagCell';
import '../styles/GameList.css';

interface GameListProps {
    games: Game[];
}

const DEFAULT_PAGE_SIZE = 50;
const VIRTUALIZATION_THRESHOLD = 180;
const PAGE_SIZE_OPTIONS = [50, 100, 500] as const;

type PageSizeOption = (typeof PAGE_SIZE_OPTIONS)[number];

type ColumnKey = 'title' | 'titleExact' | 'titleScreen' | 'titleScreenExact' | 'platform' | 'region' | 'developer' | 'publisher' | 'releaseDate' | 'id' | 'tags';

type PersistedGameListConfig = {
    pageSize?: PageSizeOption;
    visibleColumns?: Partial<Record<ColumnKey, boolean>>;
};

type GameListConfigState = {
    pageSize: PageSizeOption;
    visibleColumns: Record<ColumnKey, boolean>;
};

const DEFAULT_VISIBLE_COLUMNS: Record<ColumnKey, boolean> = {
    title: true,
    titleExact: false,
    titleScreen: false,
    titleScreenExact: false,
    platform: true,
    region: true,
    developer: true,
    publisher: true,
    releaseDate: true,
    id: false,
    tags: true
};

const COLUMN_KEYS = Object.keys(DEFAULT_VISIBLE_COLUMNS) as ColumnKey[];

const createDefaultGameListConfig = (): GameListConfigState => ({
    pageSize: DEFAULT_PAGE_SIZE,
    visibleColumns: { ...DEFAULT_VISIBLE_COLUMNS }
});

const isPageSizeOption = (value: unknown): value is PageSizeOption =>
    PAGE_SIZE_OPTIONS.includes(value as (typeof PAGE_SIZE_OPTIONS)[number]);

const normalizeVisibleColumns = (visibleColumns: unknown): Record<ColumnKey, boolean> => {
    const normalizedColumns = { ...DEFAULT_VISIBLE_COLUMNS };

    if (!visibleColumns || typeof visibleColumns !== 'object') {
        return normalizedColumns;
    }

    const visibleColumnsRecord = visibleColumns as Partial<Record<ColumnKey, unknown>>;

    for (const key of COLUMN_KEYS) {
        if (typeof visibleColumnsRecord[key] === 'boolean') {
            normalizedColumns[key] = visibleColumnsRecord[key] as boolean;
        }
    }

    normalizedColumns.title = true;
    return normalizedColumns;
};

const parseStoredGameListConfig = (raw: string): GameListConfigState => {
    try {
        const parsed = JSON.parse(raw) as PersistedGameListConfig;
        return {
            pageSize: isPageSizeOption(parsed.pageSize) ? parsed.pageSize : DEFAULT_PAGE_SIZE,
            visibleColumns: normalizeVisibleColumns(parsed.visibleColumns)
        };
    } catch {
        return createDefaultGameListConfig();
    }
};

const formatDate = (date: Date): string => {
    if (date.getTime() === 0) {
        return 'Unknown';
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (day === 1 && month === 1) {
        return year.toString();
    }

    if (day === 1) {
        return `${year}-${month.toString().padStart(2, '0')}`;
    }

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

const renderClampedCell = (value: string) => (
    <span className="cell-content cell-clamp" title={value}>{value}</span>
);

const renderReleaseDateCell = (value: string) => (
    <span className="cell-content cell-no-clamp" title={value}>{value}</span>
);

type ColumnConfig = {
    key: ColumnKey;
    label: string;
    className?: string;
    renderCell: (game: Game) => JSX.Element;
    disableToggle?: boolean;
};

export const GameList: React.FC<GameListProps> = ({ games }) => {
    const [listConfig, setListConfig] = useStoredState<GameListConfigState>(
        STORAGE_KEYS.gameListConfig,
        createDefaultGameListConfig(),
        { parse: parseStoredGameListConfig }
    );

    const { pageSize, visibleColumns } = listConfig;
    const [showColumnPicker, setShowColumnPicker] = useState<boolean>(false);
    const [showPageSizePicker, setShowPageSizePicker] = useState<boolean>(false);
    const [isMobileLayout, setIsMobileLayout] = useState<boolean>(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.matchMedia('(max-width: 900px)').matches;
    });
    const columnPickerRef = useRef<HTMLDivElement | null>(null);
    const pageSizePickerRef = useRef<HTMLDivElement | null>(null);
    const virtualScrollRef = useRef<HTMLDivElement | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const query = window.matchMedia('(max-width: 900px)');
        const onChange = (event: MediaQueryListEvent) => {
            setIsMobileLayout(event.matches);
        };

        setIsMobileLayout(query.matches);
        query.addEventListener('change', onChange);

        return () => {
            query.removeEventListener('change', onChange);
        };
    }, []);

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (columnPickerRef.current && !columnPickerRef.current.contains(event.target as Node)) {
                setShowColumnPicker(false);
            }
            if (pageSizePickerRef.current && !pageSizePickerRef.current.contains(event.target as Node)) {
                setShowPageSizePicker(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setShowColumnPicker(false);
                setShowPageSizePicker(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const totalPages = useMemo(
        () => Math.max(1, Math.ceil(games.length / pageSize)),
        [games.length, pageSize]
    );

    useEffect(() => {
        setCurrentPage(prev => Math.min(prev, totalPages));
    }, [totalPages]);

    const pageStartIndex = (currentPage - 1) * pageSize;

    const visibleGames = useMemo(
        () => games.slice(pageStartIndex, pageStartIndex + pageSize),
        [games, pageStartIndex, pageSize]
    );

    const pageRangeStart = games.length > 0 ? pageStartIndex + 1 : 0;
    const pageRangeEnd = games.length > 0 ? pageStartIndex + visibleGames.length : 0;

    const shouldVirtualize = isMobileLayout && visibleGames.length >= VIRTUALIZATION_THRESHOLD;

    useEffect(() => {
        if (virtualScrollRef.current) {
            virtualScrollRef.current.scrollTop = 0;
        }
    }, [currentPage]);

    const rowVirtualizer = useVirtualizer({
        count: visibleGames.length,
        getScrollElement: () => virtualScrollRef.current,
        estimateSize: () => 182,
        overscan: 6,
        enabled: shouldVirtualize,
        measureElement: (element) => element.getBoundingClientRect().height
    });

    const tagsColumnWidth = useMemo(() => {
        const allTags = games.flatMap(game => game.tags);
        if (!allTags.length) {
            return '14ch';
        }

        const averageTagLength = allTags.reduce((sum, tag) => sum + tag.length + 1, 0) / allTags.length;
        const widthInCh = Math.max(12, Math.min(18, ((averageTagLength * 2) / 3) + 3));
        return `${widthInCh.toFixed(2)}ch`;
    }, [games]);

    const columns = useMemo<ColumnConfig[]>(() => [
        {
            key: 'title',
            label: 'Title',
            className: 'title-cell',
            disableToggle: true,
            renderCell: (game) => renderClampedCell(game.title)
        },
        {
            key: 'titleExact',
            label: 'Title (exact)',
            renderCell: (game) => renderClampedCell(game.titleExact || game.title)
        },
        {
            key: 'titleScreen',
            label: 'Title screen',
            renderCell: (game) => renderClampedCell(game.titleScreen || game.title)
        },
        {
            key: 'titleScreenExact',
            label: 'Title screen (exact)',
            renderCell: (game) => renderClampedCell(game.titleScreenExact || game.title)
        },
        {
            key: 'platform',
            label: 'Platform',
            renderCell: (game) => renderClampedCell(game.platform.join(', '))
        },
        {
            key: 'region',
            label: 'Region',
            className: 'region-cell',
            renderCell: (game) => renderClampedCell(game.region.join(', '))
        },
        {
            key: 'developer',
            label: 'Developer',
            renderCell: (game) => renderClampedCell(game.developer)
        },
        {
            key: 'publisher',
            label: 'Publisher',
            renderCell: (game) => renderClampedCell(game.publisher)
        },
        {
            key: 'releaseDate',
            label: 'Release Date',
            className: 'release-date-cell',
            renderCell: (game) => renderReleaseDateCell(game.releaseDate ? formatDate(game.releaseDate) : 'Unknown')
        },
        {
            key: 'id',
            label: 'ID',
            className: 'id-cell',
            renderCell: (game) => renderClampedCell(game.id)
        },
        {
            key: 'tags',
            label: 'Tags',
            className: 'tags-column',
            renderCell: (game) => <TagCell tags={game.tags} />
        }
    ], []);

    const activeColumns = useMemo(
        () => columns.filter(column => visibleColumns[column.key]),
        [columns, visibleColumns]
    );

    const shellStyle = useMemo(
        () => ({ ['--tags-column-width' as '--tags-column-width']: tagsColumnWidth } as CSSProperties),
        [tagsColumnWidth]
    );

    const buildRowKey = (game: Game, index: number): string => (
        `${game.id}-${game.platform.join('|')}-${game.region.join('|')}-${game.releaseDate?.getTime?.() ?? 0}-${index}`
    );

    const toggleColumn = (columnKey: ColumnKey) => {
        if (columnKey === 'title') {
            return;
        }
        setListConfig(prev => ({
            ...prev,
            visibleColumns: {
                ...prev.visibleColumns,
                [columnKey]: !prev.visibleColumns[columnKey]
            }
        }));
    };

    const selectPageSize = (nextPageSize: PageSizeOption) => {
        setListConfig(prev => ({
            ...prev,
            pageSize: nextPageSize
        }));
        setCurrentPage(1);
        setShowPageSizePicker(false);
    };

    const goToPage = (nextPage: number) => {
        const boundedPage = Math.max(1, Math.min(totalPages, nextPage));
        setCurrentPage(boundedPage);
    };

    const renderVirtualizedCards = () => (
        <div className="virtual-results-wrapper" ref={virtualScrollRef}>
            <div
                className="virtual-results-inner"
                style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const game = visibleGames[virtualRow.index];
                    const rowKey = buildRowKey(game, virtualRow.index);

                    return (
                        <article
                            key={rowKey}
                            ref={rowVirtualizer.measureElement}
                            data-index={virtualRow.index}
                            className="virtual-result-card"
                            style={{ transform: `translateY(${virtualRow.start}px)` }}
                        >
                            {activeColumns.map(column => (
                                <div
                                    key={column.key}
                                    className={`virtual-card-field ${column.className || ''} ${column.label === 'Title' || column.label === 'Tags' ? 'full' : ''}`}
                                >
                                    <span className="virtual-card-label">{column.label}</span>
                                    <div className="virtual-card-value">{column.renderCell(game)}</div>
                                </div>
                            ))}
                        </article>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section
            className={`game-list-shell ${!games.length ? 'empty' : ''}`}
            style={shellStyle}
        >
            <div className="game-list-header">
                <h2>Results</h2>
                <div className="results-tools">
                    <span className="results-count">{games.length} {games.length === 1 ? 'game' : 'games'}</span>
                    {games.length > 0 && (
                        <span className="results-page-status">
                            {pageRangeStart}-{pageRangeEnd}
                        </span>
                    )}
                    <div className="columns-picker-wrap" ref={columnPickerRef}>
                        <button
                            type="button"
                            className="columns-picker-btn"
                            onClick={() => setShowColumnPicker(prev => !prev)}
                            aria-expanded={showColumnPicker}
                            aria-label="Toggle table columns"
                            title="Show or hide columns"
                        >
                            <span>Columns</span>
                            <span className="columns-picker-arrow" aria-hidden="true">{showColumnPicker ? '▲' : '▼'}</span>
                        </button>
                        {showColumnPicker && (
                            <div className="columns-picker-menu">
                                {columns.map(column => (
                                    <label key={column.key} className={`column-option ${column.disableToggle ? 'fixed' : ''}`}>
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns[column.key]}
                                            disabled={Boolean(column.disableToggle)}
                                            onChange={() => toggleColumn(column.key)}
                                        />
                                        <span>{column.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="columns-picker-wrap results-limit-wrap" ref={pageSizePickerRef}>
                        <button
                            type="button"
                            className="columns-picker-btn"
                            onClick={() => setShowPageSizePicker(prev => !prev)}
                            aria-expanded={showPageSizePicker}
                            aria-label="Select number of visible results"
                            title="Select visible results"
                        >
                            <span>{pageSize}</span>
                            <span className="columns-picker-arrow" aria-hidden="true">{showPageSizePicker ? '▲' : '▼'}</span>
                        </button>
                        {showPageSizePicker && (
                            <div className="columns-picker-menu compact-menu">
                                {PAGE_SIZE_OPTIONS.map(option => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`menu-action-btn ${pageSize === option ? 'active' : ''}`}
                                        onClick={() => selectPageSize(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {!games.length ? (
                <div className="empty-state">
                    No results yet. Run a search to see matching games.
                </div>
            ) : (
                <>
                    {shouldVirtualize ? (
                        renderVirtualizedCards()
                    ) : (
                        <div className="table-wrapper">
                            <table className="game-table">
                                <thead>
                                    <tr>
                                        {activeColumns.map(column => (
                                            <th key={column.key} className={column.className}>{column.label}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {visibleGames.map((game, index) => (
                                        <tr key={buildRowKey(game, pageStartIndex + index)}>
                                            {activeColumns.map(column => (
                                                <td key={column.key} data-label={column.label} className={column.className}>
                                                    {column.renderCell(game)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {totalPages > 1 && (
                        <div className="pagination-bar" role="navigation" aria-label="Results pagination">
                            <div className="pagination-meta">
                                <span className="pagination-info">Page {currentPage} of {totalPages}</span>
                                <span className="pagination-range">{pageRangeStart}-{pageRangeEnd} of {games.length}</span>
                            </div>
                            <div className="pagination-controls">
                                <button
                                    type="button"
                                    className="pagination-btn"
                                    onClick={() => goToPage(1)}
                                    disabled={currentPage === 1}
                                >
                                    First
                                </button>
                                <button
                                    type="button"
                                    className="pagination-btn"
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    className="pagination-btn"
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                                <button
                                    type="button"
                                    className="pagination-btn"
                                    onClick={() => goToPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    Last
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default GameList;
