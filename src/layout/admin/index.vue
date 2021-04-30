<template>
  <div class="page" :class="{ 'menu-active': isMenuActive }">
    <nav id="slide-menu">
      <ul>
        <li>
          <a href="#0">Home</a>
        </li>
        <li><a href="#0">Blog</a></li>
        <li><a href="#0">About</a></li>
        <li><a href="#0">Contact</a></li>
        <li class="last"><a href="#0">Wechat</a><a href="#0">Github</a></li>
      </ul>
    </nav>

    <main id="content">
      <div id="menu-trigger" @click="isMenuActive = !isMenuActive"></div>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/admin/index.css';
.page {
  display: flex;
  height: 100%;
  background-color: #556270;

  #slide-menu {
    width: 0;
    min-width: 0;
    height: 100%;
    background: #556270;
    opacity: 0;

    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        display: flex;
        align-self: center;
        &.last {
          margin-top: auto;
          a {
            font-size: 12px;
            font-weight: 400;
            & + a {
              margin-left: 15px;
            }
          }
        }
        a {
          padding: 10px 5px;
          display: block;
          text-transform: uppercase;
          transition: color 0.1s;
          color: #dfe5eb;
          &:hover {
            color: #bf7497;
          }
        }
      }
    }
  }
  #content {
    flex: 1;
    position: relative;

    height: 100%;
    padding: 60px;
    background-color: #fff;

    -moz-transition: all 300ms;
    -webkit-transition: all 300ms;
    transition: all 300ms;

    #menu-trigger {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 36px;
      height: 36px;
      background: #dfe5eb;
      cursor: pointer;
      border-radius: 5px;

      -moz-transition: all 300ms;
      -webkit-transition: all 300ms;
      transition: all 300ms;

      &:before {
        content: '\e801';
        display: inline-block;
        width: 36px;
        height: 36px;
        color: black;
        font-family: 'ico';
        font-style: normal;
        font-size: 1.2em;
        font-weight: normal;
        font-variant: normal;
        text-align: center;
        text-transform: none;
        line-height: 36px;
      }

      &:hover {
        background: #556270;
        &:before {
          color: #fcfeff;
        }
      }
    }
  }
  &.menu-active {
    #slide-menu {
      width: auto;
      min-width: 230px;
      padding: 20px;
      opacity: 1;
    }
    #content {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
}
</style>