<template>
  <div>
    <!-- 票券商品管理 -->
    <div
      class="sideBarDetailWidth sideBarDetailHeight"
      v-if="detailShowOrNot == 'product'"
    >
      <p class="text-primary detailTitle font-weight-bold">票券商品管理</p>
      <hr />
      <div class="list text-primary font-weight-bold itemBg rounded-top rounded-right ">架上商品</div>
      <div @click="detailItem = '信託'">
        <router-link
          class="list d-flex align-items-center itemBg"
          to="/admin/addtrustticket"
          :class="{'active' : detailItem == '信託'}"
        >
          <img
            src="../assets/img/icons8-boarding-pass-blue.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">管理票券商品</p>
        </router-link>
      </div>
      <div @click="detailItem = '非信託'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '非信託'}"
          to="/admin/addticket"
        >
          <img
            src="../assets/img/calendar.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">管理票券商品(非信託)</p>
        </router-link>
      </div>
      <div @click="detailItem = '贈品券'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '贈品券'}"
          to="/admin/voucheradmin"
        >
          <img
            src="../assets/img/calendar.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">贈品券管理</p>
        </router-link>
      </div>
      <div @click="detailItem = '團購'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left mt-4"
          :class="{'active' : detailItem == '團購'}"
          to="/admin/groupBuySet"
        >
          <img
            src="../assets/img/group.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">票券團購設定</p>
        </router-link>
      </div>
    </div>

    <!-- 訂單管理 -->
    <div
      class="sideBarDetailWidth sideBarDetailHeight"
      v-if="detailShowOrNot == 'order'"
    >
      <div @click="detailItem = '查看訂單'">
        <p class="text-primary detailTitle font-weight-bold">訂單管理</p>
        <hr />
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left mt-4"
          :class="{'active' : detailItem == '查看訂單'}"
          to="/"
        >
          <img
            src="../assets/img/group.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">查看訂單</p>
        </router-link>
      </div>
    </div>

    <!-- 我的店家 -->
    <div
      class="sideBarDetailWidth sideBarDetailHeight"
      v-if="detailShowOrNot == 'myShop'"
    >
      <p class="text-primary detailTitle font-weight-bold">我的店家</p>
      <hr />
      <div @click="detailItem = '我的LOGO'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '我的LOGO'}"
          to="/"
        >
          <img
            src="../assets/img/myshop_minelogo.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">我的LOGO</p>
        </router-link>
      </div>
      <div @click="detailItem = '關於店家'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '關於店家'}"
          to="/"
        >
          <img
            src="../assets/img/myshop_about.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">關於店家</p>
        </router-link>
      </div>
      <div @click="detailItem = '會員卡封面設定'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '會員卡封面設定'}"
          to="/"
        >
          <img
            src="../assets/img/myshop_membercard_cover.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">會員卡封面設定</p>
        </router-link>
      </div>
      <div @click="detailItem = '集點卡管理'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '集點卡管理'}"
          to="/"
        >
          <img
            src="../assets/img/myshop_about.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">集點卡管理</p>
        </router-link>
      </div>
      <div @click="detailItem = '店家基本資料'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '店家基本資料'}"
          to="/"
        >
          <img
            src="../assets/img/myshop_basic_info.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">店家基本資料</p>
        </router-link>
      </div>
    </div>

    <!-- 設定 -->
    <div
      class="sideBarDetailWidth sideBarDetailHeight"
      v-if="detailShowOrNot == 'setting'"
    >
      <p class="text-primary detailTitle font-weight-bold">設定</p>
      <hr />
      <div @click="detailItem = '管理使用者'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '管理使用者'}"
          to="/"
        >
          <img
            src="../assets/img/setting_user_admin.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">管理使用者</p>
        </router-link>
      </div>
      <div @click="detailItem = '好康報報(推播)'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '好康報報(推播)'}"
          to="/"
        >
          <img
            src="../assets/img/setting_pushalert.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">好康報報(推播)</p>
        </router-link>
      </div>
    </div>

    <!-- 信託請款 -->
    <div
      class="sideBarDetailWidth sideBarDetailHeight"
      v-if="detailShowOrNot == 'cardPay'"
    >
      <p class="text-primary detailTitle font-weight-bold">信託請款</p>
      <hr />
      <div @click="detailItem = '商家請款作業'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '商家請款作業'}"
          to="/"
        >
          <img
            src="../assets/img/cardpay_application.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">商家請款作業</p>
        </router-link>
      </div>
      <div @click="detailItem = '請款歷史資料'">
        <router-link
          class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
          :class="{'active' : detailItem == '請款歷史資料'}"
          to="/"
        >
          <img
            src="../assets/img/cardpay_history_info.png"
            alt
          />
          <p class="font-weight-bold detailItem mb-0">請款歷史資料</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .sideBarDetailWidth {
    background: white;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 30px;
    width: 240px;
    box-shadow: 0px 2px 4px #00000029;
    box-sizing: border-box;
    .detailTitle {
      font-size: 162.5%;
    }
    .list {
      padding: 16px;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        background: rgba(159, 196, 245, 0.2);
      }
      p {
        &:hover {
          color: #3b44a9;
        }
      }
      // router link 啟用後新增 active class
      &.active {
        background: rgba(159, 196, 245, 0.2);
      }
    }

    .active {
      p {
        color: #3b44a9;
      }
    }
    .itemBg {
      padding: 14px;
      font-size: 16px;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.04);
    }
    .detailItem {
      font-size: 13.5px;
      color: #4b4b4b;
      padding-left: 7px;
    }
  }
  .sideBarDetailHeight {
    height: calc(100vh - 84px);
  }
</style>

<script>
  export default {
    props: ["detailShowOrNot"],
    data() {
      return {
        detailItem: "信託"
      };
    }
  };
</script>