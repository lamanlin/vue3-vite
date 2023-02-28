<template>
  <div class="login-bg-box">
    <div
      class="login-container"
      :style="{
        boxShadow: `var(--el-box-shadow)`
      }"
    >
      <h3>管理系统</h3>
      <el-form ref="ruleForm" :model="form">
        <el-form-item
          label="账号"
          prop="email"
          :rules="{ required: true, message: '请输入账号', trigger: 'change' }"
        >
          <el-input v-model="form.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
          :rules="{ required: true, message: '请输入密码', trigger: 'change' }"
        >
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  const form = reactive({
    account: '',
    password: ''
  })

  const onSubmit = () => {
    console.log('submit!')
  }
</script>

<style lang="scss" scoped>
  .login-bg-box {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .login-container {
      width: 320px;
      height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
