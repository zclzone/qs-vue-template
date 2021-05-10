<template>
  <footer class="footer">
    <p><a href="http://me.qszone.com">www.qszone.com</a></p>
    <p>Designed & Powerd by <a href="http://me.qszone.com">Ronnie Zhang</a></p>
    <p>Copyright© 2021 张传龙</p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 88px;
  padding: 10px 0;
  background-color: #e5e5e5;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    color: #2e4c59;
    a {
      color: #333;
      transition: color 0.3s;
      &:hover {
        color: #95a5aa;
        text-decoration: underline;
      }
    }
  }
}
</style>