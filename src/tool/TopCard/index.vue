<template>
    <div class="row">
        <div class="topCard card1" ></div>
        <div class="topCard card2" ><div></div></div>
        
    </div>
    
</template>


<script setup lang="ts">



</script>
<style>
.topCard{
    border-radius: 10px;
    height: 190px;
    width: auto;
    background-color: #3021211d;
    border-color: #1f1f1f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
    

.row{
    display: flex;
    flex-direction: row;
}
.column{
    display: flex;
 
}
.card1{
    flex:5;
    text-align: center;
}
.card2{
    flex:4;
    margin-left: 20px;
  
}
</style>