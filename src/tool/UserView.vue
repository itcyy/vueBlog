<template>
    <div class="app">
    <el-card class="box-card" shadow="always">
            <div><img style="width:180px;height: 180px;" src="./../assets/img/5.png"></div>
            <div><p class="text">阿诺斯·福尔迪哥德</p></div>
            <div>
            <p class="bar_text">心之所向，皆为华夏</p>
            </div>
        </el-card>
        <el-card class="box-card" shadow="always" style="height: 180px;">
                <div><p style="color: aliceblue;font-family: 华文行楷;font-size: 25px;">公告</p></div>
                <div><p style="color: white;">有问题可添加QQ咨询，QQ：2817179154</p></div>
            </el-card>
    </div>
    
</template>

<style scoped>
.app{
    display: flex;
    flex-direction: column;
    margin-left: 50px;
}
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 210px;
    margin-left: 20px;
    background-color: #3021211d;
    margin-top: 20px;
    height: 280px;
    display: flex;
    border-color:#1f1f1f;
    justify-content: space-around;
}
.text{
    font-size: 18px;
    font-family:华文行楷;
    text-align: center;
    color: white;
}
.textpo{
    font-family: 楷体;
    text-align: center;
}
.bar_text{
    font-family: 华文楷体;
    text-align: center;
    margin-top: 20px;
    color: white;
    user-select: none;
}
</style>
