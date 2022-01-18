<script>
  import Message from '$lib/Message.svelte';
  import PopUp from '$lib/PopUp.svelte';

  const messages = [
    {
      id: 0,
      content: '如何评价《进击的巨人》最终季 Part2 第 2 集？如何评价《进击的巨人》最终季 Part2 第 2 集？',
      reply:
        '我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你爹我是你我是你爹我是你我是你爹我是你',
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

<div class="panel full-height text-center">
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
  <PopUp on:cancel={onCancel} />
</div>

<style lang="scss">
  $btn-color: #ff69b4;
  $btn-hover-color: #ff3ea5;

  button {
    margin-bottom: 2rem;
    padding: 0 10rem;
    height: 2.5rem;
    font-size: 15px;

    color: white;
    background-color: $btn-color;
    border-radius: 0.75rem;

    &:hover {
      background-color: $btn-hover-color;
    }
  }

  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }

  .wrapper {
    display: none;
  }

  @media (max-width: 640px) {
    button {
      padding: 0 9rem;
    }
  }
</style>
