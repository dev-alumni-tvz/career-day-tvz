export type GalleryArchive = {
	year: number;
	url: string;
};

export const featuredGallery: GalleryArchive = {
	year: 2026,
	url: 'https://alumnitvz.pixieset.com/tvzcareerday2026/',
};

export const galleryArchive: GalleryArchive[] = [
	{ year: 2025, url: 'https://tvzcareerday.pixieset.com/tvzcareerday2025/' },
	{ year: 2024, url: 'https://careerdaytvz.pixieset.com/careerdaytvz2024/' },
	{ year: 2023, url: 'https://alumnitvz.pixieset.com/tvzcareerday2023/' },
];
