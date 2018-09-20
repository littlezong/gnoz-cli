<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="login_banner">
          <img width="100%"
            src="./images/login_bg.jpg" />
        </div>
        <div class="login_container">
          <h3 class="login-title">道一云微服务框架</h3>
          <div class="form_item">
            <input v-model="userName"
              placeholder="账号" />
          </div>
          <div class="form_item">
            <input v-model="passwd"
              type="password"
              placeholder="密码" />
          </div>
          <div class="form_button">
            <dy-button size="large"
              type="primary"
              @click="submit()">登录</dy-button>
          </div>
        </div>
        <footer>
          <p>广东道一信息技术股份有限公司版权所有</p>
        </footer>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style lang="less">
@import './index.less';
</style>

<script type="text/ecmascript-6">
import md5 from 'js-md5'
import { authApi } from '@/api/api' // 引入API
export default {
  data() {
    return {
      userName: '', // 账户名
      passwd: '' // 密码
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 初始化
    init: function() {},
    submit() {
      let self = this
      let params = {
        userName: self.userName,
        password: md5(self.passwd)
      }
      // api接口接口示例:
      authApi.login(params).then(response => {
        console.log(response)
        // 判断登录成功进入后台首页
        self.$router.push({
          name: 'adminHome'
        })
      })
    }
  }
}
</script>
