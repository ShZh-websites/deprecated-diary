<script>
  export let content;
  export let href;
  export let tooltip;
</script>

<a href={href}>
  <b class="tooltip" {tooltip}>{content}</b>
</a>

<style lang="scss">
  a {
    position: relative;
    cursor: alias;

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

  .tooltip {
    position: relative;

    &:after {
      // 位置和大小
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
      // 颜色和内容
      opacity: 0;
      color: white;
      background-color: black;
      content: attr(tooltip);
      // 字体
      font-size: 15px;
      line-height: 18px;
      font-weight: 400;
      // 动画相关
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