<script>
  export let message;
</script>

<div class="container">
  <h1>{message.message}</h1>
  <p class="reply">{message.reply}</p>
  <p class="date">{message.date}</p>
</div>

<style lang="scss">
  .container {
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: black 1px solid;
    border-radius: 1.25rem;

    h1 {
      font-size: 1.7rem;
    }

    .reply {
      margin: 0 auto;
    }

    .date {
      color: #999;
      margin-left: 3rem;
      align-self: flex-start;
    }
  }
</style>
