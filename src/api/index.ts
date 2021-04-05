import service from "./config"

function postMethod(url:string,params:object){
    return service({
        url:url,
        method:'post',
        data:params
    })
}

export default {postMethod}