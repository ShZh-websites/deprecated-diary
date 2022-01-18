<script context="module">
  export async function load({ fetch }) {
    const news = await fetch('/api/news.json').then((r) => r.json());
    return {
      props: { news }
    };
  }
</script>

<script>
  import NewsList from '$lib/NewsList.svelte';
  import Link from '$lib/TooltipLink.svelte';
  import Avatar from '$lib/Avatar.svelte';

  export let news;
</script>

<svelte:head>
  <title>日记本 | 首页</title>
</svelte:head>

<div class="panel index-panel">
  <div class="figure">
    <h1>ShZh的日记本</h1>
    <Avatar
      src="https://res.cloudinary.com/shzh7/image/upload/v1638439744/szh_pg8oum.png"
      alt="ShZh的头像"
    />
  </div>
  <section class="intro">
    <p>Hi，我是沈之豪，这是我的日记小站，也是我写自己生活经历和各种感悟的地方。</p>
    <p>和我的技术博客不同，博客里面全都是冷冰冰的技术博文，而这里的内容人情味更多一点。</p>
    <p>
      当然了，受到计科专业的熏陶，我是典型的
      <Link
        content="INTP-A"
        tooltip="逻辑学家人格"
        href="https://www.16personalities.com/intp-conclusion"
      />
      的人格，因此理性的成分也不会少。
    </p>
    <p>希望我的文字能给你带来一点启发，如果你觉得对你有帮助，你可以给我买一杯咖啡☕️。</p>
    <p>
      最后提一点，
      <Link
        content="CC-BY-NC-ND"
        tooltip="署名-禁止商用-禁止修改"
        href="https://en.wikipedia.org/wiki/Creative_Commons_license"
      />是所有的博文都遵循的版权协议，转载的时候注意了哦。
    </p>
  </section>

  <NewsList items={news} />
</div>

<style lang="scss">
  .index-panel .figure {
    text-align: center;
  }

  .intro {
    max-width: 43rem;
    margin: 2em auto;
  }

  @media (max-width: 640px) {
    .intro {
      margin-top: 3rem;
    }
  }

  @media (max-width: 500px) {
    .intro {
      margin-top: 0;
    }
  }
</style>
