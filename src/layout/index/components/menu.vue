<template>
  <ul class="menu">
    <li v-for="(item, index) in menuList" :key="index">
      <router-link v-if="!item.isExternal" :to="item.link">
        {{ item.name }}
      </router-link>
      <!-- 外链 -->
      <a v-else :href="item.link" target="_blank">{{ item.name }}</a>
    </li>

    <li class="last">
      <a href="https://github.com/zclzone">Wechat</a>
      <a href="https://github.com/zclzone">Github</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default() {
        return [
          { name: 'Home', link: '/' },
          { name: 'Blog', link: 'http://blog.qszone.com', isExternal: true },
          { name: 'About', link: 'http://www.qszone.com', isExternal: true },
          { name: 'Contact', link: 'http://me.qszone.com', isExternal: true },
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
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
</style>