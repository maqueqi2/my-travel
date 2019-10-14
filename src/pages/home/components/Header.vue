<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题/{{this.doubleCity}}
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <div class="text">{{this.city}}</div>
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
  // 在css中使用@引用其它样式文件，前面需要加上~
  // @import '~@/assets/styles/varibles.styl'
  // styles是在webpack.base.conf.js新配置的，类似于@
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header
    display flex
    line-height 86px
    background $bgColor
    color #fff
    .header-left
      width 64px
      float left
      .back-icon
        display block
        text-align center
        font-size 40px
    .header-input
      flex 1
      height 64px
      line-height 64px
      padding-left 20px
      margin 12px 15px 0 10px
      background #fff
      border-radius 10px
      color #ccc
      .search-icon
        font-size 28px
    .header-right
      display flex
      width 124px
      float right
      text-align center
      color #fff
      .text
        width 80px
        ellipsis()
      .arrow-icon
        margin-left -2px
        font-size 24px
</style>
