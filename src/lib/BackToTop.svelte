<script>
  import { onMount } from "svelte";

  let backToTop;
  onMount(() => {
    document.onscroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        backToTop.style.bottom = "40px";
      } else {
        backToTop.style.bottom = "-40px";
      }
    }
  })
</script>

<button bind:this={backToTop} on:click="{() => scrollTo({ top: 0, behavior: 'smooth' })}">
  <svg aria-label="回到顶部" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"></path>
  </svg>
</button>

<style lang="scss">
  button {
    position: fixed;
    bottom: 0;
    right: 40px;

    border-radius: 4px;
    width: 40px;
    height: 40px;
    color: white;
    background-color: var(--sencondary-color);
    box-shadow: var(--box-shadow-in-panel);

    transition: bottom ease-in-out 0.2s;

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.3) 0 0 15px;
    }
  }
</style>