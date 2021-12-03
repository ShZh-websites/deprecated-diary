<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const { post, postInfo } = await fetch(`/api/${slug}.json`).then(r => r.json());

    return {
      props: { post, postInfo }
    }
  }
</script>

<script>
  import * as marked from 'marked';
  import { dateFormatCN } from "../../utils/date.js";

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
      <p> 沈之豪 </p>
      <p> {dateFormatCN(new Date(postInfo.date))}</p>
    </div>
  </div>
</article>

<style lang="scss">
  article {
    margin: 0 auto;
    max-width: 45rem;
    line-height: 1.5;

    font-size: 18px;
    font-weight: 400;
    font-family: "Source Serif Pro", "Noto Serif SC", serif;

    .article-title {
      margin-top: 135px;
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
</style>