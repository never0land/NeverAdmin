<template>
  <div class="login">
    <headers></headers>
    <bodys class="login-box"></bodys>
    <footers></footers>
  </div>
</template>
<script setup>
import footers from "./component/footer.vue";
import headers from "./component/header.vue";
import bodys from "./component/bodys.vue";
import { onMounted } from "vue";
// import axios from 'axios'
onMounted(()=>{
  // axios({
  //   method:'post',
  //   url:'/devApi/getCode/',
  //   data:{}
  // })
})
</script>
<style scoped lang="scss">
.login {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .login-box {
    min-width: 480px;
    margin: auto;
  }
}
</style>
