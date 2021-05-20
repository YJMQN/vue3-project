<template>
  <span>新闻管理</span>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

export default defineComponent({
  name: "news",
  data() {
    return {
      userName: ref(""),
      input2: ref(""),
      router: useRouter(),
      fileList:[]
    };
  },
  methods: {
    
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
  },
  mounted() {},
});
</script>