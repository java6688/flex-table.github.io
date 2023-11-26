<template>
  <div class="flex-box">
    <!-- 封装的筛选表单 -->
    <FilterForm />
    <!-- 封装的表格组件 -->
    <Table class="hidden" :data="tableData">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="操作">
        <el-button @click="to">查看</el-button>
      </el-table-column>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import FilterForm from '@/components/FilterForm/FilterForm.vue'
import Table from '@/components/Table/Table.vue'

const router = useRouter()

const tableData: any[] = []
for(let i = 0; i < 100; i++) {
  tableData.push({
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  })
}

const to = () => {
  router.push('/user/1')
}
</script>

<style scoped>

</style>