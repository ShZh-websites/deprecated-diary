<script context="module">
  export async function load({ fetch }) {
    const postList =  await fetch('/api/posts.json').then((r) => r.json());

    return {
      props: { postList }
    }
  }
</script>

<script>
  import DateList from "$lib/DateList.svelte";

  export let postList;
</script>

<div class="container">
  <DateList title={2021} items={postList}/>
</div>

<style lang="scss">
  .container {
    max-width: 33rem;
    margin: 0 auto;
  }
</style>