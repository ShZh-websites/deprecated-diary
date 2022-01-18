<script context="module">
  export const prerender = true;

  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const { post, postInfo } = await fetch(`/api/${slug}.json`).then((r) => r.json());

    return {
      props: { post, postInfo }
    };
  }
</script>

<script>
  import { page } from '$app/stores';
  import * as marked from 'marked';
  import Menu from '$lib/Menu.svelte';
  import BackToTop from '$lib/BackToTop.svelte';
  import Article from '$lib/Article.svelte';
  import Comments from '$lib/Comments.svelte';

  export let post;
  export let postInfo;

  const tokens = marked.lexer(post);
  const html = marked.parser(tokens, null);
  const headings = tokens
    .filter((token) => token.type === 'heading')
    .map((token) => ({ depth: token.depth, text: token.text }));
</script>

<svelte:head>
  <title>{postInfo.title}</title>
</svelte:head>

<div class="menu-wrapper">
  <Menu {headings} />
</div>
<Article title={postInfo.title} contentHTML={html} publishDate={new Date(postInfo.date)} />
<Comments id={$page.params.slug} />
<div class="back-to-top-wrapper">
  <BackToTop />
</div>

<style lang="scss">
  @media (max-width: 80rem) {
    .menu-wrapper {
      display: none;
    }
  }

  @media (max-width: 70rem) {
    .back-to-top-wrapper {
      display: none;
    }
  }
</style>
