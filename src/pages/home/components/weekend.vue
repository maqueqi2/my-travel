<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- border-bottom是为了使用先前引入的1像素边框 -->
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapp">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢京城周末撒欢京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！在帝都过周末，不仅仅是城中游！'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        title: '京城溜娃必去',
        desc: '德智体美劳全面发展的亲子日，这些地方该去看看啊，啊哈哈哈哈'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
        title: '登高望远秋色佳',
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
    background #eee
    text-indent 20px
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding 10px
    .item-title
      line-height 54px
      font-size 32px
      ellipsis()
    .item-desc
      line-height 40px
      color #ccc
      ellipsis()
</style>
