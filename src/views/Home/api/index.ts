import method from '@/api'
import axios from "axios";
let baseURL = "http://127.0.0.1:3001";
const service = axios.create({
    baseURL,
    timeout: 5000, // request timeout
    headers:{'Content-Type':'multipartform-data'}
  });
function postMe(url:string,params:object){
    return service({
        url:url,
        method:'post',
        data:params,

    })
}

export default {
    login:(params:Object,callback:any)=>{
        method.postMethod("/admin/api/login",params).then(res=>{
            callback(res)
        })
    },
    uploadFile:(params:Object,callback:any)=>{
        method.postMethod("/api/upload",params).then(res=>{
            callback(res)
        })
    },
    test:(params:Object,callback:any)=>{
        method.postMethod("/api/test",params).then(res=>{
            callback(res)
        })
    },
    test1:(params:Object,callback:any)=>{
        method.postMethod("/admin/api/test",params).then(res=>{
            callback(res)
        })
    },
}