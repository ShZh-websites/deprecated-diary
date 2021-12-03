<script>
  import DateList from "$lib/DateList.svelte";

  export let data = [
    {
      date: 'Dec 1, 2021',
      content: 'HelloWorld',
      link: '/posts/create-your-blog',
    },
    {
      date: 'Nov 12, 2021',
      content: '114514',
      link: 'https://zhihu.com'
    },
  ]
</script>

<div class="container">
  <DateList title={2021} items={data}/>
</div>

<style lang="scss">
  .container {
    max-width: 33rem;
    margin: 0 auto;
  }
</style>