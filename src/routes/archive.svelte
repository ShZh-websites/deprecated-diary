<script context="module">
  import { dateFormatEN } from '../utils/date.js';

  export async function load({ fetch }) {
    const originPosts = await fetch('/api/posts.json').then((r) => r.json());
    const postList = originPosts.map((post) => ({
      ...post,
      date: dateFormatEN(new Date(post.date))
    }));
    return {
      props: { postList }
    };
  }
</script>

<script>
  import PostList from '$lib/PostList.svelte';

  export let postList;
</script>

<svelte:head>
  <title>日记本 | 归档</title>
</svelte:head>

<div class="container panel">
  <PostList year={2021} items={postList} />
</div>

<style lang="scss">
  .container {
    min-height: calc(100vh - 215px);
  }

  @media (max-width: 640px) {
    .container {
      margin: 0 3rem;
    }
  }
</style>
