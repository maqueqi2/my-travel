<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observerParents: true, // 修改swiper的父元素时，自动初始化swiper
        observer: true // 修改swiper自己或子元素时，自动初始化swiper
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wapper
    height 0
    width 100%
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -60px
</style>
