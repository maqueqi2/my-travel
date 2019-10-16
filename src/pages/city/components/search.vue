<template>
  <div v-cloak>
    <div class="search">
      <input v-model="keyword" class="search-ipt" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">暂无匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCityFun(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCityFun'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
    // console.log(this.$refs.search[0])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height 72px
    padding 0 10px
    background $bgColor
    .search-ipt
      font-size 24px
      box-sizing border-box
      width 100%
      height 62px
      padding 0 10px
      line-height 62px
      text-align center
      border-radius 6px
      color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 158px
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height 62px
      padding-left 20px
      color #666
      font-size 24px
      background #fff
</style>
