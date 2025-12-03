import { GET_POSTS_OR_LANGS } from '$lib/sanity/queries/programmingLanguages';
import type { GET_POSTS_OR_LANGSResult } from '$lib/sanity/sanity.types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const posts = await loadQuery<GET_POSTS_OR_LANGSResult>(GET_POSTS_OR_LANGS);

	// We pass the data in a format that is easy for `useQuery` to consume in the
	// corresponding `+page.svelte` file, but you can return the data in any
	// format you like.
	return {
		query: GET_POSTS_OR_LANGS,
		options: { initial: posts }
	};
};
