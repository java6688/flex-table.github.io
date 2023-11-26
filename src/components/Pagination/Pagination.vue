<template>
  <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[3, 5, 10, 100]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const currentPage4 = ref(1)
const pageSize4 = ref(20)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.el-pagination {
  padding-top: 5px;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
