<template>
  <div class="login">login
    <dy-button type="primary">button</dy-button>
    <el-button type="primary">button</el-button>
  </div>
</template>

<style lang="less">
@import '../login/index';
</style>

<script type="text/ecmascript-6">
import { authApi } from '@/api/api' // 引入API
export default {
  data() {
    // 变量定义
    return {}
  },
  methods: {
    // 函数定义
    // 初始化
    init: function() {}
  },
  beforeCreate: function() {
    // 创建前
  },
  created: function() {
    // 创建后
  },
  beforeMount: function() {
    // 挂载前
  },
  mounted: function() {
    this.init() // 初始化
    if (window.location.host === '119.29.247.167:8084') {
      this.limits = true
    }
  },
  computed: {
    // 计算数据
  },
  watch: {
    // 观察
  }
}
</script>
