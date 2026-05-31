import React from 'react';
import Select, { MultiValue } from 'react-select';
import { CommonSelectProps, SelectOption } from './types';

type SearchBasicFieldsProps = {
    title: string;
    onTitleChange: (value: string) => void;
    platformOptions: SelectOption[];
    selectedPlatformOptions: SelectOption[];
    onPlatformChange: (selected: MultiValue<SelectOption>) => void;
    regionOptions: SelectOption[];
    selectedRegionOptions: SelectOption[];
    onRegionChange: (selected: MultiValue<SelectOption>) => void;
    commonSelectProps: CommonSelectProps;
    isSubmitDisabled: boolean;
    submitLabel: string;
};

export const SearchBasicFields: React.FC<SearchBasicFieldsProps> = ({
    title,
    onTitleChange,
    platformOptions,
    selectedPlatformOptions,
    onPlatformChange,
    regionOptions,
    selectedRegionOptions,
    onRegionChange,
    commonSelectProps,
    isSubmitDisabled,
    submitLabel
}) => {
    return (
        <div className="search-form-top">
            <div className="filters-grid">
                <div className="form-group title-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => onTitleChange(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Platform</label>
                    <Select
                        isMulti
                        options={platformOptions}
                        value={selectedPlatformOptions}
                        onChange={onPlatformChange}
                        {...commonSelectProps}
                        noOptionsMessage={() => 'No platforms found'}
                    />
                </div>
                <div className="form-group">
                    <label>Region</label>
                    <Select
                        isMulti
                        options={regionOptions}
                        value={selectedRegionOptions}
                        onChange={onRegionChange}
                        {...commonSelectProps}
                        noOptionsMessage={() => 'No regions found'}
                    />
                </div>
            </div>
            <div className="submit-row submit-row-top">
                <button className="search-submit-btn" type="submit" disabled={isSubmitDisabled}>
                    {submitLabel}
                </button>
            </div>
        </div>
    );
};

export default SearchBasicFields;
