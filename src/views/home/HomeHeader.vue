<template>
  <div class="home-header">
    <!-- <div class="left-box" @click='$router.push("./list")'>左边</div> -->
    <!-- <div class="center-box" @click='$router.push("./search")'>中间</div> -->
    <!-- <div class="right-box" @click='$router.push("./user")'>右边</div> -->

    <div class="left-box">
      <router-link tag="div" to="./category">
        左边
      </router-link>
    </div>
    <div class="center-box">
      <router-link tag="div" to="./search">
        中间
      </router-link>
    </div>
    <div class="right-box">
      <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录
      </router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o"></van-icon>
      </router-link>
    </div>
    
      <!-- <div class="header-search">
            <span class="app-name">新蜂商城</span>
            <i class="iconfont icon-search"></i>
            <router-link tag="span" class="search-title" to="./product-list?from=home">山河无恙，人间皆安</router-link>
        </div>
        <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录
        </router-link>
        <router-link class="login" tag="span" to="./user" v-else>
          <van-icon name="manager-o"></van-icon>
        </router-link> -->
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .home-header {
    position: fixed;
    display: flex;
    top:0;
    left: 0;
    width: 100%;
    height: 128px;
    font-size: 37.5px;
    align-items: center;
    background-color: salmon;
    .left-box {
      width: 25%;
    }
    .center-box {
      flex: 1;
    }
    .right-box {
      width: 25%;
    }
  }
</style>