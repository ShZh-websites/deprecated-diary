<script>
  import Nav from '$lib/Nav.svelte';
  import Copyright from '$lib/Copyright.svelte';
  import { afterUpdate } from 'svelte';

  let cat;
  afterUpdate(() => {
    if (window.location.pathname.startsWith('/posts')) {
      cat.style.display = 'none';
    } else {
      cat.style.display = 'block';
    }
  });
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

<img
  bind:this={cat}
  src="https://res.cloudinary.com/shzh7/image/upload/v1642506825/diary/cat_h3ntgc.png"
  alt="cat" />

<style lang="scss">
  img {
    position: fixed;
    width: 10rem;
    right: 60px;
    bottom: 5px;
  }

  @media (max-width: 1280px) {
    img {
      display: none !important;
    }
  }
</style>
