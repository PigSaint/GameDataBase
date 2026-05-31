import React, { useMemo, useState } from 'react';
import { buildTagPresentation } from '../utils/tagUtils';

interface TagCellProps {
    tags: string[];
}

export const TagCell: React.FC<TagCellProps> = React.memo(({ tags }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const { primaryTag, secondaryTags, isShortGenrePrimary } = useMemo(
        () => buildTagPresentation(tags),
        [tags]
    );

    if (!primaryTag && !secondaryTags.length) {
        return <span className="tag-empty">No tags</span>;
    }

    return (
        <div className={`tags-stack ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="tag-primary-line">
                {primaryTag && (
                    <span
                        className={`primary-tag-shell ${isShortGenrePrimary ? 'compact' : ''} ${isExpanded ? 'open' : ''}`}
                        aria-label={`Tag ${primaryTag}`}
                    >
                        <span className={`tag primary-tag primary-tag-base ${isShortGenrePrimary ? 'no-fade' : ''}`}>
                            <span className="tag-text">#{primaryTag}</span>
                        </span>
                        <span className="tag primary-tag primary-tag-expanded" aria-hidden="true">
                            <span className="tag-text">#{primaryTag}</span>
                        </span>
                    </span>
                )}
                {secondaryTags.length > 0 && (
                    <button
                        type="button"
                        className="tag-toggle-btn"
                        onClick={() => setIsExpanded(prev => !prev)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? 'Collapse tags' : 'Expand tags'}
                        title={isExpanded ? 'Collapse tags' : `Show ${secondaryTags.length} more tags`}
                    >
                        <span className="tag-toggle-arrow" aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
                    </button>
                )}
            </div>
            {secondaryTags.length > 0 && (
                <div className="tags-secondary">
                    {secondaryTags.map(tag => (
                        <span key={tag} className="tag">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
});

TagCell.displayName = 'TagCell';

export default TagCell;
