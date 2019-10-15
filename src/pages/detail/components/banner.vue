<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
      <div class="banner-info">
        <div class="banner-title">北京市东城区景山前街4号</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe61d;</span>&nbsp;99
        </div>
      </div>
    </div>
    <!-- TODO: v-show="showGallary"时不行 -->
    <gallary :imgs="imgs" v-if="showGallary" @close=handleGallaryClose></gallary>
  </div>
</template>

<script>
import gallary from '@/components/gallary/gallary'
export default {
  name: 'detailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_r_800x800_4701d58f.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    gallary
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  // TODO:直接给图片写好所占空间，防止图片加载缓慢时，会先不显示后把图片后同级元素挤下去
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
    object-fit contain
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 60px
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 32px
      padding 0 20px
    .banner-number
      padding 0 20px
      margin-top 14px
      margin-right 10px
      height 32px
      line-height 32px
      border-radius 20px
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size 24px
</style>
