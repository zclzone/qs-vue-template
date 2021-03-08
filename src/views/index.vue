<template>
  <div class="view" v-show="msg">
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
    this.initData()
  },
  methods: {
    async initData() {
      setInterval(() => {
        this.curDate = new Date()
      }, 1000)
      try {
        this.$loading.show()
        const res = await this.$axios.get('/test')
        this.$loading.hide()
        this.msg = res.data.msg
      } catch (error) {
        console.error(error)
      }
    },
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
    font-size: 18px;
    line-height: 35px;
    color: #aaa;
  }
}
</style>