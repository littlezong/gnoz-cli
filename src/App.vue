<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
/* 引入公共样式 */
@import '~@/assets/style/common/common';
/* 引入字体库 */
@import '~@/assets/icon/iconfont';
@import '~@/assets/style/common/color';
</style>

<script type="text/ecmascript-6">
export default {
  name: 'App',
  data() {
    // 变量定义
    return {
      test: 'AppData'
    }
  },
  mounted: function() {
    // 挂载后
    // document.body.className = 'theme-default'
  },
  watch: {
    // 观察
  }
}
</script>
