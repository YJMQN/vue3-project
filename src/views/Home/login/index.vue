<template>
	<div class="loginPage">
		<h1 class="loginTitle">登录页</h1>
		<bgParticles :domName="particlesID"></bgParticles>
		<div class="loginContent">
			<el-form ref="formInline" class="loginForm" :model="loginForm" label-width="80px" :rules="ruleForm">
          		<el-form-item label="账号：" prop="adminemail" class="loginFormItem">
        			<el-input v-model="loginForm.adminemail" size="large" placeholder="请输入邮箱">
          				<template #prefix>
            				<i class="el-input__icon el-icon-user-solid"></i>
          				</template>
        			</el-input>
      			</el-form-item>
      			<el-form-item label="密码：" prop="password" class="loginFormItem">
        			<el-input v-model="loginForm.password" size="large" placeholder="请输入密码" type="password">
						<template #prefix>
            				<i class="el-input__icon el-icon-lock"></i>
          				</template>
					</el-input>
      			</el-form-item>
				<el-form-item >
					<el-button type="primary" @click="goLogin">登录</el-button>
				</el-form-item>
    		</el-form>
		</div>
	</div>
</template>
<script lang="ts">
import {reactive, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router"
import api from "../api/index"
import cookie from "../../../utils/cookie"
import md5 from 'crypto-js/md5';
import bgParticles from '@/components/bgParticles';
import {useHotkey} from '@/components/hotkey'

export default defineComponent({
  	name:"login",
  	setup(){
    	const loginForm = reactive({
      		adminemail: '',
      		password: '',
    	});
    	const ruleForm = reactive({
      		adminemail: [
      			{ message: '请输入邮箱地址', trigger: 'blur' },
      			{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
    		],
      		password: [{ message: '请输入密码', trigger: 'blur' }],
    	});
    	const router=useRouter();
    	const particlesID = 'login';
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
    	onMounted(()=>{
      		useHotkey([{
          		keys: [ 'Enter'],
          		preventDefault: true,
          		handler () {
    				goLogin()
          		}
        	}])
    	})
    	return{
      		loginForm,
      		ruleForm,
      		router,
      		goLogin,
      		particlesID
    	}
  	},
  	components:{
    	bgParticles
  	}
})
</script>
<style scoped>
.loginTitle{
	margin: 0 auto;
	width: 200px;
}
.loginContent{
	position: absolute;
 	left: 50%;
 	top: 50%;
	width:400px;
	height:200px;
	margin-left:-200px;
	margin-top:-100px;
}
.loginForm{
	background: #fffff5;
}
.loginFormItem{
	padding-top: 10px;
    padding-right: 20px;
}
.loginPage{
	min-height: 500px;
	min-width: 600px;
}
</style>