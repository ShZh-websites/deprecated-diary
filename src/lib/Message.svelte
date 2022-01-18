<script>
  export let message;
</script>

<div class="container">
  <h1>
    <a href="/messages/0" class="underline">
      {message.content}
    </a>
  </h1>
  <p class="reply">
    {message.reply}
  </p>
  <p class="date">{message.date}</p>
</div>

<style lang="scss">
  $date-color: #999;

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
      margin: 0 4em 0.5em;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .reply {
      margin: 0 5rem;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .date {
      color: $date-color;
      margin-left: 3rem;
      align-self: flex-start;
    }
  }

  @media (max-width: 640px) {
    .container {
      margin: 0 1rem;

      h1 {
        margin: 1.3rem 2rem 1rem;
        font-size: 1.3rem;
      }

      .reply {
        margin: 0 1.5rem;
      }

      .date {
        margin-left: 1.5rem;
      }
    }
  }
</style>
