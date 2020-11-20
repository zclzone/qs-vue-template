<template>
  <div class="view">
    <h1 v-text="msg"></h1>
    <p>{{curDate | dateFormat}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      curDate: new Date(),
    }
  },
  mounted() {
    this.$loading.show()
    this.$axios.get('/test').then((rst) => {
      this.$loading.hide()
      this.msg = rst.data
    })
  },
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
  p {
    font-size: 16px;
    color: #bbb;
  }
}
</style>