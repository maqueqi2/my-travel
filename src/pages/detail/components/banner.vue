<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">北京市东城区景山前街4号</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe61d;</span>&nbsp;{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <!-- TODO: v-show="showGallary"时不行 -->
    <gallary :imgs="gallaryImgs" v-if="showGallary" @close=handleGallaryClose></gallary>
  </div>
</template>

<script>
import gallary from '@/components/gallary/gallary'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
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
