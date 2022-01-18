<script>
  import { onMount } from 'svelte';

  let activeIndex;
  const routes = [
    {
      name: '首页',
      path: '/'
    },
    {
      name: '归档',
      path: '/archive'
    },
    {
      name: '留言',
      path: '/messages'
    },
    {
      name: '友链',
      path: '/links'
    },
    {
      name: '关于',
      path: '/about'
    }
  ];

  onMount(() => {
    activeIndex = routes.findIndex((route) => route.path === window.location.pathname);
    let initialActive = getNavById(activeIndex);
    if (initialActive !== null) {
      initialActive.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
  });

  function getNavById(id) {
    return document.querySelector(`li:nth-of-type(${id + 1}) > a`);
  }

  function handleClick(event) {
    if (activeIndex !== -1) {
      let prevActive = getNavById(activeIndex);
      prevActive.style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    activeIndex = +event.target.id;
  }
</script>

<nav>
  <ul>
    {#each routes as route, id}
      <li>
        <a {id} href={route.path} on:click={handleClick}>{route.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  $vertical-padding: 10px;

  nav {
    border: 0;
    box-shadow: 0 0 10px;
    background-color: var(--primary-color);

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;

      li {
        font-size: 1rem;
        list-style-type: none;

        a {
          display: block;
          margin: 0;
          padding: $vertical-padding 2.2em;
          color: white;
          font-family: var(--font-sans);
          text-decoration: none;
        }
      }
    }
  }


  @media (max-width: 750px) {
    a {
      padding: $vertical-padding 1.5em !important;
    }
  }

  @media (max-width: 425px) {
    a {
      padding: $vertical-padding 1em !important;
    }
  }
</style>
