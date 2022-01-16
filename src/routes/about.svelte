<script>
  import TechCard from "$lib/TechCard.svelte";

  let techniques = [
    {
      techName: "Svelte",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
      description: "🛠️ Cybernetically enhanced web apps."
    },{
      techName: "SvelteKit",
      imageUrl: "https://kit.svelte.dev/_app/assets/svelte-kit-machine-f9e1f4d5.avif",
      description: "📦 The fastest way to build Svelte apps."
    }, {
      techName: "Vite",
      imageUrl: "https://vitejs.dev/logo.svg",
      description: "⚡️ Next Generation Frontend Tooling."
    },
  ]
</script>

<div class="container">
  <div class="panel">
    <h1>技术选型</h1>
    <p>本站点使用了下列技术框架，非常感谢它们带来的便利。</p>
    <div class="cards">
      {#each techniques as technique}
        <TechCard
          techName={technique.techName}
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
      <img
        src="https://res.cloudinary.com/shzh7/image/upload/v1637030166/payment/alipay_x0lesm.jpg"
        alt="支付宝付款"
        class="payment-img"
      />
      <img
        src="https://res.cloudinary.com/shzh7/image/upload/v1637030172/payment/wechat_pay_pm5ktx.png"
        alt="微信付款"
        class="payment-img"
      />
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
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }

  @media (max-width: 640px) {
    .payment {
      flex-direction: column !important;

      .payment-img:nth-of-type(1) {
        margin-bottom: 3rem;
      }
    }
  }
</style>
