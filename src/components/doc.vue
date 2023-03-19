<template>
  <div id="md">
    <div>
      <MdEditor v-model="text" previewOnly :previewTheme="theme" style="padding: 20px 20px 20px 20px;background-color: #55000000;"/>
    </div>
    
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import data from "./index.md?raw"
const theme = "mk-cute"
const text = data
</script>
<style>
#md{
   width:  1200px;
   height: 800px;
   position: relative;
   top:80px;
}

</style>