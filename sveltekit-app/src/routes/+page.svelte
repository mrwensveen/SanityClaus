<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import PostCard from '../components/PostCard.svelte';
	import LangCard from '../components/LangCard.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import type { Post } from '$lib/sanity/queries/posts';
	import type { ProgrammingLanguage } from '$lib/sanity/queries/programmingLanguages';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>

<section>
	{#if posts.length}
		{#each posts as post}
			{#if post._type === 'post'}
				<PostCard post={(post as Post)} />
			{:else if post._type === 'programmingLanguage'}
				<LangCard post={(post as ProgrammingLanguage)} />
			{/if}
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
