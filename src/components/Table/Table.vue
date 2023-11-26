<template>
  <div class="table-box">
    <el-table :data="data" border style="width: 100%">
      <slot></slot>
    </el-table>
    <!-- 封装的页码组件 -->
    <Pagination :total="data.length"/>
  </div>
</template>

<script lang="ts" setup>
import Pagination from '../Pagination/Pagination.vue'
defineProps<{
  data: any[]
}>()

</script>

<style scoped>
.table-box {
  display: flex;
  flex-direction: column;
}
.el-table {
  flex: 1;
  overflow: hidden;
}
</style>
