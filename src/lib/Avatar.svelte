<script>
  export let imgUrl;
  export let imgAlt;
</script>

<div class="border">
  <img class="avatar" src={imgUrl} alt={imgAlt} />
</div>

<style lang="scss">
  .border {
    margin: 0 auto;
    padding: 5px;
    width: 15rem;
    height: 17rem;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);

    .avatar {
      width: 14rem;
      margin-top: 0.3rem;
      border: solid 1px #e5e7eb;
    }
  }
</style>