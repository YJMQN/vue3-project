<template>
  	<span>欢迎来到后台管理系统</span>
	<div>
		<span>系统可用内存：{{memory}}</span>
	</div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import api from "../api";

export default defineComponent({
  name: "default",
  data() {
    return {
		memory:ref('')
	};
  },
  methods: {
    getConfig() {
      api.getConfig({}, (res: any) => {
        console.log(res);
		this.memory=res.data.totalmem
      });
    },
  },
  mounted() {
    this.getConfig();
  },
});
</script>