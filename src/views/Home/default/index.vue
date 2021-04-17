<template>
  <span>欢迎来到后台管理系统</span>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import api from "../api";
import cookie from "../../../utils/cookie";

export default defineComponent({
  name: "customHeader",
  data() {
    return {
      userName: ref(""),
      input2: ref(""),
      router: useRouter(),
      fileList:[]
    };
  },
  methods: {
    getuserInfo() {
      let info = cookie.get("userInfo");
      let data = cookie.verify(info);
      this.userName = data.name;
      console.log(data);
    },
    handleRemove(file:any, fileList:any) {
        console.log(file, fileList);
      },
      handlePreview(file:any) {
        console.log(file);
      },
      handleExceed(files:any, fileList:any) {
        console.log(files)
      },
      beforeRemove(file:any, fileList:any) {
        console.log(file)
      },
      uploadFile(params:any){
        let fromData = new FormData()
        fromData.append("file", params.file)
        console.log(params);
        api.uploadFile(fromData,(res:any)=>{
          console.log(res);
        })
      },
      button(){
        api.test1({},(res:any)=>{
          console.log(res)
        })
      },
  },
  mounted() {},
});
</script>