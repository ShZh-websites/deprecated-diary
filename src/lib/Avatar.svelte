<script>
  export let imgUrl;
  export let imgAlt;
</script>

<div class="border">
  <img class="avatar" src={imgUrl} alt={imgAlt} />
</div>

<style lang="scss">
  $avatar-border-color: #e5e7eb;

  .border {
    margin: 0 auto;
    padding: 5px;
    width: 15rem;
    height: 17rem;
    box-shadow: var(--panel-shadow);

    .avatar {
      width: 14rem;
      margin-top: 0.3rem;
      border: solid 1px $avatar-border-color;
    }
  }
</style>