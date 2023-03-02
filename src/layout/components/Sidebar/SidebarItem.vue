<template>
  <el-menu-item v-if="!route.children || !route.children.length" :index="route.path">
    <template #title>
      <el-icon><component :is="route.meta.icon" /></el-icon><span>{{ route.meta.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else :index="route.path">
    <template #title>
      <el-icon><component :is="route.meta.icon" /></el-icon><span>{{ route.meta.title }}</span>
    </template>
    <div v-for="child in route.children" :key="child.path">
      <SidebarItem
        v-if="child.children && child.children.length"
        :key="child.path"
        :index="child.path"
        :route="child"
      />
      <el-menu-item v-else :index="child.path">
        <template #title>
          <el-icon><component :is="child.meta.icon" /></el-icon>
          <span>{{ child.meta.title }}</span>
        </template>
      </el-menu-item>
    </div>
  </el-sub-menu>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'
  const props = defineProps({
    route: {
      type: Object,
      required: true
    }
  })
  toRefs(props)
</script>

<style lang="scss" scoped></style>
