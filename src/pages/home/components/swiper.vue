<template>
  <div class="wrapper">
    <!-- ref="mySwiper" @someSwiperEvent="callback"和暂时用不上 -->
    <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> -->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- prev和next控制左右箭头，此处不需要 -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 滚动条scorllbar -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 控制显示分页的操作
        pagination: '.swiper-pagination',
        // 支持循环轮播
        loop: true
      },
      swiperList: [{
        id: '1001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: '1002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 因为有scoped，所以加上 '>>>' 进行穿透
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  // 高度为宽度的31.25%
  overflow hidden
  height 0
  padding-bottom 31.25%
  background-color #eee
  // 或者,但是浏览器可能会不兼容
  // height 31.25vw
  .swiper-img
    width 100%
</style>
