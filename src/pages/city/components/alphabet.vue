<template>
  <ul class="list">
    <li v-for="item in letters" :class="['item', {'active': nowLetter==item}]"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
      nowLetter: 'A'
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      this.nowLetter = e.target.innerText
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流操作，降低handleTouchMove的执行频率，优化代码性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 通过滑动字母表带动页面滑动
          const touchY = e.touches[0].clientY - 79 // 79位顶部城市名+搜索框高度
          const index = Math.floor((touchY - this.startY) / 20)
          console.log('滚动元素', index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            this.nowLetter = this.letters[index]
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 158px
  right 0
  bottom 0
  width 40px
  .item
    font-size 24px
    line-height 40px
    text-align center
    color $bgColor
    &.active
      background $bgColor
      color #fff
      border-radius 3px
</style>
