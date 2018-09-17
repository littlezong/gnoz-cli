<template>
  <div>
    <div class="error_page">
      <div class="error_inner">
        <em>404</em>
        <ul>
          <li>你所查看的页面无法浏览或已经不存在</li>
          <li>输入的地址不正确</li>
          <li>页面重定义或者程序出错</li>
        </ul>
        <div class='error_bth'>
          <span>{{countdown}}</span> 秒之后~
          <router-link :to="{ path: '/index'}">返回首页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import './error';
</style>
<script type="text/ecmascript-6">
export default {
  data() {
    // 变量定义
    return {
      countdown: 5, // 倒计时
      times: null
    }
  },
  methods: {
    // 函数定义
    init: function() {
      let self = this
      self.times = setInterval(function() {
        if (self.countdown !== 1) {
          self.countdown--
        } else {
          // 返回首页
          self.$router.push({
            name: 'index'
          })
        }
      }, 1000)
    }
  },
  mounted: function() {
    // 挂载后
    this.init()
  },
  destroyed() {
    // 离开
    clearInterval(this.times) // 关闭定时器
  }
}
</script>
