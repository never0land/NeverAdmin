<template>
  <ElCard>
    <titles :setting="dataTitleconfig"></titles>
    <ElForm :model="dataStore" ref="ruleFormRef" :rules="rules(Object.keys(dataStore))"
    :hide-required-asterisk="false"
    :label-position="labelPosition" label-width="80px" >
      <ElFormItem label="账号" prop="userName" >
        <ElInput v-model="dataStore.userName" placeholder="输入账号"></ElInput>
      </ElFormItem>
      <ElFormItem label="密码" prop="userPWD">
        <ElInput
          v-model.number="dataStore.userPWD"
          placeholder="输入密码"
          type="password"
          :show-password="true"
        ></ElInput>
      </ElFormItem>
    </ElForm>
    <div class="buttonGroup">
      <NeverBTN @btn-event="submits(ruleFormRef)" :config="pageSetting.btn"></NeverBTN>
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

.buttonGroup{
    width:100%;
    display:block;
    text-align: center;
}
</style>
<script setup>
import {rules,pageSetting} from '../db'
import { useRouter } from 'vue-router';
import {login} from '../../../api/login/Index'
import titles from '../../../components/titles.vue'
import NeverBTN from '../../../components/NeverButton/src/Index.vue'
import { ElForm, ElFormItem, ElInput,ElCard } from "element-plus";
import { reactive, ref } from "vue";
const labelPosition = ref('left')
const router = useRouter()
const dataStore = reactive({
  userName: "",
  userPWD: "",
});
const dataTitleconfig = reactive({
    className:'title',
    Title:'鸿成装饰设计(广州)有限公司'
})
pageSetting.btn.className = 'btn'
const ruleFormRef = ref();
const submits = async (formel) => {
  if (!formel) return;
  else {
    await formel.validate(async(valid)=>{
        if(valid){
          pageSetting.btn.loading=!pageSetting.btn.loading
          const res = await login(dataStore)
          pageSetting.btn.loading=!pageSetting.btn.loading
          console.log(res)
          // setTimeout(() => {
          //   pageSetting.btn.loading=!pageSetting.btn.loading
            router.push('/home')
          // }, 3000);
      
        }
    })
  }
};
</script>