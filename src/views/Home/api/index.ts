import method from '@/api'

export default {
    login:(params:Object,callback:any)=>{
        method.postMethod("/admin/api/login",params).then(res=>{
            callback(res)
        })
    },
    getConfig:(params:Object,callback:any)=>{
        method.getMethod("/api/config",params).then(res=>{
            callback(res)
        })
    },
}