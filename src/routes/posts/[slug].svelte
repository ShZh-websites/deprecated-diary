<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const article = await fetch(`/api/${slug}.json`).then(r => r.json());

    return {
      props: {article}
    }
  }
</script>

<script>
  import * as marked from 'marked';

  export let article;

  export function formatDate(dateStr) {
    const dateList = dateStr.split('-');
    return `${dateList[0]}年${dateList[1]}月${dateList[2]}日`;
  }

  $: markup = marked.parse(article.post);
</script>

<svelte:head>
  <title>{article.frontMatter.title}</title>
</svelte:head>


<article>
  <h1 class="article-title">{article.frontMatter.title}</h1>
  {@html markup}
  <div class="article-footer">
    <div class="article-footer-container">
      <p> 沈之豪 </p>
      <p> {formatDate(article.frontMatter.date)}</p>
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

    a {
      color: black;
    }
  }
</style>