<script setup lang="ts">
import router from '@/router'
import { Avatar, HelpFilled, SwitchButton } from '@element-plus/icons-vue'
const logoutF = () => {
  router.push('/')
}
</script>
<template>
  <el-row class="my-row" align="middle">
    <el-col :span="4" class="my-col">
      <h1>PlantOCR</h1>
    </el-col>
    <el-col :span="2.5">
      <el-dropdown>
        <el-button
          type="primary"
          :icon="Avatar"
          circle
          style="outline: none; box-shadow: 5px 4px 10px #162d81db"></el-button>
        <template #dropdown>
          <el-dropdown-item :icon="HelpFilled">Personal Center</el-dropdown-item>
          <el-dropdown-item
            :icon="SwitchButton"
            style="color: red; font-weight: bolder"
            @click="logoutF">
            Logout
          </el-dropdown-item>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<style scoped></style>
