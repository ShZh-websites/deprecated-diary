<script context="module">
  export const prerender = true;

  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const { post, postInfo } = await fetch(`/api/${slug}.json`).then((r) => r.json());

    return {
      props: { post, postInfo }
    };
  }
</script>

<script>
  import * as marked from 'marked';
  import Comments from "disqus-svelte"
  import { onMount } from "svelte";
  import { dateFormatCN } from '../../utils/date.js';
  import { page } from "$app/stores";

  export let post;
  export let postInfo;

  let menu;
  let backToTop;
  onMount(() => {
    let originMenuTop = menu.style.top;
    document.onscroll = () => {
      // 展示back-to-top按钮
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        backToTop.style.bottom = "40px";
        menu.style.top = "20px"
      } else {
        backToTop.style.bottom = "-40px";
        menu.style.top = originMenuTop;
      }
    }
  })

  let tokens = marked.lexer(post);
  $: titles = tokens
    .filter(token => token.type === 'heading')
    .map(token => ({depth: token.depth, text: token.text}));
  $: html = marked.parser(tokens, null);
</script>

<svelte:head>
  <title>{postInfo.title}</title>
</svelte:head>

<ul bind:this={menu} class="menu">
  {#each titles as title}
    <li>
      {#if title.depth === 2}
        &nbsp;&nbsp;&nbsp;&nbsp;
      {/if}
      {title.text}
    </li>
  {/each}
</ul>

<article>
  <h1 class="article-title">{postInfo.title}</h1>
  {@html html}
  <div class="article-footer">
    <div class="article-footer-container">
      <p>沈之豪</p>
      <p>{dateFormatCN(new Date(postInfo.date))}</p>
    </div>
  </div>
</article>

<div class="discuss panel">
  <Comments identifier={$page.params.slug}/>
</div>

<button bind:this={backToTop} on:click="{() => scrollTo({ top: 0, behavior: 'smooth' })}" class="back-to-top">
  <svg aria-label="回到顶部" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"></path>
  </svg>
</button>

<style lang="scss">
  ul.menu {
    position: fixed;
    list-style: none;
    float: left;

    li {
      margin-left: 15px;
      position: relative;

      &:before {
        content: " ";
        position: absolute;
        background-color: rgb(133, 144, 166);

        display: inline-block;
        margin-right: 12px;
        top: 12px;
        left: -15px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      &:not(:last-child)::after {
        content: " ";
        position: absolute;
        display: block;
        top: 0;
        left: -12px;
        transform: translateX(-50%);
        width: 2px;
        height: 40px;
        margin-top: 12px;
        background: rgba(133, 144, 166, 0.12);
      }
    }
  }

  article {
    max-width: 45rem;
    margin: 30px auto 0;
    padding: 100px 100px 30px 100px;
    line-height: 1.5;

    font-size: 18px;
    font-weight: 400;
    font-family: var(--font-serif);

    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);

    .article-title {
      margin-bottom: 81px;
      text-align: center;

      font-size: 3em;
      font-weight: 400;
    }

    .article-footer {
      overflow: auto; // Clearfix

      .article-footer-container {
        float: right;
        text-align: center;
      }
    }
  }

  .discuss {
    text-align: center;
    max-width: 45rem;
    margin: 30px auto 0;
    padding: 20px 100px;
  }

  button.back-to-top {
    position: fixed;
    bottom: 0;
    right: 40px;

    border-radius: 4px;
    width: 40px;
    height: 40px;
    color: white;
    background-color: #ff69b4;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);

    transition: bottom ease-in-out 0.2s;

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.3) 0 0 15px;
    }
  }

  @media (max-width: 640px) {
    article {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
</style>
