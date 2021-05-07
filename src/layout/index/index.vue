<template>
  <div
    class="layout"
    @click="isMenuActive = false"
    :class="{ 'menu-active': isMenuActive }"
  >
    <!-- 侧边栏 -->
    <nav id="slide-menu" v-if="isShowMenu" @click.stop>
      <slide-menu :menuList="menuList" />
    </nav>

    <!-- 主体内容 -->
    <main id="content">
      <!-- 侧边栏触发器 -->
      <div
        id="menu-trigger"
        v-if="isShowMenu"
        @click.stop="isMenuActive = !isMenuActive"
      >
        <menu-trigger :isActive="isMenuActive" />
      </div>

      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </main>
  </div>
</template>

<script>
import SlideMenu from './components/menu'
import MenuTrigger from './components/trigger'
import { isShowMenu } from '../../settings'
export default {
  name: 'layout',
  data() {
    return {
      isShowMenu,
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
    SlideMenu,
    MenuTrigger,
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/layout';
.layout {
  background-color: #2e4c59;
  #slide-menu {
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
    }
  }
  &.menu-active {
    #slide-menu {
      min-width: 200px;
      max-width: 241px;
      width: auto;
    }
    #content {
      border-radius: 10px;
      height: calc(100% - 20px);
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>