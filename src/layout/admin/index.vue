<template>
  <div
    class="page"
    @click="isMenuActive = false"
    :class="{ 'menu-active': isMenuActive }"
  >
    <nav id="slide-menu" @click.stop>
      <ul>
        <li><a href="http://www.qszone.com">Home</a></li>
        <li><a href="http://blog.qszone.com">Blog</a></li>
        <li><a href="http://blog.qszone.com">About</a></li>
        <li><a href="http://me.qszone.com/">Contact</a></li>
        <li class="last">
          <a href="https://github.com/zclzone">Wechat</a
          ><a href="https://github.com/zclzone">Github</a>
        </li>
      </ul>
    </nav>

    <main id="content">
      <div id="menu-trigger" @click.stop="isMenuActive = !isMenuActive">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/admin/index.css';
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2e4c59;
  #slide-menu {
    max-width: 0;
    min-width: 0;
    height: 100%;
    background: #2e4c59;

    transition: all 0.5s;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;

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
        display: flex;
        justify-content: center;
        &.last {
          margin-top: auto;
          a {
            font-size: 12px;
            font-weight: 400;
            & + a {
              margin-left: 15px;
            }
          }
        }
        a {
          padding: 10px;
          display: block;
          text-transform: uppercase;
          transition: color 0.3s;
          color: #fff;
          &:hover {
            color: #95a5aa;
            text-decoration: underline;
          }
        }
      }
    }
  }
  #content {
    flex: 1;
    position: relative;

    height: 100%;
    background-color: #fff;

    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;

    #menu-trigger {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 30px;
      height: 26px;
      cursor: pointer;
      span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: #95a5aa;
        border-radius: 4px;
        opacity: 1;
        left: 0;

        -webkit-transition: all 0.8s ease-in-out;
        -moz-transition: all 0.8s ease-in-out;
        -o-transition: all 0.8s ease-in-out;
        transition: all 0.8s ease-in-out;

        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: 0;
          bottom: 0;
          margin: auto;
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
    }
  }
  &.menu-active {
    #slide-menu {
      min-width: 200px;
      max-width: 241px;
      width: auto;
      padding: 20px 0;
    }
    #content {
      border-radius: 10px;
      height: calc(100% - 20px);
      margin-right: 10px;
      #menu-trigger {
        span {
          background: #556270;
          &:nth-child(1) {
            top: 0;
            bottom: 0;
            margin: auto;
            -webkit-transform: rotate(135deg);
            -moz-transform: rotate(135deg);
            -o-transform: rotate(135deg);
            transform: rotate(135deg);
          }
          &:nth-child(2) {
            opacity: 0;
            left: -100px;
          }
          &:nth-child(3) {
            top: 0;
            bottom: 0;
            margin: auto;
            -webkit-transform: rotate(-135deg);
            -moz-transform: rotate(-135deg);
            -o-transform: rotate(-135deg);
            transform: rotate(-135deg);
          }
        }
      }
    }
  }
}
</style>