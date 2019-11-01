<template>
  <div class="">
    <span class="rightContentDetailTitle d-block  font-weight-bold">票券團購設定（0/5）</span>
    <router-link
      class="d-flex align-items-center"
      to="/"
    >
      <img
        src="../assets/img/plus.png"
        alt="addNewPro"
      >
      <span class="text-primary font-weight-bold addNewPro">新增</span>
    </router-link>
    <hr />
    <div class="table-responsive border-bottom border-left border-right">
      <table class="table ">
        <thead class="thead-dark">
          <tr class="th">
            <th
              scope="col"
              class="text-center first  border-top-0  border-bottom-0 border-left-0"
            >圖片</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >商品名稱</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >團購發行價格</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >成團人數</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >每人購買上限</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
              width="120"
            >目前已購人數</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
              width="120"
            >開放時間</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >結束時間</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0 last border-right-0"
            >動作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in 1"
            :key="index"
          >
            <td class="text-center p-0 pl-1">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center">
              田中達也的奇幻世界 微型展 高雄站
            </td>
            <td class="text-center ticketName">599</td>
            <td class="text-center">3</td>
            <td class="text-center">4</td>
            <td class="text-center">10</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">
              2019-12-31 12:34:13
              <!-- <div class=" d-flex justify-content-center">
                <button class="btn btn-success text-light mb-0 review justify-content-center d-flex align-items-center">送審</button>
              </div> -->
            </td>
            <td class="text-center edit pr-1">
              <div class="d-flex justify-content-center align-items-center">
                <!-- <button
                  type="button"
                  class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                >
                  <i class="fas fa-pencil-alt text-light"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-tablebtn imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                >
                  <i class="fas fa-search text-light"></i>
                </button> -->
                <form action="">
                  <div class="form-group d-flex justify-content-center align-items-center">
                    <select
                      name="active"
                      id=""
                      class="form-control text-primary mr-1"
                    >
                      <option value="on">啟用</option>
                      <option value="on">停用</option>
                    </select>
                    <button
                      type="button"
                      class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-pencil-alt text-light"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tablebtn imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-search text-light"></i>
                    </button>
                  </div>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-center p-0">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center">
              田中達也的奇幻世界 微型展 高雄站
            </td>
            <td class="text-center ticketName">599</td>
            <td class="text-center">3</td>
            <td class="text-center">4</td>
            <td class="text-center">10</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">
              2019-12-31 12:34:13
              <!-- <div class=" d-flex justify-content-center">
                <button class="btn btn-success text-light mb-0 review justify-content-center d-flex align-items-center">送審</button>
              </div> -->
            </td>
            <td class="text-center edit">
              <div class="d-flex justify-content-center align-items-center">
                <!-- <button
                  type="button"
                  class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center"
                >
                  <i class="far fa-trash-alt"></i>
                </button> -->
                <form action="">
                  <div class="form-group d-flex justify-content-center align-items-center">
                    <select
                      name="active"
                      id=""
                      class="form-control text-primary mr-1"
                    >
                      <option value="on">啟用</option>
                      <option value="on">停用</option>
                    </select>
                    <button
                      type="button"
                      class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-pencil-alt text-light"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tablebtn imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-search text-light"></i>
                    </button>
                  </div>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-center p-0">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center">
              田中達也的奇幻世界 微型展 高雄站
            </td>
            <td class="text-center ticketName">599</td>
            <td class="text-center">3</td>
            <td class="text-center">4</td>
            <td class="text-center">10</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">
              2019-12-31 12:34:13
              <!-- <div class=" d-flex justify-content-center">
                <button class="btn btn-success text-light mb-0 review justify-content-center d-flex align-items-center">送審</button>
              </div> -->
            </td>
            <td class="text-center edit">
              <div class="d-flex justify-content-center align-items-center">
                <!-- <button
                  type="button"
                  class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center"
                >
                  <i class="far fa-trash-alt"></i>
                </button> -->
                <form action="">
                  <div class="form-group d-flex justify-content-center align-items-center">
                    <select
                      name="active"
                      id=""
                      class="form-control text-primary mr-1"
                    >
                      <option value="on">啟用</option>
                      <option value="on">停用</option>
                    </select>
                    <button
                      type="button"
                      class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-pencil-alt text-light"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tablebtn imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-search text-light"></i>
                    </button>
                  </div>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-center p-0">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center">
              田中達也的奇幻世界 微型展 高雄站
            </td>
            <td class="text-center ticketName">599</td>
            <td class="text-center">3</td>
            <td class="text-center">4</td>
            <td class="text-center">10</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">
              2019-12-31 12:34:13
              <!-- <div class=" d-flex justify-content-center">
                <button class="btn btn-success text-light mb-0 review justify-content-center d-flex align-items-center">送審</button>
              </div> -->
            </td>
            <td class="text-center edit">
              <div class="d-flex justify-content-center align-items-center">
                <!-- <button
                  type="button"
                  class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center"
                >
                  <i class="far fa-trash-alt"></i>
                </button> -->
                <form action="">
                  <div class="form-group d-flex justify-content-center align-items-center">
                    <select
                      name="active"
                      id=""
                      class="form-control text-primary mr-1"
                    >
                      <option value="on">啟用</option>
                      <option value="on">停用</option>
                    </select>
                    <button
                      type="button"
                      class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-pencil-alt text-light"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tablebtn imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-search text-light"></i>
                    </button>
                  </div>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td class="text-center p-0">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center">
              田中達也的奇幻世界 微型展 高雄站
            </td>
            <td class="text-center ticketName">599</td>
            <td class="text-center">3</td>
            <td class="text-center">4</td>
            <td class="text-center">10</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">
              2019-12-31 12:34:13
              <!-- <div class=" d-flex justify-content-center">
                <button class="btn btn-success text-light mb-0 review justify-content-center d-flex align-items-center">送審</button>
              </div> -->
            </td>
            <td class="text-center edit">
              <div class="d-flex justify-content-center align-items-center">
                <!-- <button
                  type="button"
                  class="btn btn-danger imgBtnSize d-flex justify-content-center align-items-center"
                >
                  <i class="far fa-trash-alt"></i>
                </button> -->
                <form action="">
                  <div class="form-group d-flex justify-content-center align-items-center">
                    <select
                      name="active"
                      id=""
                      class="form-control text-primary mr-1"
                    >
                      <option value="on">啟用</option>
                      <option value="on">停用</option>
                    </select>
                    <button
                      type="button"
                      class="btn btn-success imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-pencil-alt text-light"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tablebtn imgBtnSize  d-flex justify-content-center align-items-center ml-1"
                    >
                      <i class="fas fa-search text-light"></i>
                    </button>
                  </div>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex align-items-center justify-content-between paginationDrop mt-3 mb-3">
      <span class="text-page">View </span>
      <form action="">
        <select
          value="num"
          class="pageFilter text-primary pl-3 ml-3 mr-3"
        >
          <option
            name="showItemNum"
            :id="index"
            v-for="(item,index) in 3"
            :key="index"
          >{{15 + index*5}}</option>
        </select>
      </form>
      <span class="text-page">Items Per Page</span>
      <nav
        aria-label="Page navigation example"
        class="ml-auto mr-auto"
      >
        <ul class="pagination pagination-sm mb-0">
          <li class="page-item">
            <a
              class="page-link text-page border-0"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-page border-0"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&lsaquo;</span>
            </a>
          </li>
          <li class="page-item"><a
              class="page-link text-page border-0"
              href="#"
            >1</a></li>
          <li class="page-item"><a
              class="page-link text-page border-0"
              href="#"
            >2</a></li>
          <li class="page-item"><a
              class="page-link text-page border-0"
              href="#"
            >3</a></li>
          <li class="page-item">
            <a
              class="page-link text-page border-0"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&rsaquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-page border-0"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <span class="text-page">1 - 15 out of 45 Items</span>
    </div>
  </div>
</template>

<script>
  export default {
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

<style lang="scss">
  .rightContentDetailTitle {
    color: #3b44a9;
    font-size: 212%;
    margin-bottom: 2%;
    vertical-align: center;
  }
  .addNewPro {
    font-size: 137%;
  }
  .table {
    .thead-dark {
      th {
        color: color-yiq(#4b4b4b);
        box-sizing: border-box;
        border-bottom: 0px;
        height: 44px;
        font-size: 14px;
      }
    }
  }
  .table-bordered {
    border-radius: 5px;
  }
  .first {
    border-radius: 5px 0 0 0px;
  }
  .last {
    border-radius: 0 5px 0px 0;
    border-right: 0;
  }
  .table-responsive {
    overflow-x: auto;
    box-sizing: border-box;
  }
  .table {
    td {
      color: #8e8e8e;
      font-size: 14px;
      padding: 16px 0px;
      vertical-align: middle;
      .imgBtnSize {
        width: 30px;
        height: 30px;
        border-radius: 3px;
      }
      img {
        width: 60px;
        height: 60px;
      }
      .review {
        width: 80px;
        height: 40px;
        border-radius: 20px;
        font-size: 10px;
      }
      &.edit {
        img {
          width: 30px;
          height: 30px;
        }
      }
      select {
        width: 120px;
        height: 40px;
        margin-left: 20px;
        & + img {
          margin-right: 2px;
          & + img {
            margin-right: 2px;
          }
        }
      }
    }
  }
  tr {
    .ticketName {
      color: #3343f7;
    }
  }
  .paginationDrop {
    font-size: 14px;
    color: #4b4b4b;
  }
  .pageFilter {
    width: 80px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #9fc4f5;
    // margin-bottom: 40px;
  }
</style>