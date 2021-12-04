<script>
  import Message from "$lib/Message.svelte";

  export let messages = [{
    message: '你好呀，哈哈',
    reply: '收到，你也好，哈哈',
    date: '2021-12-04',
  }]

  function leaveMessage() {
    alert('Not implement!');
  }
</script>
<div class="container">
  <h1>留言版</h1>
  <button on:click={leaveMessage}>向我匿名留言</button>
  <ul>
    {#each messages as message}
      <li>
        <Message {message}/>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .container {
    max-width: 50rem;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-weight: 100;
      font-size: 3rem;
      font-family: "Source Sans Pro", "Noto Sans SC", sans-serif;
    }

    button {
      margin-bottom: 2rem;
      width: 35rem;
      height: 2.5rem;
      font-size: 15px;

      color: white;
      background-color: black;
      border-radius: 0.75rem;
    }

    ul {
      padding-left: 0;
      li {
        list-style: none;
      }
    }
  }
</style>