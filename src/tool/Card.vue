<template>
<div>
  <div v-for="(item, index) in Data" :key="index" @select="toCardbog(item.url)" style="margin-left: 50px;">
    <RouterLink :to="item.url" target="_blank">
     <el-card class="box-card" shadow="always" >
                    <template #header>
                      <div class="card-header">
                        <span style="color: white;">{{item.title}}</span>
                      </div>
                    </template>
                    <div class="text item">{{ item.data }}</div>
                    <div class="r">
                        <div class="r">
                            <div class="text "><el-icon><View style="width: 24px;height: 24px;"/></el-icon></div>
                             <div class="num">{{ item.number }}</div>
                        </div>
                        <div class="r" style="margin-left: 400px;">
                                <div class="text"><el-icon><Clock style="width: 24px;height: 24px;"/></el-icon></div>
                                 <div class="num">{{ item.time }}</div>
                        </div>
                    </div>
                  </el-card>
    </RouterLink>
                   </div>
                    <el-pagination background layout="prev, pager, next" :total="7" style="margin-top: 20px;margin-left: 45%;"/>
</div>
</template>
<script lang="ts" setup>
const toCardbog = (url : string) =>{
 
}
const Data = [{
  title: "欢迎来到德尔佐盖特",
  data: "欢迎来到德尔佐盖特",
  number: "562",
  time: "2021-10-05",
  url: "/gdufe?id=4"
},
  {
    title: "如何用Vue开发前端和网站",
    data: "如何用Vue开发前端和网站...",
    number: "463",
    time: "2022-11-05",
    url:"/article?id=1"
}, {
  title: "HarmonyOS APP 开发入门",
  data: "鸿蒙并不是一个单纯的手机操作系统...",
  number: "9313",
  time: "2022-04-13",
  url: "/article?id=2",
}, {
  title: "HarmonyOS APP Text 组件",
  data: "鸿蒙并不是一个单纯的手机操作系统...",
  number: "463",
  time: "2022-11-05",
  url: "/article?id=3"
}]

</script>
<style>
.c{
    display: flex;
    flex-direction: column;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  user-select: none;
}

.text {
  font-size: 14px;
  height: 20px;
  color: white;
  user-select: none;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 680px;
  margin-top: 20px;
  background-color: #3021211d;
  border-color: #1f1f1f;
  z-index: 33;
}
.eye-box{
    display: flex;
    flex-direction: row;
    user-select: none;
}
.num{
    margin-top: -5px;
  color: white;
  user-select: none;
}
.r{
    display: flex;
    flex-direction: row;
}
</style>