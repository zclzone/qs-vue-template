<template>
  <header class="header">
    <h1 class="brand">
      <a href="/">{{ brand }}</a>
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    brand: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 67px;
  padding: 10px;
  padding-left: 45px;
  background-color: #fff;
  border-bottom: 1px solid rgba($color: #95a5aa, $alpha: 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    color: #2e4c59;
    text-transform: uppercase;
  }
}
</style>