<script>
  import Message from '$lib/Message.svelte';
  import Popup from "$lib/Popup.svelte";

  export let messages = [
    {
      message: '你好呀，哈哈',
      reply: '收到，你也好，哈哈',
      date: '2021-12-04'
    }
  ];

  let popupWrapper;

  function onCancel() {
    popupWrapper.style.display = 'none';
  }

  function onDisplay() {
    popupWrapper.style.display = 'block';
  }
</script>

<div class="container panel">
  <h1>留言版</h1>
  <button on:click={onDisplay}>向我匿名留言</button>
  <ul>
    {#each messages as message}
      <li>
        <Message {message} />
      </li>
    {/each}
  </ul>
</div>

<div class="wrapper" bind:this={popupWrapper}>
  <Popup on:cancel={onCancel}/>
</div>

<style lang="scss">
  .container {
    text-align: center;
    min-height: calc(100vh - 215px);

    button {
      cursor: pointer;
      margin-bottom: 2rem;
      padding: 0 10rem;
      height: 2.5rem;
      font-size: 15px;

      color: white;
      background-color: #ff69b4;
      border-radius: 0.75rem;

      &:hover {
        background-color: #ff3ea5;
      }
    }

    ul {
      padding-left: 0;
      li {
        list-style: none;
      }
    }
  }

  .wrapper {
    display: none;
  }
</style>
