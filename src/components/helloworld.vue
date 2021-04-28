<template>
  <div class="content" v-if="msg">
    <h1 v-text="msg"></h1>
    <p>{{ curDate | dateFormat }}</p>
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
        $loading.show()
        const res = await this.$axios.get('/test')
        $loading.hide()
        this.msg = res.data.msg
      } catch (error) {
        $loading.hide()
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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