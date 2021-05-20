import axios from "axios";
import cookie from "../utils/cookie";
import router from "../router"
import { ElMessage } from 'element-plus'
import setting from '../config/setting'
const baseURL = setting.baseUrl;

const service = axios.create({
    baseURL,
    timeout: 5000 // request timeout
  });

  // 发起请求之前的拦截器
service.interceptors.request.use(
    config => {
      // 如果有token 就携带tokon
      const token = cookie.get('token');
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    error => Promise.reject(error)
  );
  // 响应拦截器
  service.interceptors.response.use(
    response => {
      const res = response.data;
      if (response.status !== 200) {
        if(response.status ==401){
          cookie.remove('token')
          router.push('/login')
        }
        return Promise.reject(new Error(res.message || "Error"));
      } else {
        return res;
      }
    },
    error => {
      if(error.response.status ==401){
        ElMessage({
          message:"会话失效，请重新登录",
          type: 'error',
          onClose:()=>{
            cookie.remove('token')
            router.push('/login')
          }
        });
      }else{
        return Promise.reject(error);
      }
    }
  );
  export default service;