<script>
  export let year;
  export let items;
</script>

<div>
  <h1 class="year">{year}</h1>
  <ul>
    {#each items as item}
      <li>
        <div class="date">{item.date}</div>
        <a href={item.link}>
          <div class="content">{item.title}</div>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .year {
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
      width: 4rem;
    }
    .content {
      cursor: alias;
      position: relative;
      display: inline-block;
      font-family: var(--font-serif);

      &::after {
        content: '';
        position: absolute;
        bottom: 0.1em;
        left: 0;
        right: 0;
        border-bottom: 1px solid currentColor;
        transform-origin: right center;
        transform: scaleX(0);
        transition: transform ease-in-out 0.2s;
      }

      &:hover::after {
        transform-origin: left center;
        transform: scaleX(1);
      }
    }
  }
</style>
