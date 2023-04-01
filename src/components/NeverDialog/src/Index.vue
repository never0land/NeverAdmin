<template>
  <div>
    <ElDialog v-model="schema.isShow" :title="schema.title">
      <ElForm>
        <ElFormItem label="项目名称">
            <ElInput v-model.trim="schema.projectName" placeholder="例如输入什么先生雅居"></ElInput>
        </ElFormItem>
      </ElForm>
      <div>
        <ElButton @click="aa">开始生成预算</ElButton>
      </div>
    </ElDialog>
  </div>
</template>
<script setup>
import { ElDialog, ElForm,ElFormItem,ElButton } from "element-plus";
import { defineProps, ref } from "vue";
const props = defineProps({
  config: {
    type: Object,
    default: () => {
      return {
        isShow: false,
      };
    },
  },
});
const schema = ref(props.config);
const emits = defineEmits(['pushData'])
const aa = ()=>{
    emits('pushData',schema)
}
</script>