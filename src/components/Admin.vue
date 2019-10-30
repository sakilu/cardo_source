<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <div></div> -->
      <div>
        <sidebar />
      </div>
      <div class="rightContent">
        <loginheader />
        <div class="d-flex detail">
          <sidebardetail />
          <router-view class="rightContentDetail rightContentDetailBox" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import sidebar from "./sidebar";
  import sidebardetail from "./sidebardetail";
  import loginheader from "./loginheader";
  import addnewticket from "./addnewticket";
  import addticketpage from "./addticketpage";
  export default {
    components: {
      sidebar,
      sidebardetail,
      loginheader,
      addnewticket,
      addticketpage
    },
    data() {
      return {
        msg: ""
      };
    },
    methods: {
      emitShowDetail() {}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .rightContent {
    width: calc(100% - 127px);
  }
  .rightContentDetail {
    background: white;
    border: 2px solid #d0d5e0;
    border-radius: 5px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-sizing: border-box;
  }
  .rightContentDetailBox {
    width: calc(100% - 292px);
    /* height: 945px; */
    margin-left: 28px;
    margin-top: 23px;
    height: calc(100vh - 131px);
    padding-top: 49px;
    padding-left: 49px;
    padding-right: 49px;
    overflow: scroll;
  }
  .detail {
    height: calc(100vh - 84px);
  }
</style>
