export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://chaeokeefe.com';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: "Chae O'Keefe",
	title: "Chae O'Keefe",
	description: "Personal site of Chae O'Keefe.",
	siteUrl: normalizedSiteUrl,
	email: 'chaeokeefe@gmail.com',
	locale: 'en-US',
	authorName: "Chae O'Keefe",
	authorRole: '',
	keywords: ["Chae O'Keefe"],
	ogImage: '/og-image.svg',
	navLinks: [],
	extraPages: [],
	legalLinks: [],
	socialLinks: [],
};
