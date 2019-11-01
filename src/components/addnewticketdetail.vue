<template>
  <div>
    <div class="d-flex w-100 align-items-center">
      <span class="rightContentDetailTitle d-block  font-weight-bold w-50 mr-auto">票券明細狀態</span>
      <div class="input-group input-group-sm mb-3 w-25">
        <input
          type="text"
          class="form-control border-log border-right-0"
          placeholder="搜尋商品名稱"
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

    <hr class="py-0">
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-success d-flex justify-content-center align-items center py-2 border-0 px-4">
        <img
          src="../assets/img/xls.png"
          alt="import_excel"
          class="mr-3"
        >
        <span class="font-weight-bold">匯出EXCEL</span>
      </button>
    </div>
    <div class="table-responsive border-bottom border-left border-right">
      <table class="table mb-0">
        <thead class="thead-dark">
          <tr class="th">
            <th
              scope="col"
              class="text-center first  border-top-0  border-bottom-0 border-left-0"
            >序號</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >票號</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >圖片</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >商品名稱</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >發行價格</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >票券狀態</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >購票時間</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >核銷時間</th>
            <th
              scope="col"
              class="text-center border-top-0 border-bottom-0"
            >作廢時間</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in 1"
            :key="index"
          >
            <td class="text-center p-0">
              {{index + 1}}

            </td>
            <td class="text-center">
              31060295Y
            </td>
            <td class="text-center ticketName text-dark">

              <img
                src="../assets/img/smallshow.png"
                alt=""
              >

            </td>
            <td class="text-center text-dark font-weight-bold">田中達也奇幻世界 微型展 高雄站</td>
            <td class="text-center text-tablehead">599</td>
            <td class="text-center text-tablehead font-weight-bold">可使用</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
          </tr>
          <tr>
            <td class="text-center p-0">
              2
            </td>
            <td class="text-center">
              3135T2FUA
            </td>
            <td class="text-center ticketName text-dark">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center text-dark font-weight-bold">田中達也奇幻世界 微型展 高雄站</td>
            <td class="text-center text-tablehead">599</td>
            <td class="text-center text-tablehead font-weight-bold">已核銷</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
          </tr>
          <tr>
            <td class="text-center p-0">
              3
            </td>
            <td class="text-center">
              31060224Y
            </td>
            <td class="text-center ticketName text-dark">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center text-dark font-weight-bold">田中達也奇幻世界 微型展 高雄站</td>
            <td class="text-center text-tablehead">599</td>
            <td class="text-center text-tablehead font-weight-bold">失效</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
          </tr>
          <tr>
            <td class="text-center p-0">
              4
            </td>
            <td class="text-center">
              31060293Y
            </td>
            <td class="text-center ticketName text-dark">
              <img
                src="../assets/img/smallshow.png"
                alt=""
              >
            </td>
            <td class="text-center text-dark font-weight-bold">田中達也奇幻世界 微型展 高雄站</td>
            <td class="text-center text-tablehead">599</td>
            <td class="text-center text-tablehead font-weight-bold">已核銷</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
            <td class="text-center">2019-10-31 12:34:13</td>
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
  export default {};
</script>

<style lagn="scss">
  .rightContentDetailTitle {
    color: #3b44a9;
    font-size: 212%;
    margin-bottom: 2%;
    vertical-align: center;
  }
</style>