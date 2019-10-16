<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <!-- 递归组件 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left 6px
    top 6px
    display inline-block
    width 36px
    height 36px
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -45px no-repeat
    margin-right 10px
    background-size 40px
  .item-title
    line-height 80px
    font-size 32px
    padding 0 20px
  .item-children
    padding 0 20px
</style>
