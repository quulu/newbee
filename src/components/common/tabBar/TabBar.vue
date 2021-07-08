<template>
  <div class="tab-bar">
    <!-- <router-link to="/" tag="div"> 转成div标签，不是a标签-->  
    <router-link to="/">
      <div class="iconfont icon-home"></div>
      <div class="title">首页</div>
    </router-link>
    <router-link to="/category">
      <div class="iconfont icon-category"></div>
      <div class="title">分类</div>
    </router-link>
    <router-link to="/cart">
      <div class="iconfont icon-cart"></div>
      <div class="title">购物车</div>
    </router-link>
    <router-link to="/user">
      <div class="iconfont icon-user"></div>
      <div class="title">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    height: 98px;
    width: 100%;

    display: flex;
    align-items: center;
    a {
      display: block;
      flex: 1;
      color: #333;
      .iconfont {
        font-size: 40px;
      }
      .title {
        font-size: 30px;
      }
      &.router-link-exact-active {
        color: red;
      }
    }
  }
</style>