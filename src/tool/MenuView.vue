<template>
    <el-menu :default-active="activeIndex2" 
    mode="horizontal" 
    router
    background-color="#000000"
    text-color="#fff" 
    active-text-color="#ffd04b"
    style="height: 70px;position: fixed;top:0;left:0;right: 0px;bottom: 20px;z-index:99;">
      <el-menu-item  style="margin-left: 15rem;font-family: Brush Script MT;font-size: 28px;">CYBlogView</el-menu-item>
        <el-menu-item index="/" style="margin-left: 5rem;font-size: 25px;font-family: 华文行楷;">首页</el-menu-item>
       <el-menu-item index="/Friends" style="font-size: 25px;font-family: 华文行楷;" >友链</el-menu-item>
       <el-menu-item index="/bilibili/vedio" style="font-size: 25px;font-family: 华文行楷;">追番</el-menu-item>
        <el-menu-item index="/more" style="font-size: 25px;font-family: 华文行楷;">更多</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const RouterMenu = {}
const activeIndex = ref('1')
const activeIndex2 = ref('1')


</script>
<style>
.el-menu–horizontal>.el-menu-item.is-active{
border: transparent !important;
}
</style>