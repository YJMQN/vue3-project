import method from '@/api'

export default {
    uploadFile:(params:Object,callback:any)=>{
        method.postMethod("/api/upload",params).then(res=>{
            callback(res)
        })
    },
}