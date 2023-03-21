<template>
  <div :class="prop.setting.className">{{ prop.setting.Title }}</div>
</template>
<script setup>
import { defineProps } from "vue";
const prop = defineProps({
    setting: {
    type: Object,
    default:()=>{}
  },
});
</script>
