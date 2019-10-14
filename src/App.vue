<template>
  <div id="app">
    <!-- keep-alive为vue自带标签，路由的内容被加载一次之后就会将其放在内存之中；下次再进这个路由时不需要再去重新渲染钩子函数 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
