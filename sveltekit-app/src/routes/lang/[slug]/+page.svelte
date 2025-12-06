<script lang="ts">
	import type { SanityAsset } from '@sanity/image-url';
	import { PortableText } from '@portabletext/svelte';
	import { useQuery } from '@sanity/svelte-loader';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import type { PageData } from './$types';
	import Code from '../../../components/blockContent/Code.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: post } = $q);
	
	const components = {
		types: {
			code: Code
		}
	};
</script>

<section class="post">
	{#if post}
		{#if post.mainImage}
			<img
				class="post__cover"
				src={urlFor(post.mainImage as SanityAsset).url()}
				alt="Cover image for {post.title}"
			/>
		{:else}
			<div class="post__cover--none"></div>
		{/if}
		<div class="post__container">
			<div>
				<h1 class="post__title">{post.title}</h1>
				<p class="post__date">
					{formatDate(post.date || post._createdAt)}
				</p>
				{#if post.description}
					<div class="post__content">
						<PortableText components={components} value={post.description} />
					</div>
				{/if}
				{#if post.anecdote}
					<div class="post__content">
						<PortableText value={post.anecdote} components={components} />
					</div>
				{/if}
			</div>
			<aside>
				{#if post?.paradigms?.length}
				<h2>Paradigms</h2>
				<ul>
					{#each post.paradigms as paradigm }
						<li><a href={paradigm.link} target="_blank">{paradigm.name}</a></li>
					{/each}
				</ul>
				{/if}
			</aside>
		</div>
	{/if}
</section>
<style>
	.post {
		width: 100%;
		margin: var(--space-1) 0 var(--space-4);
	}

	.post .post__cover,
	.post .post__cover--none {
		width: 100%;
		height: 200px;
		-o-object-fit: cover;
		object-fit: cover;
	}

	.post .post__cover--none {
		background: var(--black);
	}

	.post .post__container {
		padding: 0 var(--space-3);
		display: flex;
		justify-content: center;
	}

	.post .post__content {
		font-family: var(--font-family-serif);
		font-weight: 400;
		font-size: var(--font-size-4);
		line-height: var(--line-height-5);
		letter-spacing: -0.02em;
		margin-top: var(--space-6);
	}

	.post .post__content blockquote {
		border-left: 5px solid var(--black);
		padding-left: var(--space-3);
		margin-left: var(--space-4);
	}

	.post .post__content a {
		color: var(--blue-600);
		text-decoration: none;
	}

	.post .post__title {
		font-family: var(--font-family-sans);
		font-size: var(--font-size-7);
		line-height: var(--line-height-6);
		margin: var(--space-4) 0;
		font-weight: 800;
	}

	.post .post__excerpt {
		font-family: var(--font-family-serif);
		font-size: var(--font-size-5);
		line-height: var(--line-height-4);
		margin-top: 0;
		font-weight: 400;
	}

	.post .post__date {
		font-family: var(--font-family-sans);
		font-weight: 600;
		font-family: var(--font-family-sans);
		font-size: var(--font-size-1);
		line-height: var(--line-height-1);
		margin-top: var(--space-4);
	}

	@media (min-width: 800px) {
		.post .post__cover,
		.post .post__cover--none {
			width: 750px;
			height: 380px;
		}

		.post .post__title {
			font-size: var(--font-size-10);
			line-height: var(--line-height-10);
			margin: var(--space-6) 0 0;
			letter-spacing: -0.025em;
		}

		.post .post__excerpt {
			font-size: var(--font-size-5);
			line-height: var(--line-height-5);
			margin-top: var(--space-3);
			margin-bottom: var(--space-3);
		}

		.post .post__date {
			font-size: var(--font-size-3);
			line-height: var(--line-height-2);
			margin-top: var(--space-0);
		}

		.post .post__content {
			margin-top: var(--space-7);
		}
	}
</style>
