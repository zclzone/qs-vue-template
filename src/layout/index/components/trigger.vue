<template>
  <div class="trigger" :class="{ active: isActive }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.trigger {
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #95a5aa;
    border-radius: 4px;
    opacity: 1;
    left: 0;

    -webkit-transition: all 0.8s ease-in-out;
    -moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }
  &.active {
    span {
      background: #556270;
      &:nth-child(1) {
        top: 0;
        bottom: 0;
        margin: auto;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        opacity: 0;
        left: -100px;
      }
      &:nth-child(3) {
        top: 0;
        bottom: 0;
        margin: auto;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }
}
</style>