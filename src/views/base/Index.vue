<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '../../components/common/tabBar/TabBar.vue'

export default {
  name: "Index",
  components: {
    "tab-bar": TabBar
  }
}
</script>

<style lang="less" scoped>

</style>