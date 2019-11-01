<template>
  <div class="sideBarHeight sideBarWidth text-center px-0">
    <div class="d-flex justify-content-center ">
      <img
        src="../assets/img/cdICon.png"
        alt="cdIcon"
        class="cdIcon"
      />
    </div>
    <ul class="d-flex flex-column align-items-center pl-0">
      <li
        class="d-flex flex-column align-items-center justify-content-center"
        :class="{'bg-secondary':functionIcon == 'product'}"
        @click="emitShowDetail('product')"
      >
        <img src="../assets/img/icons8-boarding-pass-96.png" />
      </li>
      <p class="text-light mt-2">票券商品管理</p>
      <li
        class="d-flex flex-column align-items-center justify-content-center"
        :class="{'bg-secondary':functionIcon == 'order'}"
        @click="emitShowDetail('order')"
      >
        <img
          src="../assets/img/icons8-purchase-order-90.png"
          alt
        />
      </li>
      <p class="text-light mt-2">訂單管理</p>
      <li
        class="d-flex flex-column align-items-center justify-content-center"
        :class="{'bg-secondary':functionIcon == 'myShop'}"
        @click="emitShowDetail('myShop')"
      >
        <img
          src="../assets/img/icons8-shop-100.png"
          alt
        />
      </li>
      <p class="text-light mt-2">我的店家</p>
      <li
        class="d-flex flex-column align-items-center justify-content-center"
        :class="{'bg-secondary':functionIcon == 'setting'}"
        @click="emitShowDetail('setting')"
      >
        <img
          src="../assets/img/Path_1050.png"
          alt
        />
      </li>
      <p class="text-light mt-2">設定</p>
      <li
        class="d-flex flex-column align-items-center justify-content-center"
        :class="{'bg-secondary':functionIcon == 'cardPay'}"
        @click="emitShowDetail('cardPay')"
      >
        <img
          src="../assets/img/icons8-buy-with-card-96.png"
          alt
        />
      </li>
      <p class="text-light mt-2">信託請款</p>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        functionIcon: ""
      };
    },
    methods: {
      emitShowDetail(status) {
        this.functionIcon = status;
        this.$emit("emitShowDetail", this.functionIcon);
      }
    }
  };
</script>
<style lang="scss">
  .shop {
    margin-bottom: 115px;
  }
  .sideBarHeight {
    height: 100vh;
    overflow-y: scroll;
    background: transparent linear-gradient(1deg, #3b579d 0%, #3b44a9 100%) 0% 0%
      no-repeat padding-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sideBarWidth {
    width: 114px;
    ul {
      list-style: none;
      & > li {
        width: 62px;
        height: 62px;
        padding: 14% 0;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.12);
        cursor: pointer;
        &:hover {
          background: rgba(0, 0, 0, 0.64);
        }
        img {
          width: 32px;
          height: auto;
          cursor: pointer;
        }
        & + p {
          font-size: 14px;
        }
      }
    }
  }

  .cdIcon {
    display: block;
    font-family: "Noto Sans TC", sans-serif;
    margin-bottom: calc(100vh * 0.1);
    margin-top: calc(100vh * 0.05);
    font-size: 14px;
  }
</style>