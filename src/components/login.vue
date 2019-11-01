<template>
  <div class="container-fluid  login-container">
    <div class="row flex">
      <div class="col-sm-8">
        <h4 class="loginTitle text-primary font-weight-bold mb-30">商家後台</h4>
        <div class="loginInput">
          <label
            for="shopNum"
            class=" text-primary font-weight-bold"
          >商店代號</label>
          <input
            type="text"
            class="form-control mb-2"
            id="shopNum"
          >
          <label
            for="id"
            class=" text-primary font-weight-bold"
          >帳號</label>
          <input
            type="text"
            class="form-control mb-2"
            id="id"
          >
          <label
            for="password"
            class=" text-primary font-weight-bold"
          >密碼</label>
          <input
            type="text"
            class="form-control mb-3"
            id="password"
          >
          <div class="text-right mb-4">
            <a
              href="#"
              class=""
            >Forgot password?</a>
          </div>
          <router-link to="/admin">
            <button
              type="button"
              class="btn btn-log btn-lg btn-block"
            >登入</button>
          </router-link>
        </div>
      </div>
    </div>
    <p class="conatactInfo text-log">+886 (02) 2266-8944 • 服務時間 MON-FRI / 9AM-6PM ©2019 CARDO • All Rights Reserved • Terms of Service</p>
    <div class="p-2 bg-primary loginIcon d-flex justify-content-center align-items-center">
      <img src="../assets/img/cdIcon.png">
    </div>
  </div>

</template>

<script>
  export default {};
</script>

<style lang="scss">
  .login-container {
    background-image: url("../assets/img/login.png");
    background-size: cover;
    background-position: bottom 5px right 30px;
    height: 100vh;
    width: 100vw;
    padding-left: 120px;
  }
  .loginTitle {
    font-size: 40px;
    margin-top: 100px;
    // margin-left: 240px;
  }
  .loginInput {
    background: #f7f7f7 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 14px #00000029;
    border-radius: 8px;
    opacity: 1;
    padding-top: 60px;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 60px;
    width: 560px;
    box-sizing: border-box;
  }
  .form-control {
    border: 1px solid #3b579d;
  }
  .conatactInfo {
    font-size: 14px;
    width: 374px;
    position: fixed;
    bottom: 80px;
    right: 170px;
  }
  .loginIcon {
    width: 69px;
    height: 69px;
    border-radius: 50%;
    position: fixed;
    bottom: 85px;
    right: 120px;
  }
</style>