<script>
  import { createEventDispatcher } from 'svelte';

  let container;
  const dispatch = createEventDispatcher();
</script>

<div bind:this={container} class="popup-container">
  <div class="popup">
    <h2>匿名提问</h2>
    <div class="form">
      <textarea placeholder="请输入你想问的问题，这些问题将会在审核后放出" />
      <div>
        <button type="submit">提交</button>
        <button class="cancel" on:click={() => dispatch('cancel')}>取消</button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .popup-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);

    .popup {
      width: 32em;
      margin: 170px auto 0;
      padding-bottom: 20px;
      text-align: center;
      border-radius: 5px;
      background-color: white;

      h2 {
        margin: 0;
        padding: 0.8em 1em 0;
      }

      .form {
        display: flex;
        flex-direction: column;

        textarea {
          height: 6.75em;
          padding: 0.75em;
          margin: 1em 2em;
          font-size: 1.125em;
          border: 1px solid #d9d9d9;
          border-radius: 0.1875em;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;
        }

        button {
          color: white;
          font-size: 1em;
          font-weight: 500;
          margin: 0.3125em;
          padding: 0.625em 1.1em;
          border-radius: 0.25em;
          box-shadow: 0 0 0 3px transparent;
          background-color: var(--primary-color);

          &.cancel {
            background-color: var(--gray-color);
          }
        }
      }
    }
  }
</style>
