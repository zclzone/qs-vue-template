<template>
  <div class="content" v-if="msg">
    <h1 v-text="msg"></h1>
    <p>{{ curDate }}</p>
  </div>
</template>

<script>
import { test } from '@/api'
import { parseTime } from '../utils'
export default {
  data() {
    return {
      msg: '',
      curDate: parseTime(new Date(), '{y}-{M}-{d} {h}:{m}:{s}'),
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      setInterval(() => {
        this.curDate = parseTime(new Date(), '{y}-{M}-{d} {h}:{m}:{s}')
      }, 1000)
      try {
        $loading.show()
        const res = await test()
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
    color: #2e4c59;
  }
  p {
    font-size: 18px;
    color: #86a59d;
    line-height: 35px;
  }
}
@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
  .content {
    background-image: -webkit-linear-gradient(
      left bottom,
      #86a59d,
      #2e4c59 25%,
      #86a59d 50%,
      #2e4c59 75%,
      #86a59d
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