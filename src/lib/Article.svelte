<script>
  export let title;
  export let contentHTML;
  export let publishDate;

  function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
  }
</script>

<article>
  <h1 class="article-title">{title}</h1>
  {@html contentHTML}
  <div class="article-footer">
    <div class="article-footer-container">
      <p>沈之豪</p>
      <p>{formatDate(publishDate)}</p>
    </div>
  </div>
</article>

<style lang="scss">
  article {
    width: 45rem;
    margin: 30px auto 0;
    padding: 100px 100px 30px 100px;
    line-height: 1.5;

    font-size: 18px;
    font-weight: 400;
    font-family: var(--font-serif);

    background-color: white;
    border-radius: 5px;
    box-shadow: var(--box-shadow-in-panel);

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

  @media (max-width: 47rem) {
    article {
      width: auto !important;
      margin-left: 1rem;
      margin-right: 1rem;

      padding: 80px 40px 30px 40px;
    }
  }

  @media (max-width: 425px) {
    .article-title {
      font-size: 2em !important;
    }
  }
</style>
