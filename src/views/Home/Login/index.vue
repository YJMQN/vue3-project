<template>
  <h1>登录页</h1>
    <el-form ref="formInline" :model="loginForm" label-width="80px" :rules="ruleForm">
      <el-form-item label="账号：" prop="adminemail">
        <el-input v-model="loginForm.adminemail" size="large" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="loginForm.password" size="large" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
    </el-form>
  <div>
    <button type="primary" @click="goLogin">跳转到首页</button>
  </div>
</template>
<script lang="ts">
import { ref,reactive } from "vue";
import { useRouter } from "vue-router"
import api from "../api/index"
import cookie from "../../../utils/cookie"
import md5 from 'crypto-js/md5';

export default {
  name:"login",
  setup(){
    const loginForm = reactive({
      adminemail: '',
      password: '',
    });
    const ruleForm = reactive({
      adminemail: [{ message: '请输入账号', trigger: 'blur' }],
      password: [{ message: '请输入密码', trigger: 'blur' }],
    });
    const router=useRouter();
    let www:any = window
    let ip:string = www.returnCitySN.cip
    const goLogin =()=>{
      let obj= {
        adminemail:loginForm.adminemail,
        password:md5(loginForm.password).toString(),
        loginip:ip
      }
      api.login(obj,(res:any)=>{
        if(res.data&&res.data.token){
          cookie.set('token',res.data.token)
          router.push("/index");
        }
      })
    }
    return{
      loginForm,
      ruleForm,
      router,
      goLogin
    }
  },
}
</script>