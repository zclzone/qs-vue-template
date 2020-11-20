<template>
  <div>
    <p class="qs-icon i-home">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
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