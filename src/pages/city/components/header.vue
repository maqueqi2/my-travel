<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    overflow hidden
    height 86px
    line-height 86px
    text-align center
    color #fff
    background $bgColor
    font-size 32px
    position relative
    .header-back
      position absolute
      top 0
      left 0
      width 64px
      text-align center
      font-size 40px
      color #fff
</style>
