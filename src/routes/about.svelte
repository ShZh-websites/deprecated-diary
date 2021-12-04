<div class="container">
  <h1>自愿付费</h1>
  <p>喜欢我的文章的人，可以自愿付费。你可以使用以下方式付款。</p>
  <div class="payment">
    <img src="https://res.cloudinary.com/shzh7/image/upload/v1637030166/payment/alipay_x0lesm.jpg" alt="支付宝付款" class="payment-img">
    <img src="https://res.cloudinary.com/shzh7/image/upload/v1637030172/payment/wechat_pay_pm5ktx.png" alt="微信付款" class="payment-img">
  </div>
</div>

<style lang="scss">
  .container {
    max-width: 43rem;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-weight: 100;
      font-size: 3em;
      font-family: "Source Sans Pro", "Noto Sans SC", sans-serif;
    }
    p {
      margin-bottom: 2rem;
      font-family: "Source Serif Pro", "Noto Serif SC", serif;
    }

    .payment {
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
</style>