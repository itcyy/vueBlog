<template>
    <div id="md">

        <div class="tarmd">
            <MdEditor v-model="text" previewOnly :previewTheme="theme"
                style="padding: 20px 20px 20px 20px;background-color: #55000000;border-radius: 20px;" />
                <UserView></UserView>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import UserView from '../../tool/UserView.vue'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {setmd} from "../../static/index.ts"
const router = useRouter();
let fileid = router.currentRoute.value.query.id
console.log(fileid)
const File = ''
const theme = "mk-cute"
const text = setmd(fileid)
</script>
<style>
#md {
    width: 1200px;
    position: relative;
    top: 80px;
}
.tarmd{
    display: flex;
    flex-direction: row;

}
img > p{
    width: 200%;
    height: 200%;
}
</style>