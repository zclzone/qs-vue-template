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
  padding: 10px 30px;
  background-color: #fff;
  border-bottom: 1px solid rgba($color: #95a5aa, $alpha: 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    font-size: 28px;
    text-transform: uppercase;
    a {
      color: #2e4c59;
    }
  }
}
</style>