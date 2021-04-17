<template>
  <el-upload
    class="upload-demo"
    action=""
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :http-request = "uploadFile"
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <template #tip>
      <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
    </template>
  </el-upload>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

export default defineComponent({
  name: "banner",
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