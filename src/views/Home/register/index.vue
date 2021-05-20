<template>
    <h1>注册页</h1>
    <div>
        <el-form ref="formInline" :model="registerForm" label-width="80px" :rules="ruleForm">
            <el-form-item label="用户名：" prop="adminName">
                <el-input v-model="registerForm.adminName" size="large" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="账号：" prop="email">
                <el-input v-model="registerForm.email" size="large" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="registerForm.password" size="large" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
        </el-form>
    </div>
    <div>
        <el-button type="primary" @click="goRegister">已有账号，请登录</el-button>
        <el-button type="primary" @click="goRegister">注册并跳转</el-button>
    </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router"
import api from "../api/index"

export default {
    name:"login",
    setup(){
        const registerForm = reactive({
            adminName: '',
            email:'',
            password: '',
        });
        const ruleForm = reactive({
            adminName:[],
            email:[],
            password:[],
        });
        const router=useRouter();
        let www:any = window
        let ip:string = www.returnCitySN.cip
        const goRegister =()=>{
            let obj= {
                adminName:registerForm.adminName,
                password:registerForm.password,
                email:registerForm.email,
                createdIP:ip,
                role:2,
            }
            api.register(obj,(res:any)=>{
                router.push("/login");
            })
        }
        return{
            registerForm,
            ruleForm,
            router,
            goRegister
        }
    },
}
</script>