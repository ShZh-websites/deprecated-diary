<script>
  export let content;
  export let href;
</script>

<a href={href}>
  <b>{content}</b>
</a>

<style lang="scss">
  a {
    position: relative;
    cursor: alias;

    b {
      &::before {
        content: '';
        position: absolute;
        bottom: 0.1em;
        left: 0;
        right: 0;
        opacity: 0.8;
        border-bottom: 1px solid currentColor;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0.1em;
        left: 0;
        right: 0;
        border-bottom: 3px solid currentColor;
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