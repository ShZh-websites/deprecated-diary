<script>
  import { onMount } from 'svelte';

  export let headings;

  let menu;
  onMount(() => {
    let originMenuTop = menu.style.top;
    document.onscroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menu.style.top = '20px';
      } else {
        menu.style.top = originMenuTop;
      }
    };
  });
</script>

<ul bind:this={menu}>
  {#each headings as heading}
    <li>
      {#if heading.depth === 2}
        &nbsp;&nbsp;&nbsp;&nbsp;
      {/if}
      {heading.text}
    </li>
  {/each}
</ul>

<style lang="scss">
  $list-dot-color: rgb(133, 144, 166);
  $list-line-color: rgba(133, 144, 166, 0.12);

  ul {
    position: fixed;
    list-style: none;
    float: left;

    li {
      margin-left: 15px;
      position: relative;

      &:before {
        content: ' ';
        position: absolute;
        background-color: $list-dot-color;

        display: inline-block;
        margin-right: 12px;
        top: 12px;
        left: -15px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      &:not(:last-child)::after {
        content: ' ';
        position: absolute;
        display: block;
        top: 0;
        left: -12px;
        transform: translateX(-50%);
        width: 2px;
        height: 40px;
        margin-top: 12px;
        background: $list-line-color;
      }
    }
  }
</style>
