<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- border-bottom是为了使用先前引入的1像素边框 -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/93/93bc1aacad975843.water.jpg_200x200_27557f82.jpg',
        title: '山沟沟',
        desc: '山沟沟里来姑娘多；这里特别受欢迎的呦！光阴荏苒，缘分纤长！'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1909/d3/d3d52fa90b472b46a3.water.jpg_200x200_ce81137b.jpg',
        title: '杭州乐园',
        desc: '德智体美劳全面发展的亲子日，这些地方该去看看啊，啊哈哈哈哈'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/26/26e9dc52ae2719890.water.jpg_200x200_681d0461.jpg',
        title: '天目山',
        desc: '山顶满眼彩色，此情此景醉了'
      }]
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
