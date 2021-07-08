<template>
  <!-- 
  vm.$attrs
    类型：{ [key: string]: string }
    包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

    v-bind="$attrs" 是接收除了props以外的 
    将第三方组件的参数全部传过去，并且传的时候，我们自己传一些自己封装的这个组件的需要的参数
    来使用，使用的第三方的也给它传了。

  vm.$listeners
    类型：{ [key: string]: Function | Array<Function> }
    包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
 -->
  <!-- <div class="my-nav-bar-box"> -->
  <van-nav-bar v-bind="$attrs" v-on="$listeners">
    <template #right>
      <!-- <van-icon name="search" size="18" /> -->
    </template>
    <template #left>
      <!-- <div></div> -->
    </template>
  </van-nav-bar>
  <!-- </div> -->
</template>

<script>
export default {
  name: "MyNavBar",
  props: {
    qqq: String,
  },
  created() {
    console.log(this.qqq);
  },
};
</script>

<style lang="less" scoped>
</style>