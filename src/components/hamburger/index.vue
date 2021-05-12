<template>
  <div class="hamburger">
    <div class="hamburger-content">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 37px;
  padding: 0 10px;
  background-color: #fff;

  border: 1px solid rgba($color: #95a5aa, $alpha: 0.3);
  border-radius: 5px;

  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
  .hamburger-content {
    width: 16px;
    height: 14px;
    position: relative;
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #556270;
      border-radius: 2px;
      opacity: 1;
      left: 0;

      transition: all 0.8s ease-in-out;
      -webkit-transition: all 0.8s ease-in-out;
      -moz-transition: all 0.8s ease-in-out;
      -o-transition: all 0.8s ease-in-out;

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
  }
  &.active {
    .hamburger-content span {
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
    &.left {
      .hamburger-content span:nth-child(2) {
        left: -100px;
      }
    }
    &.right {
      .hamburger-content span:nth-child(2) {
        left: 100px;
      }
    }
  }
}
</style>