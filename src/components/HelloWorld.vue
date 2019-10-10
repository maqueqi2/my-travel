<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="tips">准备开始</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '首次开始'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h2 {
  font-weight: normal;
}
.container {
  display: inline-block;
  background: aqua;
  .tips {
    color: red;
    font-size: 36px;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 3px;
  }
}
</style>
