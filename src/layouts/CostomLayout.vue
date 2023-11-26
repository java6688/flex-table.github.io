<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #D9ECFF;
}
.el-header {
  background-color: #C6E2FF;
}
.el-main {
  background-color: #ECF5FF;
}
</style>