<template>
  <div class="loginHeaderFont loginHeaderBox d-flex justify-content-end align-items-center">
    <p class="userEmail mb-0">
      {{userEmail}}
    </p>
    <a
      class="btn btn-log logOut text-center logOutBox"
      href="#"
      role="button"
    >Log Out</a>
  </div>
</template>

<style lang="scss">
  .loginHeaderFont {
    color: #1b79f4;
  }
  .loginHeaderBox {
    box-sizing: border-box;
    // padding-top: 24px;
    padding-right: 37px;
    width: 100%;
    background: white;
    height: 84px;
  }
  .userEmail {
    display: inline-block;
    vertical-align: top;
  }
  .logOut {
    background: #1b79f4 0% 0% no-repeat padding-box;
    color: white;
    vertical-align: top;
  }
  .logOutBox {
    width: 133px;
    height: 36px;
    border-radius: 20px;
    padding-top: 6px;
    margin-left: 52px;
    box-sizing: border-box;
  }
</style>

<script>
  export default {
    data() {
      return {
        userEmail: "smy@yfp.com.tw"
      };
    }
  };
</script>