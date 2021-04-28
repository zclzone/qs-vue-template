<template>
  <div class="view">
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '@/components/helloworld'
export default {
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
}
</style>