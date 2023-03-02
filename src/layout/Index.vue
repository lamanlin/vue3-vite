<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="230px" style="background-color: #304156">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="common-header" height="56px">
        <el-icon class="mr-2" size="20"><Expand /></el-icon>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main><RouterView></RouterView></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import Sidebar from './components/Sidebar/index.vue'
</script>

<style lang="scss" scoped>
  .common-header {
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
  }
  :deep(.el-aside) {
    height: 100vh;
  }
</style>
