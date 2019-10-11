<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'home',
  components: {
    HomeHeader
  },
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
