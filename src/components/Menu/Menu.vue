<template>
  <el-menu :default-active="defaultActive" router :collapse="collapse"
    background-color="#001529" text-color="#fff"
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><document /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Document,
  Menu as IconMenu,
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

defineProps<{
  collapse?: boolean
}>()

const route = useRoute()
const path = route.path
// 第二个斜杠索引
const secondSlashIndex = route.path.indexOf('/', 1)
// 默认激活菜单
const defaultActive = computed(() => secondSlashIndex === -1 ? path : path.substring(0, secondSlashIndex))
</script>

<style scoped>
.el-menu {
  height: 100%;
}
.el-menu--vertical:not(.el-menu--collapse) {
  width: 200px;
  
}
</style>
