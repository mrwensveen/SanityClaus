import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const GET_PROGRAMMING_LANGUAGE =
	groq`*[_type == "programmingLanguage" && slug.current == $slug][0]`;

export const GET_PROGRAMMING_LANGUAGES =
	groq`*[_type == "programmingLanguage" && defined(slug.current)] | order(coalesce(date, _createdAt) desc)`;

export const GET_POSTS_OR_LANGS = groq`
	*[_type in ["post", "programmingLanguage"] && defined(slug.current)] | order(coalesce(date, _createdAt) desc)
`;

export interface ProgrammingLanguage {
	_type: 'programmingLanguage';
	_createdAt: string;
	title?: string;
	slug: Slug;
	date?: string;
	mainImage?: ImageAsset;
	description: PortableTextBlock[];
	anecdote: PortableTextBlock[];
	link?: string;
	paradigms: { name: string; link: string }[];
}
