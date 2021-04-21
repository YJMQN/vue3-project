<template>
	<el-button>上传</el-button>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="上传日期"> </el-table-column>
    <el-table-column prop="name" label="名称"> </el-table-column>
    <el-table-column label="图片预览">
      <template #default="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="getUrl(scope.row)"
          hide-on-click-modal
          :preview-src-list="getPreviewUrl(scope.row)"
        >
        </el-image>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
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
    };
  },
  computed: {
    tableData() {
      let arr: any = [];
      arr.push({
        date: "12",
        name: "name",
      });
      return arr;
    },
  },
  methods: {
    getUrl(row: any) {
      let str: string = "http://image.silentman.top/1618802538771";
      return str;
    },
    getPreviewUrl(row: any) {
      let arr: any = [];
      arr.push("http://image.silentman.top/1618802538771");
      return arr;
    },
    handleEdit(index: number, row: any) {
      console.log(index, row);
    },
    handleDelete(index: number, row: any) {
      console.log(index, row);
    },
  },
  mounted() {
    api.getBanner({},(res:any)=>{
      console.log(res);
    })
  },
});
</script>