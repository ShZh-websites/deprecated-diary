<script>
  import Nav from '$lib/Nav.svelte';
  import Copyright from '$lib/Copyright.svelte';
</script>

<header>
  <Nav />
</header>
<main>
  <slot />
</main>
<footer>
  <Copyright />
</footer>

<img src="static/cat.png" alt="cat">

<style lang="scss">
  img {
    position: fixed;
    width: 10rem;
    right: 60px;
    bottom: 5px;
  }
</style>
