<template>
  <div
    class="layout"
    @click="isMenuActive = false"
    :class="{ 'menu-active': isMenuActive }"
  >
    <!-- 侧边栏 -->
    <nav id="slide-menu" @click.stop>
      <slide-menu />
    </nav>

    <!-- 主体内容 -->
    <main id="content">
      <!-- 侧边栏触发器 -->
      <div id="menu-trigger" @click.stop="isMenuActive = !isMenuActive">
        <menu-trigger :isActive="isMenuActive" />
      </div>

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SlideMenu from './components/menu'
import MenuTrigger from './components/trigger'
export default {
  name: 'layout',
  data() {
    return {
      isMenuActive: false,
      menuList: [],
    }
  },
  components: {
    SlideMenu,
    MenuTrigger,
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/admin/index.css';
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2e4c59;
  #slide-menu {
    max-width: 0;
    min-width: 0;
    height: 100%;
    padding: 20px 0;
    background: #2e4c59;

    transition: all 0.5s;
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