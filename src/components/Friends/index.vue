<template>
    <div class="top_1">
      <div class="row_f"> 

        <div class="card_g">
            <h1 style="font-family: 华文琥珀;">友情链接</h1>
            <h2 style="font-family: 华文琥珀;margin-top: 20px;margin-bottom: 20px;">框架(1)</h2>
     
            <div class="boxv">
                <div class="box1 v2"><a href="https://cn.vuejs.org/" target="_blank"><img style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;" src="https://img2.baidu.com/it/u=2167395474,3773933499&fm=253&fmt=auto&app=138&f=PNG?w=1018&h=500" ></a>
               </div>
               <p style="text-align: center;font-size: 15px;">Vue3</p>
            </div>
            <h2 style="font-family: 华文琥珀;margin-top: 20px;margin-bottom: 20px;">推荐博客(2)</h2>
            <div class="r_f">
                 <div class="boxv">
                        <div class="box1"><a href="https://www.itcyy.cn" target="_blank"><img style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;" src="https://img1.baidu.com/it/u=731412532,1390130133&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" ></a>
                       </div>
                       <p style="text-align: center;font-size: 15px;">德尔佐盖特</p>
                    </div>
                    <div class="boxv">
                            <div class="box1"><a href="https://miaoyoh.github.io/" target="_blank"><img style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;" src="https://i.postimg.cc/NM6JZhJh/QQ-20230318213213.png" ></a>
                           </div>
                           <p style="text-align: center;font-size: 15px;" target="_blank">Winghau's Blog</p>
                        </div>
            </div>
        <h2 style="font-family: 华文琥珀;margin-top: 20px;margin-bottom: 20px;">我的友链</h2>
        <div >
            <MdEditor v-model="text1" previewOnly :previewTheme="theme" style="padding: 20px 20px 20px 20px;background-color: #55000000;"/>
        </div>
        </div>
      </div>
    </div>

</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import data from "../../static/friends.md?raw"
const theme = "mk-cute"
const text1 = data
const components = {name: "Friends"}
var text = "1"

</script>
<style>
.box1{
    border-radius: 10px;
    width: 100%;
    height: 160px;
}
.urlText{
    font-size:13px;
    color: #fff;
}
.v1{
    display: none;
}
.v2:hover+div{
    display: block;
}
.boxv{
    border-radius: 10px;
    width: 210px;
    height: 160px;
    margin-left: 20px;
}
.top_1{
  position: relative;

  top: 80px;

}
.row_f{
    display: flex;
    flex-direction: column;
    width: 1200px;
    border-radius: 8px;

}
.r_f{
    display: flex;
    flex-direction: row;
}
.card_Bar{
     display: flex;
    justify-content: space-around;
    align-items: center;
}
.card_g{
    height: 900px;
    background-color: #00000000;
     width: 100%;
     margin-top: 30px;
}
.len_g{
    height: 40px;
    margin-top: 20px;
    border-radius: 30px;
    width: 350px;
    background-color: #3316161a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
.text_dogg{
    color: white;
    text-align: center;
    user-select: none;
    font-size: 25px;
}
</style>