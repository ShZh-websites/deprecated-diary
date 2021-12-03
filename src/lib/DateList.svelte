<script>
  export let title;
  export let items;
</script>

<div>
  <h1 class="title">{title}</h1>
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
    font-family: Lato, sans-serif;
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
      font-family: Lato, sans-serif;
      display: inline-block;
      width: 7.5rem;
    }
    .content {
      font-family: "Source Serif Pro", "Noto Serif SC", serif;
      display: inline-block;
    }
  }
</style>