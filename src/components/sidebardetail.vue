<template>
  <div class="sideBarDetailWidth sideBarDetailHeight">
    <p class="text-primary detailTitle font-weight-bold">票券商品管理</p>
    <hr />
    <div class="list text-primary font-weight-bold itemBg rounded-top rounded-right ">架上商品</div>
    <router-link
      class="list d-flex align-items-center itemBg"
      to="/"
      :class="{'active' : detailItem == '信託'}"
    >
      <img
        src="../assets/img/icons8-boarding-pass-blue.png"
        alt
      />
      <p
        class="font-weight-bold detailItem mb-0"
        @click="detailItem = '信託'"
      >管理票券商品</p>
    </router-link>

    <router-link
      class="list d-flex align-items-center itemBg rounded-bottom rounded-left"
      :class="{'active' : detailItem == '非信託'}"
      to="/addticket"
    >
      <img
        src="../assets/img/calendar.png"
        alt
      />
      <p
        class="font-weight-bold detailItem mb-0"
        @click="detailItem = '非信託'"
      >管理票券商品(非信託)</p>
    </router-link>

    <router-link
      class="list d-flex align-items-center itemBg rounded-bottom rounded-left mt-4"
      :class="{'active' : detailItem == '團購'}"
      to="/"
    >
      <img
        src="../assets/img/group.png"
        alt
      />
      <p
        class="font-weight-bold detailItem mb-0"
        @click="detailItem = '團購'"
      >票券團購設定</p>
    </router-link>
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
      padding: 16px;
      font-size: 16px;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.04);
    }
    .detailItem {
      font-size: 13px;
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
    data() {
      return {
        detailItem: ""
      };
    }
  };
</script>