<script>
  let message = {
    id: 0,
    content: '如何评价《进击的巨人》最终季 Part2 第 2 集？',
    reply: '我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你我是你爹我是你我是你爹我是你。',
    date: '2021-12-04'
  }
</script>

<div class="container panel">
  <h2>{message.content}</h2>
  <p>{message.reply}</p>
</div>

<style lang="scss">
  .container {
    min-height: calc(100vh - 215px);

    h2 {
      font-size: 1.7rem;
      font-weight: 400;
      text-align: center;
      margin: 1em 2.5em 60px;
    }

    p {
      display: table-cell;
      vertical-align: middle;
      padding: 0 100px;
      line-height: 2;
    }
  }
</style>