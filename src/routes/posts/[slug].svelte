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
  import { dateFormatCN } from '../../utils/date.js';

  export let post;
  export let postInfo;

  $: markup = marked.parse(post);
</script>

<svelte:head>
  <title>{postInfo.title}</title>
</svelte:head>

<article>
  <h1 class="article-title">{postInfo.title}</h1>
  {@html markup}
  <div class="article-footer">
    <div class="article-footer-container">
      <p>沈之豪</p>
      <p>{dateFormatCN(new Date(postInfo.date))}</p>
    </div>
  </div>
</article>

<style lang="scss">
  article {
    max-width: 45rem;
    margin: 30px auto 0;
    padding: 100px 100px 0 100px;
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

  h1 {
    font-family: var(--font-serif);
  }

  @media (max-width: 640px) {
    article {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
</style>
