<template>
  <el-container>
    <el-aside width="auto">
      <div class="menu">
        <Menu :collapse="collapse"></Menu>
      </div>
      <el-button class="switch-btn" :icon="collapse ? ArrowRightBold : ArrowLeftBold"
        @click="collapse = !collapse"
      />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import Menu from '@/components/Menu/Menu.vue'

const collapse = ref(false)
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
}
.el-aside {
  display: flex;
  flex-direction: column;
  .menu {
    flex: 1;
  }
}
.el-main {
  background-color: #F4F7F9;
}
.switch-btn {
  width: 100%;
  padding: 20px 0;
}
</style>