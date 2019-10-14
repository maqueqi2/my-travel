<template>
  <div class="list" ref="wapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wapper" @click="handleCityClick(item.name)" v-for="item in hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" @click="handleCityClick(innerItem.name)" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
// 使该区域拥有一个类似于app的滑动效果，真的很酷炫
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // 直接调用mutations
      // this.$store.commit('changeCityFun', city)
      this.changeCityFun(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCityFun'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wapper)
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      // 滚动到指定位置
      this.scroll.scrollToElement(element)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .border-topbottom
    &:before
      background #ccc
    &:after
      background #ccc
  .border-bottom
    &:before
      background #ccc
    &:after
      background #ccc
  .list
    overflow hidden
    position absolute
    top 158px
    left 0
    bottom 0
    right 0
    .title
      line-height 54px
      background #eee
      padding-left 20px
      color #666
      font-size 26px
    .button-list
      overflow hidden
      padding 10px 60px 10px 10px
      .button-wapper
        float left
        width 33.33%
        .button
          margin 10px
          padding 10px 0
          text-align center
          border 2px solid #ccc
          border-radius 6px
          font-size 24px
    .item-list
      .item
        font-size 24px
        line-height 76px
        padding-left 20px
</style>
