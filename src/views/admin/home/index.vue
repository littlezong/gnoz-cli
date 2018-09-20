<template>
  <div class="home">
    <h1>后台首页</h1>
    <router-link :to="{ name: 'home'}">
      <dy-button size="large"
        type="primary">返回官网首页</dy-button>
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
