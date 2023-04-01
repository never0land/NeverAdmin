<template>
    <div>
        <ElButton :loading="subConfig.loading" 
        :disabled="subConfig.disabled"
        :class="subConfig.className"
        @click="submits"
        @keydown.enter="submits"
        >{{ props.config.title }}</ElButton>
    </div>
</template>
<style>
.btn{
    width:12rem;
    background: rgb(232, 115, 115);
    color:#fff;
}
</style>
<script setup>
import {defineProps,defineEmits,watch,ref} from 'vue'
import {ElButton} from 'element-plus'
const emits = defineEmits(['btnEvent'])

let props = defineProps({
    config:{
        required:true,
        type:Object,
    }
})
let subConfig = ref(props.config)
console.log(props)
const submits = async()=>{
    emits('btnEvent')
}
watch(
    ()=>subConfig.value
,(val)=>{console.log(val,'2')},{
    immediate:true,
    deep:true
})

</script>