<template>
  <div class="page">
    <header tabindex="0">头部</header>
    <div id="nav-container">
      <div class="bg"></div>
      <div class="button" tabindex="0">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
      <div id="nav-content" tabindex="0">
        <ul>
          <li><a href="#0">Home</a></li>
          <li><a href="#0">Blog</a></li>
          <li><a href="#0">About</a></li>
          <li><a href="#0">Contact</a></li>
          <li class="last"><a href="#0">Wechat</a><a href="#0">Github</a></li>
        </ul>
      </div>
    </div>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  background: #fdfdfd;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #212121;
  header {
    display: flex;
    position: fixed;
    width: 100%;
    height: 70px;
    background: #212121;
    color: #fff;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  #nav-container {
    position: fixed;
    height: 100vh;
    width: 100%;
    pointer-events: none;
    * {
      visibility: visible;
    }
    .bg {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      height: calc(100% - 70px);
      visibility: hidden;
      opacity: 0;
      transition: 0.3s;
      background: #000;
    }
    .button {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
      -webkit-appearance: none;
      border: 0;
      background: transparent;
      border-radius: 0;
      height: 70px;
      width: 30px;
      cursor: pointer;
      pointer-events: auto;
      margin-left: 25px;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      .icon-bar {
        display: block;
        width: 100%;
        height: 3px;
        background: #aaa;
        transition: 0.3s;
        & + .icon-bar {
          margin-top: 5px;
        }
      }
    }
    &:focus-within {
      .bg {
        visibility: visible;
        opacity: 0.6;
      }
      .button {
        pointer-events: none;
        .icon-bar:nth-of-type(1) {
          transform: translate3d(0, 8px, 0) rotate(45deg);
        }
        .icon-bar:nth-of-type(2) {
          opacity: 0;
        }
        .icon-bar:nth-of-type(3) {
          transform: translate3d(0, -8px, 0) rotate(-45deg);
        }
      }
      #nav-content {
        transform: none;
      }
    }
  }

  #nav-content {
    margin-top: 70px;
    padding: 20px;
    width: 90%;
    max-width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 70px);
    background: #ececec;
    pointer-events: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform: translateX(-100%);
    transition: transform 0.5s;
    will-change: transform;
    contain: paint;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        &.last {
          margin-top: auto;
          display: flex;
          align-self: center;
          a {
            font-size: 12px;
            font-weight: 400;
            color: #888;
            & + a {
              margin-left: 15px;
            }
          }
        }
        a {
          padding: 10px 5px;
          display: block;
          text-transform: uppercase;
          transition: color 0.1s;
          &:hover {
            color: #bf7497;
          }
        }
      }
    }
  }

  main {
    padding: 70px 20px 0;
    height: 100%;
  }
}
</style>