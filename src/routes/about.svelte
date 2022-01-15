<div class="container panel">
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

<style lang="scss">
  .container {
    text-align: center;

    .payment {
      margin-top: 2rem;
      margin-bottom: 3rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .payment-img {
        height: 24rem;
        margin: 0 2.5rem;
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
