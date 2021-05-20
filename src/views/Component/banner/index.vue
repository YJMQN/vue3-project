<template>
	<el-button>上传</el-button>
    <el-input></el-input>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, toRefs, onMounted } from "vue";
import { useI18n } from 'vue-i18n'
import api from "../api";
import {useHotkey} from '@/components/hotkey'


export default defineComponent({
    name: "banner",
    setup() {
        onMounted(()=>{
      		useHotkey([{
          		keys: [ 'Enter'],
          		preventDefault: true,
          		handler () {
    				console.log(111);
          		}
        	}])
    	})
    },
});
</script>