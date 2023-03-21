<!-- <style scoped lang="scss">
.logo{
  margin:20px auto;
  border-bottom:1px solid #2d4153;
  max-height: 55px;
  overflow: hidden;
  img{
    margin: auto;
    min-height: 1px;
  }
}
</style> -->
<script setup>
import { useRouter } from "vue-router";
import { ElMenu, ElMenuItem } from "element-plus";
import {reactive} from 'vue'
const { options } = useRouter();
let routerList = reactive([])
options.routes.forEach(item=>{
    if(item.hidden===false){
        routerList.push(item)
    }
});
</script>
<template>
  <div>
    <div >
      <!-- <h1 class="logo"> -->
        <el-avatar class="logo">鸿成装饰</el-avatar>
        <!-- <ElImage
        :fit="scale-down"
        alt="鸿成装饰设计有限公司" :src="'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'"></ElImage> -->
      <!-- </h1> -->
    </div>
    <ElMenu
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <template v-for="item in routerList" :key="item.path">  
        <div v-if="item.children">
        <ElMenuItem :index="item.children[0].path">
        {{ item.meta&&item.meta.title }}
        </ElMenuItem>
        </div>
        <div v-else>
            <ElMenuItem :index="item.path">
            {{ item.meta&&item.meta.title }}
            </ElMenuItem>
        </div>

   
                <!-- <ElMenuItem :index="item.children.path" v-if=" item.children&&item.meta&&!item.meta.hiden">
                <template #title>{{ item.meta&&item.meta.title }}</template>
                </ElMenuItem> -->
                <!-- <ElMenuItem :index="" -->
            </template>
    </ElMenu>
  </div>
</template>

