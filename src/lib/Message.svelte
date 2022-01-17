<script>
  export let message;
</script>

<div class="container">
  <h1><a href={'/messages/0'}>
    {
      message.content.length > 20
        ? message.content.substr(0, 17) + '...'
        : message.content
    }
  </a></h1>
  <p class="reply">{
    message.reply.length > 65
      ? message.reply.substr(0, 65) + '...'
      : message.reply
  }</p>
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
      cursor: alias;
      font-size: 1.7rem;

      &:hover {
        text-decoration: underline;
      }
    }

    .reply {
      margin: 0 5rem;
    }

    .date {
      color: #999;
      margin-left: 3rem;
      align-self: flex-start;
    }
  }
</style>
