<template>
  <div id="app">
    <!-- TODO:keep-alive为vue自带标签，路由的内容被加载一次之后就会将其放在内存之中；下次再进这个路由时不需要再去重新渲染钩子函数 -->
    <!-- exclude="detail"表明name: detail的页面不被缓存；每次进入页面都会重新触发钩子函数 -->
    <keep-alive exclude="detail">
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
