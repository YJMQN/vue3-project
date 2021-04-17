<template>
<el-container class="conClass" :style="containerStyle">
  <el-header style="width:100%;">
      <customHeader></customHeader>
    </el-header>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <customMenu></customMenu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script lang="ts">
import {ref, reactive, onMounted, watchEffect } from "vue";
import customMenu from "./menu/index.vue"
import customHeader from "./header/index.vue"
import { useRouter,useRoute } from "vue-router"
import api from "../../api"
import cookie from "../../utils/cookie"

export default {
  name:"index",
  components:{
    customMenu,
    customHeader
  },
  setup(){
    const route = useRoute();
    let domHei = ref(document.documentElement.clientHeight);
    let containerStyle:any = reactive({
      height:domHei + 'px',
    });
    onMounted(()=>{
      console.log(route.path);
      window.onresize = ()=>{
        domHei =ref(document.documentElement.clientHeight);
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
  border: 1px solid #eee;
  min-width: 800px;
  min-height: 600px;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  
</style>
