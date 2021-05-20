<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
    
    }
})
</script>

<style>
    body{
        margin: 0px;
    }
    ::-webkit-scrollbar {  
        width: 5px;  /*滚动条宽度*/
        height: 5px  /*滚动条高度*/
    }  

    /*定义滚动条轨道 内阴影+圆角*/  
    ::-webkit-scrollbar-track  
    {  
        /*滚动条的背景区域的内阴影*/
        box-shadow:0px 1px 3px rgba(255,255,255,1) inset;

        /*滚动条的背景区域的圆角*/
        border-radius: 10px;  

        /*滚动条的背景颜色*/
        background-color: #ffffff;
    }  

    /*定义滑块 内阴影+圆角*/  
    ::-webkit-scrollbar-thumb  
    {  
        /*滚动条的内阴影*/
        box-shadow:0px 1px 3px rgba(0,0,0,0.3) inset;

        /*滚动条的圆角*/
        border-radius: 10px;  

        /*滚动条的背景颜色*/
        background-color: #aaa;  
    } 
</style>