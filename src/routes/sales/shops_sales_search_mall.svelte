<script lang="ts">
  import { browser, dev } from "$app/env";
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;

  let checked = true;
  let name_sales = "판매중　";

  let toggleSearchFilterVal = true;

  function toggleSearchFilter() {
    toggleSearchFilterVal = !toggleSearchFilterVal;

    //검색필터 토글시 css-grid 템플릿 옵션을 변경해서 세로 사이즈를 조절합니다.
    let gridContainer = document.querySelector<HTMLElement>(".container");

    if (toggleSearchFilterVal) {
      gridContainer.style.gridTemplateRows = "auto 1fr";
    } else {
      gridContainer.style.gridTemplateRows = "1fr";
    }
  }

</script>

<svelte:head>
  <title>판매 > 상품조회_몰별</title>
</svelte:head>

<div class="container">
  {#if toggleSearchFilterVal}
  <!-- 검색필터 영역 -->
    <section class="search-filter">
      <table>
        <tr>
          <th>쇼핑몰</th>
          <td>
            <input type="text" placeholder="선택(↓)" />
          </td>
          <th rowspan="2">조회기간</th>
          <td class="date double-width" rowspan="2">
            <input type="date" /><span>~</span><input type="date" />
            <div class="button-horizen-list">
              <button>오늘</button>
              <button>7일</button>
              <button>30일</button>
              <button>90일</button>
              <button>120일</button>
            </div>
          </td>
          <th>판매상태</th>
          <td class="half-width">
            <label>
              <input type="checkbox" />
              {name_sales}
            </label>
            <label>
              <input type="checkbox" />
              판매중지
            </label>
          </td>
          <th>검색구분</th>
          <td>
            <select>
              <option disabled value="">-- 검색 구분 --</option>
              <option>자체상품코드</option>
              <option>쇼핑몰코드</option>
            </select>
          </td>
          <td class="not-th" rowspan="2">
            <div class="search-form">
              <textarea placeholder="검색어를 입력하세요." />
              <button on:click={toggleSearchFilter}>
                <span class="material-icons-round">search</span></button
              >
              <label>
                <input type="checkbox" bind:checked />
                자체상품코드 포함
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>분류검색</th>
          <td>
            <input type="text" placeholder="선택(↓)" />
          </td>
          <th>재고상태</th>
          <td class="half-width">
            <label>
              <input type="checkbox" />
              재고있음
            </label>
            <label>
              <input type="checkbox" />
              재고없음
            </label>
          </td>
          <th>수정상태</th>
          <td>
            <input type="text" placeholder="선택(↓)" />
          </td>
        </tr>
      </table>
    </section>
  {/if}

  <section class="result-table">

    <!-- 좌측 체크박스 부분  -->
    <div class="tool-area">
      <label>
        <input type="checkbox" />
        파싱진행
      </label>
      <label>
        <input type="checkbox" />
        전체수정
      </label>
      <label>
        <input type="checkbox" />
        가격수정
      </label>
      <label>
        <input type="checkbox" />
        재고수정
      </label>

      <!-- 우측 버튼 모음 -->
      <div class="button-horizen-list">
        {#if !toggleSearchFilterVal}
          <button on:click={toggleSearchFilter} class="toggle-search-filter">
            <span class="material-icons-round"> search </span>
            <div class="tooltip">검색필터열기</div>
          </button>
        {/if}

        <button>
          <span class="material-icons-round"> reorder </span>
          <div class="tooltip">목록으로</div>
        </button>
        <button class="danger">
          <span class="material-icons-round"> launch </span>
          <div class="tooltip">선택파싱</div>
        </button>
        <button>
          <span class="material-icons-round"> mode_edit </span>
          <div class="tooltip">기본상품명 변경</div>
        </button>
        <button>
          <span class="material-icons-round"> percent </span>
          <div class="tooltip">배수율/수수료 변경</div>
        </button>
        <button>
          <span class="material-icons-round"> attach_money </span>
          <div class="tooltip">기준판매가 적용 판매가 수정</div>
        </button>
        <button>
          <span class="material-icons-round"> multiple_stop </span>
          <div class="tooltip">판매상태변경</div>
        </button>
        <button>
          <span class="material-icons-round"> redeem </span>
          <div class="tooltip">상품수정</div>
        </button>
        <button class="danger">
          <span class="material-icons-round"> delete </span>
          <div class="tooltip">상품삭제</div>
        </button>
        <button>
          <span class="material-icons-round"> file_download </span>
          <div class="tooltip">엑셀다운</div>
        </button>
      </div>
    </div>


    <div class="table-area">
      <!-- 예시테이블 -->
      <table>
        <thead>
          <th><input type="checkbox" /></th>
          <th>번호</th>
          <th>쇼핑몰</th>
          <th>판매</th>
          <th>자체상품코드</th>
          <th>이미지</th>
          <th>미리보기</th>
          <th>몰코드</th>
          <th>상품명</th>
          <th>브랜드</th>
          <th>카테고리</th>
          <th>수량</th>
          <th>옵션</th>
          <th>배수율</th>
          <th>수수료</th>
          <th>기준판매가</th>
          <th>판매가</th>
          <th>공급가</th>
          <th>구입가</th>
          <th>마진</th>
          <th>마진율</th>
          <th>업데이트일</th>
          <th>분류코드</th>
          <th>상태</th>
          <th>승인상태</th>
          <th>idx</th>
          <th>파싱일시</th>
          <th>판매옵션</th>
          <th>몰상태</th>
          <th>판매가</th>
          <th>할인율</th>
          <th>할인가</th>
          <th>판매자</th>
          <th>재호출</th>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>1</td>
            <td>11번가</td>
            <td>판매중</td>
            <td>TS0433 22P075H PEBK</td>
            <td
              ><img
                alt=""
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/7QBIUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAIAOEJJTQQlAAAAAAAQ/OEfici3yXgvNGI0B1h36//hABhFeGlmAABJSSoACAAAAAAAAAAAAAAA/+EDHGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8AP3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA3LjEtYzAwMCA3OS5kYWJhY2JiLCAyMDIxLzA0LzE0LTAwOjM5OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NjQ4QzdBNzY4NjYxMUVDQTJBRDlEOTg4MjFCMUI5NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NjQ4QzdBNjY4NjYxMUVDQTJBRDlEOTg4MjFCMUI5NSIgeG1wOkNyZWF0b3JUb29sPSJDYXB0dXJlIE9uZSBQcm8gMTIuMS41IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQUEwRkUwMUE2Rjg4RkYzMkMxMDI0NTdEMDI5MkI0NjUiIHN0UmVmOmRvY3VtZW50SUQ9IkFBMEZFMDFBNkY4OEZGMzJDMTAyNDU3RDAyOTJCNDY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8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"
              /></td
            >
            <td><span class="material-icons-round"> link </span></td>
            <td>4052142885</td>
            <td>[이자벨마랑] 자페르 TS0433 22P075H PEBK 남자 양면 반팔티셔츠</td
            >
            <td>이자벨마랑</td>
            <td>남성상의</td>
            <td>4</td>
            <td>S/M/L/XL</td>
            <td>1.46</td>
            <td>00,00</td>
            <td>000,000</td>
            <td>000,000</td>
            <td>000,040</td>
            <td>00,000</td>
            <td>00,000</td>
            <td>00.00%</td>
            <td>0000-00-00</td>
            <td>000000</td>
            <td>완료</td>
            <td>undefined</td>
            <td>0000000</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td><span class="material-icons-round"> cached </span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>

<style lang="scss">

  //SCSS 기능입니다, 스타일을 세트로 모아서 사용할 수 있습니다. 
  @mixin input-border {
    border: 1px solid $gray-06;
    border-radius: 0.4rem;
    height: 3.2rem;
    padding: 0.4rem;
  }

  @mixin input-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba($accent-color, 0.1);
      font-weight: 600;
    }
    input[type="checkbox"] {
      margin-right: 0.4rem;
    }
  }


  //헤더를 제외하고, 전체 레이아웃을 잡는 그리드 부분입니다. 
  div.container {
    position: absolute;
    top: 4.8rem;
    left: 0;
    width: 100%;
    height: calc(100% - 4.8rem);
    padding: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-gap: 0.8rem;
  }

  section {
    background-color: $white;
    padding: 0.8rem;
    font-size: 1.4rem;
    border-radius: 0.8rem;
    &.search-filter {
      overflow-x: hidden;
    }
  }

  // 검색필터에 대한 설정입니다. 
  section.search-filter table {
    border-collapse: collapse;
    * {
      box-sizing: border-box;
    }

    th,
    td {
      padding: 0.8rem;
      border-top: 1px solid $gray-05;
      border-bottom: 1px solid $gray-05;
      box-sizing: border-box;
    }

    th {
      background-color: $gray-02;
      min-width: 8rem;
    }

    td {
      min-width: $cell-default-width * 3;
      &.not-th {
        border-left: 1px solid $gray-05;
        width: 100%;
      }
      &.half-width {
        min-width: $cell-default-width * 2 !important;
      }
      &.double-width {
        min-width: $cell-default-width * 4 !important;
      }
    }

    input[type="text"],
    select {
      width: 100%;
      @include input-border();
    }

    label {
      @include input-checkbox();
    }

    .date {
      input[type="date"] {
        width: calc(50% - 1.5rem);
        @include input-border();
      }

      span {
        display: inline-block;
        width: 3rem;
        text-align: center;
      }

      // 조회기간 버튼 내용입니다.
      .button-horizen-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin-top: 0.8rem;

        button {
          @include input-border();
          height: 3.2rem;
          background-color: $white;
          font-weight: 600;

          &:not(:last-child) {
            margin-right: 0.8rem;
          }
          &:hover {
            background-color: $gray-04;
            cursor: pointer;
          }
          &:active {
            background-color: $gray-05;
          }
        }
      }
    }

    //검색버튼이 있는 검색폼 내용입니다.
    .search-form {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 24rem 12rem 1fr;
      grid-gap: 0.8rem;

      margin: 0;


      //검색입력창
      textarea {
        width: 24rem;
        min-height: 100%;
        resize: none;
        grid-column: 1/2;
        grid-row: 1/4;

        @include input-border();
      }

      //검색버튼
      button {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: 2/3;
        grid-row: 2/4;
        background-color: $accent-color;
        border: 0;
        border-radius: 0.4rem;
        color: $white;
        font-weight: 600;
        font-size: 1.6rem;
        height: 100%;
        &:hover {
          cursor: pointer;
          background-color: lighten($accent-color, 5%);
        }
        &:active {
          background-color: darken($accent-color, 5%);
        }
      }
    }
  }

  //검색결과 테이블 + 버튼들 설정입니다. 
  section.result-table {
    overflow-y: hidden;
    padding-top: 0;

    .material-icons-round {
      color: $gray-08;
    }


    //기능 버튼 영역 
    .tool-area {
      position: relative;
      display: flex;
      align-items: center;
      white-space: nowrap;
      height: 4.8rem;
      padding: 0 0.8rem;
      border-bottom: 1px solid $gray-05;

      label {
        @include input-checkbox();
        margin-right: 1.6rem;
      }

      //버튼 리스트 
      .button-horizen-list {
        position: absolute;
        right: 0;
        background-color: $white;

        //아이콘 버튼
        button {
          position: relative;
          background-color: $white;
          border: 1px solid $gray-05;
          border-radius: 32rem;
          width: 4.8rem;
          margin-left: 0.4rem;

          &.danger span {
            color: tomato;
          }

          &.toggle-search-filter span {
            color: $accent-color;
          }

          &:hover {
            cursor: pointer;
            background-color: $gray-03;
            div {
              visibility: visible;
              transform: translate3d(-50%, 1.6rem, 0);
            }
          }

          //툴팁 설정
          .tooltip {
            visibility: hidden;
            position: absolute;
            z-index: 1;
            left: 50%;

            padding: 0.8rem;
            text-align: center;
            border-radius: 0.8rem;
            color: $white;
            background-color: $gray-15;

            transform: translate3d(-50%, 0, 0);
            transition: all 0.15s ease-in-out;
          }
          .tooltip::after {
            content: " ";
            position: absolute;
            bottom: 100%; /* At the bottom of the tooltip */
            left: 50%;
            margin-left: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent $gray-15 transparent;
          }
        }
      }
    }


    //테이블 영역입니다. 
    .table-area {
      width: 100%;
      height: calc(100% - 4.8rem);
      overflow: scroll;

      table {
        width: 100%;
        border-collapse: collapse;

        * {
          box-sizing: border-box;
        }

        th,
        td {
          height: 4rem;
          text-align: center;
          padding: 0.8rem;
          border-bottom: 1px solid $gray-05;
        }

        th {
          background-color: $gray-02;
          position: sticky;
          top: 0;
        }

        tr:hover {
          background-color: rgba($accent-color, 0.1);
        }
      }
    }
  }

</style>
