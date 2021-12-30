<script>
  import workoneLogo from "./workone-logo.svg";
  import telegramLogo from "./telegram-logo.svg";
  import { page } from "$app/stores";
  import { headerMenuLists } from "$lib/store";

  let toggleDropdown;
</script>

<header>
  <div class="corner">
    <!--좌측 코너 : 메인화면으로 이동-->
    <a href="/">
      <img class="logo" src={workoneLogo} alt="Main" />
    </a>
  </div>

  <!-- 헤더 메뉴 드롭다운 내비게이션 -->
  <nav>
    <ul>
      {#each headerMenuLists as headerMenuList (headerMenuList.navTitle)}
        <li
          class:active={$page.path.indexOf(`${headerMenuList.navTitle.link}`) > -1}
          on:mouseenter={() => {
            toggleDropdown = true;
          }}
        >
          {headerMenuList.navTitle.name}
          {#if toggleDropdown}
            <ul class="dropdown">
              {#each headerMenuList.subTitle as dropdownBtn}
                <li
                  on:click={() => {
                    toggleDropdown = false;
                  }}
                >
                  <a
                    sveltekit:prefetch
                    href={dropdownBtn.link}
                    class:active={$page.path.indexOf(`${dropdownBtn.link}`) > -1}>{dropdownBtn.name}</a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>

  <!-- 우측 코너 : 추가 메뉴 (아이콘 링크) -->
  <div class="corner right">
    <span class="link-icon-box">
      <img class="svg-icon" src={telegramLogo} alt="Show messenger" />
    </span>
    <span class="link-icon-box material-icons-round"> more_vert </span>
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    background-color: $gray-15;
    height: 4.8rem;
  }

  .corner {
    img.logo {
      height: 2rem;
      padding: 0 1.6rem;
    }
    img.svg-icon {
      height: 2.4rem;
      padding: 0 1.6rem;
    }

    &.right {
      display: flex;
      position: absolute;
      right: 0;
    }

    a,
    span.link-icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    span.link-icon-box {
      width: 4.8rem;
      height: 4.8rem;

      &:hover {
        background-color: rgba($accent-color, 0.25);
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    z-index: 999;

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li {
      display: flex;
      position: relative;
      align-items: center;
      height: 100%;
      padding: 0 3.2rem;
      font-size: 1.6rem;
      color: $white;
      transition: color 0.2s linear;
      white-space: nowrap;

      &:hover {
        color: $accent-color;
        cursor: pointer;

        ul.dropdown {
          display: block;
        }
      }

      &.active::before {
        --size: 6px;
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid $accent-color;
      }
    }
  }

  ul.dropdown {
    display: none;
    position: absolute;
    top: 4.8rem;
    left: 1rem;
    padding: 0;
    background-color: $gray-14;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    li {
      padding: 0;
      a {
        width: 18rem;
        padding: 1.2rem;
        color: $white;
        font-size: 1.4rem;
        text-decoration: none;
        &.active {
          color: $accent-color;
          font-weight: 600;
        }
      }
      &:hover {
        background-color: $gray-13;
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        a {
          color: $accent-color;
        }
      }
    }
  }
</style>
