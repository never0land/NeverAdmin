<template>
  <div>
    <NeverDialog :config="DialogConfig" @push-data="getData"></NeverDialog>
    <NeverTable :table-setting="config">
      <div>
        <ElButton type="primary" @click="exportwords">生成预算</ElButton>
      </div>
      <template #buttonGroup>
        <div class="buttonGroup">
          <ElButton @click="Add" type="waring">新增</ElButton>
        </div>
      </template>
    </NeverTable>
  </div>
</template>
<script setup>
import NeverDialog from "../../components/NeverDialog/src/Index.vue";
import NeverTable from "../../components/NeverTable/src/Index.vue";
import { exportWord } from "../../utils/word";
import { data } from "./db";
import { ElButton, ElMessage } from "element-plus";
import { reactive, onMounted } from "vue";
const DialogConfig = reactive({
  isShow: false,
  title: "新建预算",
});
const config = reactive({
  useSearch: false,
  useOrderNumer: true,
  useAction: true,
  tableData: [],
  projectName: "",
  tableColumn: [],
});
config.tableColumn = data;
const Add = () => {
  config.tableData.push({
    name: "余泥杂物外运",
    unit: "车",
  });
};

const getData = (Obj) => {
  if (!Obj.value.projectName) return;
  config.projectName = Obj.value.projectName;
  DialogConfig.isShow = !DialogConfig.isShow;
};
const exportwords = async () => {
  await exportWord(
    {
      projectName: config.projectName,
      demolish: config.tableData,
    },
    config.projectName
  );
};

onMounted(() => {
  DialogConfig.isShow = !DialogConfig.isShow;
});
</script>