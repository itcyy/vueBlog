<template>
    <div class="top">
       <div class="leng">
       
           <topNew></topNew>
        <div class="tar">
          <div class="tar2">
           
            <Card></Card>
          </div>
            
            <UserCard></UserCard>
        </div>
          
      
    </div>
      
       
      
    </div>
    
</template>
<script setup lang='ts'>
import Card from "../tool/Card.vue"

import UserCard from "../tool/UserView.vue"
import topNew from '../components/topNew/topNew.vue'
import topCard from '../tool/TopCard/index.vue'



  



</script>
<style>
.leng{
  width:  1200px;
}
.tar{
  display: flex;
  flex-direction: row;
}
.tar2{
   display: flex;
  flex-direction: column;
}
.top{
  position: relative;
  top: 80px;
  

}
</style>