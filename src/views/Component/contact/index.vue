<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="上传日期"> </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">确认</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

export default defineComponent({
    name: "contact",
    setup(){
        const tableData = ref([])
        const method = reactive({
            handleEdit:(index:any,row:any)=>{},
            handleDelete:(index:any,row:any)=>{},
        })
        return {
            tableData,
            ...toRefs(method)
        }
    }
});
</script>