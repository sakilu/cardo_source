<template>
  <div class="voucheradmin">
    <span class="rightContentDetailTitle d-block  font-weight-bold ">贈品券管理</span>
    <div class="d-flex align-items-center">
      <div class="input-group input-group-sm mb-3 w-25">
        <input
          type="text"
          class="form-control border-log border-right-0"
          placeholder="搜尋贈品名稱"
        >
        <div class="input-group-append">
          <button
            class="btn btn-outline-log border-left-0"
            id="basic-addon2"
          >
            <i class="fas fa-search"></i></button>
        </div>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between border border-primary p-30">
      <div class="w-50">
        <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-30">新增商品名稱</h4>
        <p class="d-flex align-items-center tabSubTitle mb-2 ">
          <span class="text-danger star">*</span>
          <label
            class="text-primary font-weight-bold mr-3"
            for="productName"
          >新增贈品券</label>
        </p>
        <!-- modal觸發位置 -->
        <div
          class="mb-8 addVoucherIconWord"
          data-toggle="modal"
          data-target="#addVoucherModal"
        >
          <div class="d-flex align-items-center ">
            <img
              src="../assets/img/camera.png"
              alt=""
              class="border-log border p-3  bg-camera"
            >
            <div class="text-log font-weight-bold border border-primary border-left-0 addVoucherIcon d-flex align-items-center justify-content-center">
              <p class="mb-0">+新增贈品券</p>
            </div>
          </div>
        </div>

        <!-- 新增店家資訊 -->
        <p class="d-flex align-items-center tabSubTitle mb-2">
          <span class="text-danger star">*</span>
          <label
            class="text-primary font-weight-bold mr-3"
            for="productName"
          >新增店家資訊</label>
          <span class="fzProductName font-weight-bold">建議不超過五張圖</span>
        </p>
        <div class="w-100">
          <img
            src="../assets/img/plugin_img.png"
            alt=""
            class="w-100"
          >
        </div>
      </div>
      <div class="w-40">
        <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-30">贈品券列表(4/4)</h4>
        <div class="mb-4">
          <div class="border-gray border voucherList d-flex align-items-center ">
            <img
              src="../assets/img/gray_cup.png"
              alt="gray_cup"
            >
            <p class="mb-0 text-dark font-weight-bold ml-3">馬克杯乙個</p>
            <div class="d-flex align-items-center ml-auto">
              <button
                type="button"
                class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center "
              >
                <i class="fas fa-pencil-alt text-light"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center ml-1 mr-3"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="border-gray border voucherList d-flex align-items-center ">
            <img
              src="../assets/img/white_bowl.png"
              alt="gray_cup"
            >
            <p class="mb-0 text-dark font-weight-bold ml-3">熱美式咖啡乙杯</p>
            <div class="d-flex align-items-center ml-auto">
              <button
                type="button"
                class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center "
              >
                <i class="fas fa-pencil-alt text-light"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center ml-1 mr-3"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="border-gray border voucherList d-flex align-items-center ">
            <img
              src="../assets/img/white_bowl.png"
              alt="gray_cup"
            >
            <p class="mb-0 text-dark font-weight-bold ml-3">熱美式咖啡乙杯</p>
            <div class="d-flex align-items-center ml-auto">
              <button
                type="button"
                class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center "
              >
                <i class="fas fa-pencil-alt text-light"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center ml-1 mr-3"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="border-gray border voucherList d-flex align-items-center ">
            <img
              src="../assets/img/late.png"
              alt="gray_cup"
            >
            <p class="mb-0 text-dark font-weight-bold ml-3">熱美式咖啡乙杯</p>
            <div class="d-flex align-items-center ml-auto">
              <button
                type="button"
                class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center "
              >
                <i class="fas fa-pencil-alt text-light"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center ml-1 mr-3"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal 內容 -->
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      id="addVoucherModal"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header text-center justify-content-center">
            <h5 class="modal-title text-danger font-weight-bold">新增贈品券</h5>

          </div>
          <div class="modal-body">
            <p class="modalDescription text-center">請為贈品券新增照片、名稱、數量</p>
            <div>
              <form action="">
                <div class="form-group">
                  <label for="uploadVoucherImg">上傳圖片</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="uploadVoucherImg"
                    placeholder="Password"
                  >
                </div>
                <div class="form-group">
                  <label for="enterVoucherName">輸入票券名稱</label>
                  <input
                    type="text"
                    class="form-control-file"
                    id="enterVoucherName"
                    placeholder="輸入票券名稱"
                  >
                </div>
                <div class="form-group">
                  <label for="voucherNumber">數量</label>
                  <select
                    class="form-control"
                    id="voucherNumber"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </form>
            </div>

          </div>
          <div class="modal-footer justify-content-around">
            <button
              type="button"
              class="btn btn-outline-primary"
              data-dismiss="modal"
            >取消</button>
            <button
              type="button"
              class="btn btn-danger"
            >完成</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .voucheradmin {
    .addVoucher {
      cursor: pointer;
    }
    .tabSubTitle {
      font-size: 20px;
    }
    .star {
      width: 20px;
    }
    .addVoucherIconWord {
      cursor: pointer;
    }
    .addVoucherIcon {
      width: 300px;
      box-sizing: border-box;
      height: 78px;
    }
    .fzProductName {
      font-size: 14px;
      color: rgba(75, 75, 75, 0.5);
    }
    .voucherList {
      box-shadow: 0px 3px 6px #00000029;
      border: 2px solid #e2e2e2;
      border-radius: 3px;
    }
    .imgBtnSize {
      width: 30px;
      height: 30px;
      border-radius: 3px;
    }
    .modal-content {
      border: 1px solid #efecec;
      border-radius: 5px;
      .modalDescription {
        font-size: 18px;
        font-weight: bold;
        color: #4b4b4b;
      }
    }
    .modal-dialog {
      margin: 25vh auto;
    }
  }
</style>