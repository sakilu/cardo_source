<template>
  <div class="container-fluid">
    <div class="row">
      <div>
        <sidebar @emitShowDetail='emitShowDetail' />
      </div>
      <div class="rightContent">
        <loginheader />
        <div class="d-flex detail">
          <sidebardetail :detailShowOrNot="msg" />
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
      emitShowDetail(status) {
        //由內層傳出看選取哪個欄位
        this.msg = status;
        if (status == "product") {
          this.$router.push(`/admin/addticket`);
        } //else {
        //this.$router.push("/");
        //}
      }
    },
    mounted() {
      window.addEventListener("load", () => {
        // 載入事件load
        if (this.$route.path !== "/") {
          // / 表示首頁
          this.$router.replace("/"); // 切換到首頁
        }
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .rightContent {
    width: calc(100% - 114px);
  }
  .rightContentDetail {
    background: white;
    border: 2px solid #d0d5e0;
    border-radius: 5px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-sizing: border-box;
  }
  .rightContentDetailBox {
    /* width: calc(100% - 290px); */
    width: calc(100%);
    /* height: 945px; */
    margin-left: 23px;
    margin-right: 23px;
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
