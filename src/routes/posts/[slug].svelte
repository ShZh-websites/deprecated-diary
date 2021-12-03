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

  $: markup = marked.parse(article.post);
</script>

<article>
  <h1 class="article-title">{article.frontMatter.title}</h1>
  {@html markup}
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
      text-align: center;

      font-size: 3em;
      font-weight: 400;
    }
  }
</style>