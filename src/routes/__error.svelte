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
  <div class="panel full-height text-center">
    <h1>404</h1>
    <p>您似乎来到了没有知识的荒漠...</p>
  </div>
{:else}
  <h1>{message}</h1>
{/if}

<style lang="scss">
  h1 {
    margin-bottom: 8rem;
    font-size: 7em;
    transform: scale(0.9, 1.1);
  }
</style>
