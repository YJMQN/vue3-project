<template>
    <el-container class="conClass" :style="containerStyle">
        <el-header style="width:100%;">
            <customHeader></customHeader>
        </el-header>
        <el-container>
            <el-aside width="200px" style="background-color: rgb(0,0,0)">
                <customMenu></customMenu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts">
import {defineAsyncComponent, reactive, onMounted} from "vue";
import customHeader from './header/index.vue'

const customMenu = defineAsyncComponent(()=>import('./menu/index.vue'))

export default {
    name:"index",
    components:{
        customMenu,
        customHeader
    },
    setup(){
        let domHei = document.documentElement.clientHeight;
        let containerStyle:any = reactive({
            height:domHei + 'px',
        });
        onMounted(()=>{
            window.onresize = ()=>{
                domHei = document.documentElement.clientHeight;
                containerStyle.height = domHei + 'px'
            }
        });
        return {
            domHei,
            containerStyle
        }
    },
}
</script>
<style scoped>
.conClass{
    min-width: 800px;
    min-height: 600px;
}
.el-header {
    background-color: #1E90FF;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
  
</style>
