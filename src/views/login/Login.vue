<template>
  <div class="login">
    <!-- 导航 -->
    <my-nav-bar
      :title="isLogin ? '登录' : '注册'"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></my-nav-bar>

    <!-- 内容 -->
    <div v-if="isLogin">
      <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="verify-box">
        <Verify
          ref="verify"
          :showButton="false"
          @success="verifySuccess"
          @error="verifyFail"
          :type="2"
        ></Verify>
      </div>
      <div class="changeLoginAndReg" @click="isLogin = !isLogin">
        {{ isLogin ? "立即注册" : "已有登录账号" }}
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">{{
          isLogin ? "登录" : "注册"
        }}</van-button>
      </div>
    </van-form>
    </div>
    <div v-else>
      <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="verify-box">
        <Verify
          ref="verify"
          :showButton="false"
          @success="verifySuccess"
          @error="verifyFail"
          :type="2"
        ></Verify>
      </div>
      <div class="changeLoginAndReg" @click="isLogin = !isLogin">
        {{ isLogin ? "立即注册" : "已有登录账号" }}
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">{{
          isLogin ? "登录" : "注册"
        }}</van-button>
      </div>
    </van-form>
    </div>
  </div>
</template>

<script>
import Verify from "vue2-verify";
import md5 from "js-md5";
import { Toast, Notify, Dialog } from 'vant';
import {loginReq, registerReq} from '@/api/loginAndRegApi'

export default {
  name: "Login",
  data() {
    return {
      isLogin: true,
      username: "",
      password: "",
    };
  },
  methods: {
    // 提交
    onSubmit(values) {
      // console.log("登录submit", values);
      // console.log(md5(this.password));
      // console.log(this.$refs.verify);
      // 用户名密码校验通过后 校验验证码
      this.$refs.verify.checkCode();
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 验证码验证成功
    verifySuccess() {
      // 这个obj是一个undefined,感觉没有什么用处
      // console.log("验证成功的obj",obj);
      // 发送ajax请求
      // 判断是登录还是注册
      if (this.isLogin) {
        loginReq({
          loginName: this.username,
          passwordMd5: md5(this.password)
        }).then(data => {
          if (data.resultCode == 200) {
            // Toast("登录成功");
            // 登录成功后，存token
            // localStorage.setItem("newbeetoken",data.data);
            // this.$router.replace('/');
            // this.$router.push('/');

            // 强制刷新 这样token就可以带上了
            // window.location.href = '/';

            // 第二个方法是存到vuex中
            this.$store.commit('updateToken',data.data);
            this.$router.replace('/');
          }
        })
      } else {
        registerReq({
          loginName: this.username,
          password: this.password
        }).then(data => {
          // 注册成功
          if (data.resultCode == 200) {
            // Toast("注册成功请登录");
            Dialog.alert({
              title:"提示",
              message:"注册成功请登录",
              theme:"round-button"
            }).then(() => {
              this.isLogin = true; 
              this.username = '';
              this.password = '';
              this.$refs.verify.refresh();
            })
          } 
        })  
      }
    },
    // 验证码验证失败
    verifyFail() {
      Toast('验证码错误');
      // Notify({ type: "danger", message: "验证码错误", duration: 500 });
    }
  },
  components: {
    Verify,
  },
};
</script>

<style lang="less">
.verify-box {
  padding: 20px 25px;
  .cerify-code-panel {
    display: flex;
    justify-items: center;
    align-items: center;
    .verify-code {
      margin-right: 10px;
    }
    .verify-input-area {
      margin-right: 10px;
      height: 40px;
    }
  }
}
.changeLoginAndReg {
  display: flex;
  padding: 5px 25px;
}
</style>