<script>
  import News from "$lib/News.svelte"
</script>

<figure>
  <figcaption class="title">ShZh的小站</figcaption>
  <img src="https://res.cloudinary.com/shzh7/image/upload/v1638439744/szh_pg8oum.png" alt="szh" class="avatar">
</figure>
<section class="intro">
  <p>Hi，我是沈之豪，这是我的个人小站，也是我写自己生活经历和各种感悟的地方。</p>
  <p>和我的技术博客不同，博客里面全都是冷冰冰的技术博文，而这里的内容更有人情，更有烟火味。</p>
  <p>当然了，毕竟我本身是计算机科学与技术专业，所以里面的内容免不了要和技术沾点边。</p>
  <p>希望我的文字能给你带来一点启发，如果你觉得对你有帮助，你可以给我买一杯咖啡☕️。</p>
</section>

<News/>

<style lang="scss">
  figure {
    text-align: center;
    margin-top: 30px;

    figcaption {
      font-size: 3em;
      font-family: "Source Sans Pro", "Noto Sans SC", sans-serif;;
    }

    .avatar {
      width: 14rem;
      margin-top: 20px;
      border: solid 2px rgb(229, 231, 235);
      border-radius: 50%;
    }
  }

  .intro {
    max-width: 43rem;
    margin: 2em auto;
    font-family: "Source Serif Pro", "Noto Serif SC", serif;
  }
</style>

