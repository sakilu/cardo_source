<template>
  <div class="font-weight-bold addNewTicketPage">
    <span class="rightContentDetailTitle d-block text-primary">
      新增商品
    </span>
    <div class="d-flex align-items-center">
      <button class="btn btn-success btn-save d-flex align-items-center mr-3 font-weight-bold">
        <img
          src="../assets/img/save.png"
          alt=""
          class="mr-3"
        >
        儲存
      </button>
      <button class="btn btn-primary btn-finish d-flex align-items-center mr-auto font-weight-bold">
        <img
          src="../assets/img/icon_checked.png"
          alt=""
          class="mr-3"
        >
        完成
      </button>
      <span class="">最後修改時間：2019-01-01</span>
    </div>

    <hr class="mb-0">
    <!-- 標籤內容 -->
    <ul class="nav nav-tabs">
      <li class="nav-item text-primary">
        <a
          class="
        nav-link
        text-primary"
          :class="{'active' : tab == '商品資訊'}"
          @click="tab = '商品資訊'"
          href="#home"
          data-toggle="tab"
        >商品資訊</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-primary"
          :class="{'active' : tab == '退貨'}"
          @click="tab = '退貨'"
          data-toggle="tab"
          href="#profile"
        >退貨注意事項</a>
      </li>
    </ul>
    <!-- 商品資訊標籤 -->
    <div
      class="tab-content border-primary"
      id="myTabContent"
    >
      <div
        class="tab-pane fade"
        id="home"
        role="tabpanel"
        :class="{'show active' : tab == '商品資訊'}"
      >
        <div class="d-flex px-40">
          <div class="intro">
            <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-30">新增商品名稱</h4>
            <!-- 商品名稱 -->
            <p class="d-flex align-items-center tabSubTitle mb-2">
              <span class="text-danger star">*</span>
              <label
                class="text-primary font-weight-bold mr-3"
                for="productName"
              >商品名稱</label>
              <span class="fzProductName">商品名稱長度必須在3至255個字元之間</span>
            </p>
            <div class="mb-40">
              <input
                type="text"
                class="form-control"
                id="productName"
              >
            </div>
            <!-- 新增商品圖片 -->
            <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-30">新增商品圖片</h4>
            <p class="d-flex align-items-center tabSubTitle">
              <span class="text-danger star">*</span>
              <span class="text-primary font-weight-bold">商品圖片</span>
            </p>
            <div class="cameraImgBox d-flex justify-content-center align-items-center mb-2">
              <label for="upload">
                <img
                  src="../assets/img/uploadImg.png"
                  alt="upload"
                >
              </label>
              <form action="">
                <input
                  type="file"
                  id="upload"
                  class="d-none"
                >
              </form>
            </div>
            <span class="imgRestrict d-block">允許每張圖 1 MB, 建議寬度 1024 px 避免檔名使用特殊符號，例如 [ ‘ \ “ ; = ]</span>
            <div class="mb-5">
              <button
                type="button"
                class="btn btn-success mt-3 text-center btn-size font-weight-bold mr-3"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    src="../assets/img/upload_arrow.png"
                    alt=""
                    class="mr-3"
                  >
                  <span class="text-light">上傳圖片</span>
                </div>
              </button>
              <button
                type="button"
                class="btn btn-danger mt-3 btn-size font-weight-bold"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    src="../assets/img/trash_can.png"
                    alt=""
                    class="mr-4"
                  >
                  <span class="text-light">移除</span>
                </div>
              </button>
            </div>
            <!-- 新增商品封面圖片 -->
            <p class="d-flex align-items-center tabSubTitle">
              <span class="text-danger star">*</span>
              <span class="text-primary font-weight-bold">商品封面圖片</span>
            </p>
            <div class="cameraImgBox d-flex justify-content-center align-items-center mb-2">
              <label for="uploadCover">
                <img
                  src="../assets/img/uploadImg.png"
                  alt="upload"
                >
              </label>
              <form action="">
                <input
                  type="file"
                  id="uploadCover"
                  class="d-none"
                >
              </form>
            </div>
            <span class="imgRestrict d-block">允許每張圖 1 MB, 建議寬度 1024 px 避免檔名使用特殊符號，例如 [ ‘ \ “ ; = ]</span>
            <div class="mb-5">
              <button
                type="button"
                class="btn btn-success mt-3 text-center btn-size font-weight-bold mr-3"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    src="../assets/img/upload_arrow.png"
                    alt=""
                    class="mr-3"
                  >
                  <span class="text-light">上傳圖片</span>
                </div>
              </button>
              <button
                type="button"
                class="btn btn-danger mt-3 btn-size font-weight-bold"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    src="../assets/img/trash_can.png"
                    alt=""
                    class="mr-4"
                  >
                  <span class="text-light">移除</span>
                </div>
              </button>
            </div>
            <!-- <hr class="mt-0 mb-4" /> -->

            <!-- 商品資訊 -->
            <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-30">新增商品介紹</h4>
            <!-- 新增商品介紹標題 -->
            <p class="d-flex align-items-center tabSubTitle mb-2">
              <span class="text-danger star">*</span>
              <label
                class="text-primary font-weight-bold mr-3"
                for="productIntroTitle"
              >新增商品介紹標題</label>
              <span class="fzProductName">商品名稱長度必須在3至15個字元之間</span>
            </p>
            <div class="mb-40">
              <input
                type="text"
                class="form-control"
                id="productIntroTitle"
              >
            </div>
            <div class="mb-40">
              <p class="d-flex align-items-center tabSubTitle  mb-2">
                <span class="text-danger star">*</span>
                <span class="text-primary font-weight-bold mr-0">商品資訊（商品介紹或注意事項）</span>
                <span class="fzProductName">建議不超過五張圖 寬度 860 px</span>
              </p>
              <div>
                <img
                  src="../assets/img/plugin_img.png"
                  alt="plugin"
                >
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-log mt-3 text-center btn-size font-weight-bold mr-3"
                >
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      src="../assets/img/back_to_default.png"
                      alt=""
                      class="mr-3"
                    >
                    <span class="text-light">回預設值</span>
                  </div>
                </button>
              </div>
            </div>

            <!-- <hr class="mb-40"> -->
            <!-- 活動開始日期 -->
            <!-- 新增商品活動資訊 -->
            <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-30">新增商品活動資訊</h4>
            <div class="mb-3">
              <p class="d-flex align-items-center tabSubTitle  mb-2">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold mr-3"
                  for="startDate"
                >商品活動起始日</label>
                <span class="fzProductName">活動開始的日期</span>
              </p>
              <div class="">
                <input
                  type="date"
                  class="form-control"
                  id="startDate"
                >
              </div>
            </div>
            <!-- 活動結束日期 -->
            <div class="mb-3">
              <p class="d-flex align-items-center tabSubTitle mb-2">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="endDate"
                >商品活動結束日</label>
                <span class="fzProductName">活動結束的日期</span>
              </p>
              <div class="">
                <input
                  type="date"
                  class="form-control"
                  id="endDate"
                >
              </div>
            </div>
            <!-- 商品活動地點 -->
            <div class="mb-3">
              <p class="d-flex align-items-center tabSubTitle  mb-2">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="location"
                >商品活動地點</label>
                <span class="fzProductName">如：地名、地標</span>
              </p>
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="location"
                >
              </div>
            </div>
            <!-- 商品活動地址 -->
            <div class="mb-3">
              <p class="d-flex align-items-center tabSubTitle  mb-2">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="address"
                >商品活動地址</label>
                <span class="fzProductName">如：郵遞區號 某某縣某某區某某路某號</span>
              </p>
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="address"
                >
              </div>
            </div>
          </div>

          <div class="priceNum">
            <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-3">發行價格與數量</h4>
            <!-- 商品價格設定 -->
            <div class="priceSetting">
              <p class="d-flex align-items-center tabSubTitle mb-2">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold"
                  for="originalPrice"
                >商品原價</label>
              </p>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  disabled
                  id="originalPrice"
                  placeholder="280"
                >
              </div>
              <div class="w-100 p-3 highlight">
                <span class="enterDiscount">輸入商品折數</span>
                <span class="text-danger enterDiscountDes">系統自動將發行價格計算折扣後價格(無限進位)</span>
                <hr class="mt-1">
                <p class="d-flex align-items-center tabSubSubTitle mb-0">
                  <span class="text-danger star">*</span>
                  <label
                    class="text-primary font-weight-bold mb-1"
                    for="priceDiscount"
                  >商品折數</label>
                </p>
                <div class="mb-3">
                  <input
                    type="text"
                    id="priceDiscount"
                    class="form-control text-right"
                    placeholder="折"
                  >
                </div>
                <!-- 商品發行價格 -->
                <p class="d-flex align-items-center tabSubSubTitle mb-0">
                  <span class="text-danger star">*</span>
                  <label
                    class="text-primary font-weight-bold mb-1"
                    for="realPrice"
                  >商品發行價格（優惠價格）</label>
                </p>
                <div>
                  <input
                    type="text"
                    id="realPrice"
                    class="form-control text-right"
                    placeholder="元"
                  >
                </div>

              </div>

            </div>
            <!-- 成本價 -->
            <div class="mb-3">
              <p class="d-flex align-items-center tabSubTitle  mb-1 mt-30">
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="costPrice"
                >成本價</label>
              </p>
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="costPrice"
                >
              </div>
            </div>
            <!-- 數量 -->
            <div class="mb-3">
              <p class="d-flex align-items-center tabSubTitle  mb-2">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="num"
                >數量</label>
              </p>
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="num"
                >
              </div>
            </div>
            <!-- 顯示商品已賣出數量 -->
            <div class="mb-8">
              <p class="d-flex align-items-center tabSubTitle  mb-2">
                <!-- <span class="text-danger star">*</span> -->
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="showNumOrNot"
                >前端顯示已賣出數量</label>
              </p>
              <div class="">
                <select
                  class="form-control font-weight-bold"
                  id="showNumOrNot"
                  v-model="showNumOrNot"
                  :class="{'text-success' : showNumOrNot == '啟用','text-danger':showNumOrNot == '未啟用'}"
                >
                  <option class="text-success">啟用</option>
                  <option class="text-danger">未啟用</option>
                </select>
              </div>
            </div>
            <!-- 商品狀態 -->
            <h4 class="font-weight-bold w-100 border-bottom pb-3 mb-34">商品狀態</h4>
            <!-- 排序 -->
            <div class="">
              <p class="d-flex align-items-center tabSubTitle  mb-1">
                <span class="text-danger star">*</span>
                <label
                  class="text-primary font-weight-bold mr-3 mb-0"
                  for="order"
                >排序</label>
              </p>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="order"
                >
              </div>
              <!-- 上架日期 -->
              <div class="">
                <p class="d-flex align-items-center tabSubTitle  mb-1">
                  <span class="text-danger star">*</span>
                  <label
                    class="text-primary font-weight-bold mr-3 mb-0"
                    for="saleDate"
                  >上架日期</label>
                </p>
                <div class="mb-3">
                  <input
                    type="date"
                    class="form-control"
                    id="saleDate"
                  >
                </div>
              </div>
              <!-- 下架日期 -->
              <div class="">
                <p class="d-flex align-items-center tabSubTitle  mb-1">
                  <span class="text-danger star">*</span>
                  <label
                    class="text-primary font-weight-bold mr-3 mb-0"
                    for="endSaleDate"
                  >下架日期</label>
                </p>
                <div class="">
                  <input
                    type="date"
                    class="form-control"
                    id="endSaleDate"
                  >
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 退貨標籤 -->
      <div
        class="tab-pane fade"
        :class="{'show active' : tab == '退貨'}"
        id="profile"
        role="tabpanel"
      >...</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: "商品資訊",
        showNumOrNot: "啟用"
      };
    },
    methods: {}
  };
</script>

<style lang="scss">
  .rightContentDetailTitle {
    color: #3b44a9;
    font-size: 212%;
    margin-bottom: 2%;
    vertical-align: center;
  }
  // 最上方button樣式
  .addNewTicketPage {
    .btn-save,
    .btn-finish {
      width: 134px;
      height: 52px;
      border-radius: 26px;
      padding-top: 11px;
      padding-left: 19px;
      box-sizing: border-box;
    }
    span {
      color: rgba(75, 75, 75, 1);
    }
  }
  // 切換頁簽樣式
  .nav-tabs {
    border-bottom: 2px solid #3b44a9;
    margin-top: 55px;
    .nav-link {
      border-color: #dee2e6 #dee2e6;
      border-width: 0px 0px 0px;
      &:hover {
        border-color: #3b44a9 #3b44a9 #dee2e6;
        border-width: 2px 2px 0px;
      }
    }
    .nav-item {
      margin-bottom: -2px;
    }
  }
  // 頁簽啟用樣式
  .nav-tabs .nav-link.active {
    border-color: #3b44a9 #3b44a9 white;
    border-width: 2px 2px 0px;
  }
  // 頁簽啟用內部樣式
  .active {
    h4 {
      margin-bottom: 1rem;
    }
    // 商品圖文介紹
    .intro {
      margin-top: 40px;
      width: 55%;
      // border-bottom: 2px solid #c9c9c9;
      box-sizing: border-box;
      .tabSubTitle {
        font-size: 20px;
      }
      .star {
        width: 20px;
      }
      img[alt="upload"] {
        cursor: pointer;
      }
      .cameraImgBox {
        width: 340px;
        height: 230px;
        box-sizing: border-box;
        background: rgba(201, 201, 201, 0.16);
        cursor: pointer;
      }
      .imgRestrict {
        font-size: 14px;
        color: rgba(75, 75, 75, 0.5);
      }
      .btn-size {
        width: 144px;
        border-radius: 3px;
        box-sizing: border-box;
        span {
          font-size: 16px;
          line-height: 16px;
          margin-top: 2px;
        }
      }
      .fzProductName {
        font-size: 14px;
        color: rgba(75, 75, 75, 0.5);
      }
      img[alt="plugin"] {
        width: 100%;
      }
    }
    // 發行價格與數量
    .priceNum {
      box-sizing: border-box;
      margin-top: 40px;
      width: 35%;
      margin-left: 10%;
      .tabSubTitle {
        font-size: 20px;
      }
      .tabSubSubTitle {
        font-size: 14px;
      }
      .star {
        width: 20px;
      }
      .priceSetting {
        width: 100%;
        box-sizing: border-box;
        padding: 16px;
        border: 2px solid #9fc4f5;
        border-radius: 5px;
        .highlight {
          background: rgba(201, 201, 201, 0.17);
          border-radius: 5px;
          .enterDiscount {
            font-size: 14px;
          }
          .enterDiscountDes {
            font-size: 13px;
          }
        }
      }
    }
  }
  .tab-content {
    border-left: 2px solid #3b44a9;
    border-right: 2px solid #3b44a9;
    border-bottom: 2px solid #3b44a9;
    margin-bottom: 16px;
  }
</style>