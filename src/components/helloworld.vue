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
    color: #bf7497;
  }
  p {
    font-size: 18px;
    color: #888;
    line-height: 35px;
  }
}
@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
  .content {
    background-image: -webkit-linear-gradient(
      left bottom,
      #888,
      #bf7497 25%,
      #888 50%,
      #bf7497 75%,
      #888
    );
    animation: masked-animation 4s infinite linear;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s infinite linear;
  }
}
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>