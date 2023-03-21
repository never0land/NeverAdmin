<script setup>
import { ElMain,ElHeader,ElAside,ElContainer } from 'element-plus';
import NeverAside from './component/AsideNever.vue'
</script>
<template>
    <div>
        <ElContainer id="container">
            <ElAside id="aside" width="250px"><NeverAside /></ElAside>
            <ElContainer>
                <ElHeader id="headers" height="75px">1</ElHeader>
                <ElMain id="mains"></ElMain>
            </ElContainer>
        </ElContainer>
    </div>
</template>

<style scoped lang="scss">
#container{
    height:100vh
}
#aside{
    background-color: #77acbc;
}
#headers{
    background-color:#fff;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
}
#main{
    background-color:#bc77a1
}
</style>