<script>
  export let items;
</script>

<div>
  <h1 class="title">News</h1>
  <ul>
    {#each items as item}
      <li>
        <div class="date">{item.date}</div>
        <div class="content">{item.content}</div>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .title {
    font-size: 2em;
    font-weight: 300;
    font-family: var(--font-en);
  }

  div {
    max-width: 43rem;
    margin: 0 auto;
  }
  ul {
    margin-left: 1rem;
    line-height: 2;

    .date {
      font-weight: 430;
      font-family: var(--font-en);
      display: inline-block;
      width: 7.5rem;
    }
    .content {
      font-family: var(--font-serif);
      display: inline-block;
    }
  }

  @media (max-width: 640px) {
    .title {
      text-align: center;
    }

    ul {
      margin-left: 0;

      .content {
        margin-left: 1.5em;
      }
    }
  }

  @media (max-width: 426px) {
    ul {
      margin-left: -1em;

      .content {
        margin-left: 0;
      }
    }
  }
</style>
