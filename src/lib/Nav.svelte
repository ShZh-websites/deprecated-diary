<nav>
  <ul>
    <li>
      <a href="/">首页</a>
    </li>
    <li>
      <a href="/archive">归档</a>
    </li>
    <li>
      <a href="/messages">留言</a>
    </li>
    <li>
      <a href="/links">友链</a>
    </li>
    <li>
      <a href="/about">关于</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    border: 0;
    padding: 0 2rem;
    box-shadow: 0 0 10px;
    background-color: rgb(63, 81, 181);

    ul {
      margin: 0;
      padding: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      li {
        font-size: 1rem;
        list-style-type: none;

        a {
          color: white;
          font-family: var(--font-sans);
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: 640px) {
    nav {
      padding: 0 10rem;
    }
  }

  @media (min-width: 1280px) {
    nav {
      padding: 0 27rem;
    }
  }
</style>
