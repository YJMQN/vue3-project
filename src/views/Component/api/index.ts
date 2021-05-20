import method from '@/api'

export default {
    uploadFile:(params:Object,callback:any)=>{
        method.postMethod("/api/qnUpload",params).then(res=>{
            callback(res)
        })
    },
    getBanner:(params:Object,callback:any)=>{
        method.postMethod("/admin/api/getBanner",params).then(res=>{
            callback(res)
        })
    },
}