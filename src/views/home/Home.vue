<template>
  <div class="home">
    <home-header></home-header>

  </div>
</template>

<script>
// 请求
import { getHomeData, getCartData } from "@/api/homeApi";
// 组件
import HomeHeader from './HomeHeader.vue'

export default {
  name: "Home",
  created() {
    getHomeData().then(data => {
      console.log("首页数据",data);
      if (data.resultCode == 200) {
        
      }
    })

    // getCartData()
  },
  components: {
    HomeHeader
  },
  methods: {
    onClickLeft() {

    },
    onClickRight() {}
  }
};
</script>

<style lang="less">

</style>