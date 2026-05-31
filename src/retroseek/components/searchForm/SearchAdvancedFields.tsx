import React from 'react';

type SearchAdvancedFieldsProps = {
    isAdvancedOpen: boolean;
    onToggleAdvanced: () => void;
    developer: string;
    onDeveloperChange: (value: string) => void;
    publisher: string;
    onPublisherChange: (value: string) => void;
    releaseDateQuery: string;
    onReleaseDateQueryChange: (value: string) => void;
    releaseDateTo: string;
    isDateToActive: boolean;
    onActivateDateTo: () => void;
    onReleaseDateToChange: (value: string) => void;
    hasDateInput: boolean;
    onResetDates: () => void;
    includeUnknownReleaseDate: boolean;
    onToggleUnknownReleaseDate: () => void;
};

export const SearchAdvancedFields: React.FC<SearchAdvancedFieldsProps> = ({
    isAdvancedOpen,
    onToggleAdvanced,
    developer,
    onDeveloperChange,
    publisher,
    onPublisherChange,
    releaseDateQuery,
    onReleaseDateQueryChange,
    releaseDateTo,
    isDateToActive,
    onActivateDateTo,
    onReleaseDateToChange,
    hasDateInput,
    onResetDates,
    includeUnknownReleaseDate,
    onToggleUnknownReleaseDate
}) => {
    return (
        <>
            <div className={`advanced-filters-panel ${isAdvancedOpen ? 'open' : ''}`}>
                <div className="advanced-filters-inner">
                    <div className="compact-filter-row">
                        <div className="form-group compact-item">
                            <label>Developer</label>
                            <input
                                type="text"
                                value={developer}
                                onChange={(event) => onDeveloperChange(event.target.value)}
                            />
                        </div>
                        <div className="form-group compact-item">
                            <label>Publisher</label>
                            <input
                                type="text"
                                value={publisher}
                                onChange={(event) => onPublisherChange(event.target.value)}
                            />
                        </div>
                        <div className="form-group compact-item date-field-group">
                            <label>Release Date</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="YYYY-MM-DD"
                                value={releaseDateQuery}
                                onChange={(event) => onReleaseDateQueryChange(event.target.value)}
                            />
                            <small className="field-help">Formats: YYYY, YYYY-MM, YYYY-MM-DD.</small>
                        </div>
                        <div className="form-group compact-item date-field-group">
                            <label>Release Date To</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="YYYY-MM-DD"
                                value={releaseDateTo}
                                readOnly={!isDateToActive}
                                className={!isDateToActive ? 'date-to-inactive' : ''}
                                onClick={onActivateDateTo}
                                onFocus={onActivateDateTo}
                                onChange={(event) => onReleaseDateToChange(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group date-actions-group">
                        <button
                            type="button"
                            className={`date-action-btn date-reset-btn ${!hasDateInput ? 'disabled' : ''}`}
                            onClick={onResetDates}
                            disabled={!hasDateInput}
                        >
                            Reset Dates
                        </button>
                        <button
                            type="button"
                            className={`date-action-btn unknown-release-date-btn ${includeUnknownReleaseDate ? 'active' : ''}`}
                            onClick={onToggleUnknownReleaseDate}
                        >
                            Unknown Dates
                        </button>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="advanced-toggle-btn"
                onClick={onToggleAdvanced}
                aria-expanded={isAdvancedOpen}
            >
                <span className="advanced-toggle-arrow" aria-hidden="true">{isAdvancedOpen ? '▲' : '▼'}</span>
            </button>
        </>
    );
};

export default SearchAdvancedFields;
