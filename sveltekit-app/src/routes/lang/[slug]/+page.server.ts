import { error } from '@sveltejs/kit';
import { GET_PROGRAMMING_LANGUAGE } from '$lib/sanity/queries/programmingLanguages';
import type { GET_PROGRAMMING_LANGUAGEResult } from '$lib/sanity/sanity.types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };
	const initial = await loadQuery<GET_PROGRAMMING_LANGUAGEResult>(GET_PROGRAMMING_LANGUAGE, params);

	if (!initial.data) {
		error(404, {
			message: 'Not found'
		});
	}

	// We pass the data in a format that is easy for `useQuery` to consume in the
	// corresponding `+page.svelte` file, but you can return the data in any
	// format you like.
	return {
		query: GET_PROGRAMMING_LANGUAGE,
		params,
		options: { initial }
	};
};
