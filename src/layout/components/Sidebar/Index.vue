<template>
  <div class="logo-wrap">
    <img src="../../../assets/images/logo.png" />
    <span>vue3-vite管理后台</span>
  </div>
  <el-menu
    :default-active="$route.path"
    router
    class="aside-menu"
    background-color="#304156"
    text-color="rgb(244, 244, 245)"
  >
    <SidebarItem v-for="item in routerList" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup lang="ts">
  import { reactive, onMounted } from 'vue'
  import { constantRoutes } from '@/router'
  import SidebarItem from './SidebarItem.vue'
  const routerList: any[] = reactive([])
  onMounted(() => {
    filterRoutes()
  })
  const filterRoutes = () => {
    constantRoutes.forEach((item) => {
      if (item.path === '/') {
        const childrens = item.children as any[]
        routerList.push(...childrens)
      }
    })
  }
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
</style>
