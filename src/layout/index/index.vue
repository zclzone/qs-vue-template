<template>
  <div
    class="layout"
    @click="isMenuActive = false"
    :class="{ [navDirection]: true, 'menu-active': isMenuActive }"
  >
    <!-- 侧边栏菜单 -->
    <nav id="side-menu" v-if="isShowMenu" @click.stop>
      <side-menu :menuList="menuList" />
    </nav>

    <!-- 主体内容部分 -->
    <main id="content">
      <!-- 侧边栏触发器 -->
      <div
        id="menu-trigger"
        v-if="isShowMenu"
        @click.stop="isMenuActive = !isMenuActive"
      >
        <menu-trigger :isActive="isMenuActive" :direction="navDirection" />
      </div>

      <!-- 头部 -->
      <app-header v-if="isShowHeader" :brand="title" />

      <!-- 内容 -->
      <main class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </main>

      <!-- 尾部：版权信息/备案信息 -->
      <app-footer v-if="isShowFooter" />
    </main>
  </div>
</template>

<script>
import SideMenu from './components/menu'
import MenuTrigger from './components/trigger'
import AppHeader from './components/header'
import AppFooter from './components/footer'
import {
  isShowMenu,
  navDirection,
  isShowHeader,
  isShowFooter,
  title,
} from '@/settings'
export default {
  name: 'layout',
  data() {
    return {
      isShowMenu,
      navDirection,
      isShowHeader,
      isShowFooter,
      title,
      isMenuActive: false,
      menuList: [
        { name: 'Home', link: '/' },
        { name: 'Blog', link: 'http://blog.qszone.com', isExternal: true },
        { name: 'About', link: 'http://www.qszone.com', isExternal: true },
        { name: 'Contact', link: 'http://me.qszone.com', isExternal: true },
      ],
    }
  },
  components: {
    SideMenu,
    MenuTrigger,
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/layout';
.layout {
  background-color: #2e4c59;
  #side-menu {
    max-width: 0;
    min-width: 0;
    height: 100%;
    padding: 20px 0;
    background: #2e4c59;

    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
  }
  #content {
    flex: 1;
    position: relative;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    height: 100%;

    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;

    #menu-trigger {
      position: absolute;
      top: 25px;
      width: 20px;
      height: 18px;
      cursor: pointer;
    }

    .main {
      flex: 1;
    }
  }
  &.left {
    flex-direction: row;
    #menu-trigger {
      left: 10px;
    }
  }
  &.right {
    flex-direction: row-reverse;
    #menu-trigger {
      right: 10px;
    }
  }
  &.menu-active {
    #side-menu {
      min-width: 160px;
      max-width: 240px;
      width: auto;
    }
    #content {
      border-radius: 10px;
      height: calc(100% - 20px);
      margin-left: 10px;
      margin-right: 10px;
      .header,
      .footer {
        border-radius: 10px;
      }
    }
  }
}
</style>