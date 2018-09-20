<template>
  <div class="home">
    <h1>官网首页</h1>
    <router-link :to="{ name: 'login'}">
      <dy-button size="large"
        type="primary">跳转登录页</dy-button>
    </router-link>
    <router-link :to="{ name: 'adminHome'}">
      <dy-button size="large"
        type="primary">跳转后台首页</dy-button>
    </router-link>
  </div>
</template>

<style lang="less">
@import './index.less';
</style>

<script type="text/ecmascript-6">
export default {
  data() {
    return {}
  },
  methods: {
    // 初始化
    init: function() {
      console.log(this.$route)
    }
  },
  created() {
    this.init()
  }
}
</script>
