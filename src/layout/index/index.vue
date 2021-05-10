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

    <!-- 主体部分 -->
    <section id="content">
      <!-- 侧边栏触发器 -->
      <menu-trigger
        :isActive="isMenuActive"
        :direction="navDirection"
        v-if="isShowMenu"
        @click.stop.native="isMenuActive = !isMenuActive"
      />

      <!-- 头部 -->
      <app-header v-if="isShowHeader" :brand="title" />

      <!-- 内容 -->
      <app-main />

      <!-- 尾部：版权信息/备案信息 -->
      <app-footer v-if="isShowFooter" />
    </section>
  </div>
</template>

<script>
import SideMenu from './components/menu'
import MenuTrigger from './components/trigger'
import AppHeader from './components/header'
import AppMain from './components/main'
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
    AppMain,
    AppFooter,
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/layout';
.layout {
  background-color: #2e4c59;
  #side-menu {
    width: 0;
    height: 100%;
    padding: 20px 0;
    background: #2e4c59;
  }
  #content {
    flex: 1;
    position: relative;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &.left {
    flex-direction: row;
    #content .header {
      padding-left: 115px;
    }
  }
  &.right {
    flex-direction: row-reverse;
    #content .header {
      padding-left: 30px;
    }
  }
  &.menu-active {
    #side-menu {
      width: 200px;
    }
    #content {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      .header {
        border-top-left-radius: 30px;
      }
      .footer {
        border-bottom-left-radius: 30px;
      }
    }
  }
}
</style>