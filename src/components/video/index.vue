<template>
    <div class="top_1">
        <div class="row_f">

            <div class="card_g">
                <h1 style="font-family: 华文琥珀;">我的番剧</h1>
                <div class="r_f">
                    <div class="boxv">
                        <div class="box1"><a href="https://v.youku.com/v_show/id_XNTExMDY0Njg1Ng==.html" target="_blank"><img
                                    style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;"
                                    src="https://img2.baidu.com/it/u=4179773099,1303881595&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"></a>
                        </div>
                        <p style="text-align: center;font-size: 15px;">魔王学院 第一季</p>
                    </div>
                    <div class="boxv">
                        <div class="box1"><a href="http://www.damidm.com/player/19130-1-6.html"><img
                                    style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;"
                                    src="https://img0.baidu.com/it/u=241957050,168223708&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"></a>
                        </div>
                        <p style="text-align: center;font-size: 15px;" target="_blank">魔王学院 第二季</p>
                    </div>
                    <div class="boxv">
                            <div class="box1"><a href="https://www.bilibili.com/bangumi/play/ss26194?spm_id_from=333.337.0.0"><img
                                        style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;"
                                        src="https://p3.toutiaoimg.com/origin/pgc-image/1126c2bd83af4146b184cfe63fc7eb43?from=pc"></a>
                            </div>
                            <p style="text-align: center;font-size: 15px;" target="_blank">仙王的日常生活 第一季</p>
                        </div>
                         <div class="boxv">
                                <div class="box1"><a href="https://www.bilibili.com/bangumi/play/ss35201?spm_id_from=333.337.0.0"><img
                                            style="opacity: 0.5;width: 210px;height: 140px;border-radius: 10px;z-index: 1;"
                                            src="https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rPqiaaP682T1U90yoWoP9SVpS60Rv2vLkkg/0.jpg"></a>
                                </div>
                                <p style="text-align: center;font-size: 15px;" target="_blank">仙王的日常生活 第二季</p>
                            </div>
                </div>
              
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
const components = { name: "Friends" }
var text = "1"
const open = (str: string) => {
    text = str
    ElMessage(str)
}
</script>
<style>
.box1 {
    border-radius: 10px;
    width: 100%;
    height: 160px;

}

.urlText {
    font-size: 13px;
    color: #fff;
}

.v1 {
    display: none;
}

.v2:hover+div {
    display: block;
}

.boxv {
    border-radius: 10px;
    width: 210px;
    height: 160px;
    margin-left: 20px;
}

.top_1 {
    position: relative;

    top: 80px;

}

.row_f {
    display: flex;
    flex-direction: column;
    width: 1200px;
    border-radius: 8px;

}

.r_f {
    display: flex;
    flex-direction: row;
}

.card_Bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.card_g {
    height: 900px;
    background-color: #00000000;
    width: 100%;
    margin-top: 30px;
}

.len_g {
    height: 40px;
    margin-top: 20px;
    border-radius: 30px;
    width: 350px;
    background-color: #3316161a;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.text_dogg {
    color: white;
    text-align: center;
    user-select: none;
    font-size: 25px;
}</style>