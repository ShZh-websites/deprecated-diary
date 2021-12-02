<script>
  export let news;
</script>

<div>
  <h1 class="news-title">News</h1>
  <ul>
    {#each news as item}
      <li>
        <div class="news-date">{item.date}</div>
        <div class="news-content">{item.content}</div>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .news-title {
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

    .news-date {
      font-weight: 430;
      font-family: Lato, sans-serif;
      display: inline-block;
      width: 7.5rem;
    }
    .news-content {
      font-family: "Source Serif Pro", "Noto Serif SC", serif;
      display: inline-block;
    }
  }
</style>