<template>
  <ul class="menu">
    <li><a href="http://www.qszone.com">Home</a></li>
    <li><a href="http://blog.qszone.com">Blog</a></li>
    <li><a href="http://blog.qszone.com">About</a></li>
    <li><a href="http://me.qszone.com/">Contact</a></li>
    <li class="last">
      <a href="https://github.com/zclzone">Wechat</a
      ><a href="https://github.com/zclzone">Github</a>
    </li>
  </ul>
</template>

<script>
export default {}
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