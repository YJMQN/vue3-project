<template>
  <h1>登录页</h1>
    <el-input v-model="input1" placeholder="请输入内容"></el-input>
    <el-input v-model="input2" placeholder="请输入内容"></el-input>
  <div>
    <button type="primary" @click="goLogin">跳转到首页</button>
  </div>
</template>
<script lang="ts">
import { ref,defineComponent } from "vue";
import { useRouter } from "vue-router"
import api from "../../../api"
import cookie from "../../../utils/cookie"

export default defineComponent({
  name:"login",
  data(){
    return {
      input1:ref(''),
      input2:ref(''),
      router:useRouter(),
    }
  },
  methods:{
    goLogin(){
      let _this = this;
      api.postMethod("/user/api/login",{
        useremail:'1127986903@qq.com',
        password:'admin'
      }).then(res=>{
        if(res.data&&res.data.token){
          cookie.set('token',res.data.token)
          _this.router.push("/");
        }
        console.log(res);
      })
      
    }
  },
})


</script>