import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const postQuery = groq`*[_type == "programmingLanguage" && slug.current == $slug][0]`;

export const postsQuery = groq`*[_type == "programmingLanguage" && defined(slug.current)] | order(_createdAt desc)`;

export interface ProgrammingLanguage {
	_type: 'programmingLanguage';
	_createdAt: string;
	title?: string;
	slug: Slug;
	mainImage?: ImageAsset;
	description: PortableTextBlock[];
	link?: string;
	paradigms: { name: string; link: string }[];
}
