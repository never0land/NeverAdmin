<template>
    <div v-bind="$attrs">
    <ElForm v-if="props.tableSetting.useSearch">
    <ElFormItem>aa</ElFormItem>
    </ElForm>
    <slot></slot>
    <ElTable :data="testData">
        <ElTableColumn v-if="props.tableSetting.useOrderNumer" type="index" width="30" /> 
        <template v-for="item in props.tableSetting.tableColumn" :key="item">
            <ElTableColumn :prop="item.field" :label="item.label" v-bind="$attrs" :width="item.width">
            <template #default="{ row,$index }" v-if="item.edit" >
                <ElInputNumber v-model="row[item.field]" @change="test(row,$index)" min="0"></ElInputNumber>
            </template>
            </ElTableColumn>
        </template>
        <ElTableColumn v-if="props.tableSetting.useAction" label="操作">
            <template #default="{$index}">
                <div>
            <ElButton @click="del($index)">删除</ElButton>
        </div>
            </template>
        </ElTableColumn>
    </ElTable>
    <slot name="buttonGroup"></slot>      
    </div>
</template>
<script setup>
import {ElTable,ElTableColumn,ElForm,ElFormItem,ElButton} from 'element-plus'
import { defineProps,reactive } from 'vue';
const props = defineProps({
    tableSetting:{
        type:Object,
        required:true
    }
})
const test = (Obj)=>{
    Obj['manMadeMoney'] = Obj['num']*Obj['manMade']
    Obj['materialMoney'] = Obj['num']*Obj['material']
    Obj['mainMoney'] = ( Obj['materialMoney']+Obj['manMadeMoney']).toFixed(2)
}
const testData = reactive(props.tableSetting.tableData)
const del = (index)=>{
    testData.splice(index,1)
}
</script>