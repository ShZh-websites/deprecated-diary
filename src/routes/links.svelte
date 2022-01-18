<script>
  import Link from '$lib/TooltipLink.svelte';

  const myWebsites = [
    {
      link: 'https://shzh.me',
      title: '我的个人主页',
      summary: '包括了我个人简介，社交网站链接等。帮助其他人更好地认识我。'
    }
  ];
</script>

<div class="container">
  <div class="fl panel">
    <h1>友情链接</h1>
    <p>暂无，你可以联系我以交换链接</p>
  </div>
  <div class="other panel">
    <h1>其他链接</h1>
    <ul>
      {#each myWebsites as myWebsite}
        <li>
          <div class="website-link">
            <Link
              content={myWebsite.title}
              href={myWebsite.link}
              tooltip={'地址：' + myWebsite.link}
            />
          </div>
          <div class="website-summary">
            {myWebsite.summary}
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  $no-data-font-color: #666;

  .container {
    max-width: 50rem;
    margin: 0 auto;
    text-align: center;
    font-family: var(--font-serif);

    .fl p {
      display: block;
      margin-top: 5rem;
      margin-bottom: 8rem;
      color: $no-data-font-color;
    }

    .other {
      padding-bottom: 5rem;

      ul {
        text-align: start;

        li {
          margin-left: 5rem;
          .website-link {
            display: inline;
            font-weight: 600;
            &:after {
              content: '：';
            }
          }
          .website-summary {
            display: inline;
          }
        }
      }
    }
  }

  @media (max-width: 52em) {
    ul {
      padding-left: 0;
      margin-left: -2em;
      margin-right: -2em;

      li {
        margin: 0 3rem !important;
      }
    }
  }
</style>
