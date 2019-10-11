<template>
  <div class="container">
    <a>{{ msg }}</a>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  display: inline-block;
  background: #fff;
    border-radius: 3px;
    font-size: 36px;
    font-weight: 600;
    padding: 5px 10px;
}
</style>
