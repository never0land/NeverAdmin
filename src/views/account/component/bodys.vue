<template>
  <ElCard>
    <titles :setting="dataTitleconfig"></titles>
    <ElForm :model="dataStore" ref="ruleFormRef" :rules="rules(Object.keys(dataStore))"
    hide-required-asterisk="false"
    :label-position="labelPosition" label-width="80px" >
      <ElFormItem label="账号" prop="userName" >
        <ElInput v-model="dataStore.userName" placeholder="输入账号"></ElInput>
      </ElFormItem>
      <ElFormItem label="密码" prop="userPWD">
        <ElInput
          v-model.number="dataStore.userPWD"
          placeholder="输入密码"
          type="password"
          show-password="true"
        ></ElInput>
      </ElFormItem>
    </ElForm>
    <div class="buttonGroup">
      <ElButton @click="submits(ruleFormRef)" class="btn">登录</ElButton>
    </div>
  </ElCard>
</template>
<style scoped>
:deep(.el-form-item){
    padding-bottom: 10px;
}
.title{
    font-size: 32px;
    font-weight: bold;
    text-shadow: 1px 1px #d1d2d3;
    margin-bottom: 30px;
}
.btn{
    width:12rem;
    background: rgb(232, 115, 115);
    color:#fff;
}
.buttonGroup{
    width:100%;
    display:block;
    text-align: center;
}
</style>
<script setup>
import {rules} from '../db'
import titles from '../../../components/titles.vue'
import { ElButton, ElForm, ElFormItem, ElInput,ElCard } from "element-plus";
import { reactive, ref } from "vue";
const labelPosition = ref('left')
const dataStore = reactive({
  userName: "",
  userPWD: "",
});
const dataTitleconfig = reactive({
    className:'title',
    Title:'鸿成装饰设计(广州)有限公司'
})
const ruleFormRef = ref();
const submits = async (formel) => {
  if (!formel) return;
  else {
    await formel.validate((valid, fields)=>{
        if(valid){
            console.log(1,fields,valid,rules(Object.keys(dataStore)))
        }
    })
  }
};
</script>