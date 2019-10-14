<template>
  <div class="search">
    <input class="search-ipt" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height 72px
    padding 0 10px
    background $bgColor
    .search-ipt
      font-size 24px
      box-sizing border-box
      width 100%
      height 62px
      padding 0 10px
      line-height 62px
      text-align center
      border-radius 6px
      color #666
</style>
