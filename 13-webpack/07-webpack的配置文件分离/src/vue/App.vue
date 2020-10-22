<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <!-- 使用Cpn组件 -->
    <Cpn/>
  </div>
</template>

<script type="text/ecmascript-6">
import Cpn from './Cpn.vue'
export default {
  name: "App",
  data() {
      return {
        message: "hello webpack",
        name: "bbb"
      };
    },
    methods: {
      btnClick() {
        console.log('按钮被点击');
      }
    },
    components: {
      Cpn//注册Cpn组件
    }
};
</script>

<style scoped>
.title {
  color: green;
}
</style>