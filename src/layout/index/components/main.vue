<template>
  <main class="main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  flex: 1;
  overflow: auto;
}
</style>