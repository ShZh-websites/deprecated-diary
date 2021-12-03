<script context="module">
  export async function load({ fetch }) {
    const postList =  await fetch('/api/posts.json').then((r) => r.json());

    return {
      props: { postList }
    }
  }
</script>

<script>
  import PostList from "$lib/PostList.svelte";

  export let postList;
</script>

<div class="container">
  <PostList year={2021} items={postList}/>
</div>

<style lang="scss">
  .container {
    max-width: 33rem;
    margin: 0 auto;
  }
</style>