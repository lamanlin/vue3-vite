<template>
  <el-container>
    <el-aside width="230px" style="background-color: #304156">
      <div class="logo-wrap">
        <img src="../assets/images/logo.png" />
        <span>vue3-vite管理后台</span>
      </div>
      <el-menu class="aside-menu" background-color="#304156" text-color="rgb(244, 244, 245)">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><component :is="'Plus'" /></el-icon><span>{{ '123' }}</span>
          </template>
          <el-menu-item index="1-1">
            <el-icon><Edit /></el-icon>
            <template #title>dfghfgghfghfgh</template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="common-header" height="56px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  // import { reactive } from 'vue'
  // const routers = reactive({
  //   showMenu: true,
  //   defaultOpen: ['1', '2', '3', '4'],
  //   currentPath: '/'
  // })
</script>

<style lang="scss" scoped>
  .logo-wrap {
    background: #2b2f3a;
    display: flex;
    align-items: center;
    height: 50px;
    img {
      margin-left: 20px;
      margin-right: 12px;
      width: 32px;
      height: 32px;
    }
    span {
      font-weight: bolder;
      color: #fff;
    }
  }

  :deep(.el-menu) {
    border-right: none;
  }
  :deep(.el-aside) {
    height: 100vh;
  }

  .common-header {
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
  }
</style>
