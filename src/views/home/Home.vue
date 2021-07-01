<template>
  <div class="home">
    <my-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      qqq = "qqq"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></my-nav-bar>
  </div>
</template>

<script>
// 请求
import { getHomeData, getCartData } from "@/api/homeApi";

export default {
  name: "Home",
  created() {
    // getHomeData(),
    // getCartData()
  },
  components: {},
  methods: {
    onClickLeft() {

    },
    onClickRight() {}
  }
};
</script>

<style lang="less">
</style>