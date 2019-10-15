<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- border-bottom是为了使用先前引入的1像素边框 -->
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: []
    }
  }
}
</script>

<style lang="stylus" scoped>\
  @import '~styles/mixins.styl'
  .title
    line-height 80px
    background #eeeeee
    text-indent 20px
  .item
    display flex
    height 190px
    .item-img
      width 170px
      height 170px
      padding 10px
    .item-info
      flex 1
      padding 10px
      // 使item-title和item-desc中的文字能超出省略
      min-width 0
      .item-title
        line-height 54px
        font-size 32px
        ellipsis()
      .item-desc
        line-height 40px
        color #ccc
        ellipsis()
      .item-button
        line-height 45px
        margin-top 16px
        background #ff9300
        padding 0 20px
        border-radius 6px
        color #fff
</style>
