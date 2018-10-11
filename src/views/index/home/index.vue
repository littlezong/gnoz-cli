<template>
  <div class="home">
    <div class="home-logo">
      <img src="@/assets/images/login_logo.png" />
    </div>
      <h1>官网首页</h1>
      <div class="home-content">
        <p>
          <router-link :to="{ name: 'adminHome'}">跳转后台首页
          </router-link>
        </p>
      </div>
      <h1>换肤功能</h1>
      <div class="home-content">
        <ThemePicker></ThemePicker>
      </div>
    </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script type="text/ecmascript-6">
import ThemePicker from '@/theme/ThemePicker'
export default {
  components: {
    ThemePicker
  },
  data() {
    return {}
  },
  methods: {
    // 初始化
    init: function() {}
  },
  created() {
    this.init()
  }
}
</script>
