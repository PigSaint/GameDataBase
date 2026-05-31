export type TagPresentation = {
    primaryTag: string | null;
    secondaryTags: string[];
    isShortGenrePrimary: boolean;
};

export const normalizeTag = (input: string): string => input
    .trim()
    .replace(/^#/, '')
    .replace(/\s+/g, ' ')
    .toLowerCase();

export const canonicalTag = (input: string): string => normalizeTag(input)
    .replace(/[^a-z0-9]/g, '');

export const isGenreTag = (input: string): boolean => canonicalTag(input).startsWith('genre');

const dedupeTags = (tags: string[]): string[] => {
    const uniqueTags: string[] = [];
    const seen = new Set<string>();

    for (const rawTag of tags) {
        const trimmed = rawTag.trim();
        if (!trimmed) {
            continue;
        }

        const normalized = canonicalTag(trimmed);
        if (!normalized || seen.has(normalized)) {
            continue;
        }

        seen.add(normalized);
        uniqueTags.push(trimmed);
    }

    return uniqueTags;
};

export const buildTagPresentation = (tags: string[]): TagPresentation => {
    const uniqueTags = dedupeTags(tags);
    const genreTags = uniqueTags.filter(tag => isGenreTag(tag));

    const primaryTag = genreTags[0] || uniqueTags[0] || null;
    const primaryCanonical = primaryTag ? canonicalTag(primaryTag) : null;

    const secondaryTags = uniqueTags.filter(tag => {
        const normalized = canonicalTag(tag);
        if (normalized === primaryCanonical) {
            return false;
        }

        if (isGenreTag(tag)) {
            return false;
        }

        return true;
    });

    const isShortGenrePrimary = Boolean(
        primaryTag &&
        isGenreTag(primaryTag) &&
        normalizeTag(primaryTag).length <= 25
    );

    return {
        primaryTag,
        secondaryTags,
        isShortGenrePrimary
    };
};
