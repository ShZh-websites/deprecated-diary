<script>
  export let content;
  export let href;
  export let tooltip;
</script>

<a href={href} class="underline">
  <b class="tooltip" {tooltip}>{content}</b>
</a>

<style lang="scss">
  a {
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
      border-bottom: 3px solid currentColor;
    }
  }

  .tooltip {
    position: relative;

    &:after {
      // Position and size
      position: absolute;
      left: 0;
      top: 1.5em;
      margin-left: -40%;
      margin-right: -100%;
      display: block;
      max-width: 320px;
      padding: 6px 7px;
      z-index: 1;
      border-radius: 5px;
      // Color and content
      opacity: 0;
      color: white;
      background-color: black;
      content: attr(tooltip);
      // Font relevant
      font-size: 15px;
      line-height: 18px;
      font-weight: 400;
      // Animation
      transform: translateY(-10px);
      transition:
        opacity 150ms ease-in,
        transform 150ms ease-in-out;
    }

    &:hover::after {
      opacity: 1;
      transition-delay: 0ms;
      transform: none;
    }
  }
</style>