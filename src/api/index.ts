import service from "./config"

function formData(param:any) {
    let search = "?";
    let keyArr = Object.keys(param);
    keyArr.forEach((item, index) => {
      search += item + "=" + param[item];
      if (index < keyArr.length - 1) {
        search += "&";
      }
    });
    return search;
};
function postMethod(url:string,params:object){
    return service({
        url:url,
        method:'post',
        data:params
    })
}
function getMethod(url:string,params:object){
    return service({
        url:url+formData(params),
        method:'get',
    })
}

export default {postMethod,getMethod}