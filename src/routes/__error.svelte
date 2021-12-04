<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message
      }
    };
  }
</script>

<script>
  export let status;
  export let message;
</script>

{#if status === 404}
  <div class="not-found">
    <h1>404</h1>
    <p>您似乎来到了没有知识的荒漠...</p>
  </div>
{:else}
  <h1>{message}</h1>
{/if}

<style lang="scss">
  .not-found {
    text-align: center;
    margin-bottom: 20rem;

    h1 {
      margin-bottom: 7rem;
      font-size: 7em;
      transform: scale(0.8, 1.2);
    }
  }
</style>
