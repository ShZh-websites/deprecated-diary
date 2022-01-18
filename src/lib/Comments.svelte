<script>
  import Comments from "disqus-svelte"

  export let id;
</script>

<div class="wrapper panel">
  <Comments identifier={id}/>
</div>

<style lang="scss">
  .wrapper {
    text-align: center;
    max-width: 45rem;
    margin: 30px auto 0;
    padding: 20px 100px;
  }
</style>