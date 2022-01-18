<script>
  import TechCard from '$lib/TechCard.svelte';

  const techniques = [
    {
      techName: 'Svelte',
      website: 'https://svelte.dev/',
      imageUrl: '/svelte_logo.png',
      description: '🛠️ Cybernetically enhanced web apps.'
    },
    {
      techName: 'SvelteKit',
      website: 'https://kit.svelte.dev/',
      imageUrl: '/sveltekit_logo.png',
      description: '📦 The fastest way to build Svelte apps.'
    },
    {
      techName: 'Vite',
      website: 'https://vitejs.dev/',
      imageUrl: '/vite_logo.png',
      description: '⚡️ Next Generation Frontend Tooling.'
    }
  ];

  const payments = [
    {
      name: '支付宝付款',
      url: 'https://res.cloudinary.com/shzh7/image/upload/v1637030166/payment/alipay_x0lesm.jpg'
    },
    {
      name: '微信付款',
      url: 'https://res.cloudinary.com/shzh7/image/upload/v1637030172/payment/wechat_pay_pm5ktx.png'
    }
  ];
</script>

<div class="container">
  <div class="panel">
    <h1>技术选型</h1>
    <p>本站点使用了下列技术框架，非常感谢它们带来的便利。</p>
    <div class="cards">
      {#each techniques as technique}
        <TechCard
          techName={technique.techName}
          website={technique.website}
          imageUrl={technique.imageUrl}
          description={technique.description}
        />
      {/each}
    </div>
  </div>
  <div class="panel">
    <h1>自愿付费</h1>
    <p>喜欢我的文章的人，可以自愿付费。你可以使用以下方式付款。</p>
    <div class="payment">
      {#each payments as payment}
        <img src={payment.url} alt={payment.name} class="payment-img" />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    text-align: center;

    .cards {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    .payment {
      margin-top: 2rem;
      margin-bottom: 3rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .payment-img {
        height: 22rem;
        margin: 0 2.5rem;
        border-radius: 0.25rem;
        box-shadow: var(--box-shadow-in-panel);
      }
    }
  }

  @media (max-width: 700px) {
    .cards {
      flex-direction: column !important;
      align-items: center;
    }

    .payment {
      flex-direction: column !important;

      .payment-img:nth-of-type(1) {
        margin-bottom: 3rem;
      }
    }
  }
</style>
