<template>
  <span>用户反馈</span>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

export default defineComponent({
  name: "contact",
  data() {
    return {
      userName: ref(""),
      input2: ref(""),
      router: useRouter(),
      fileList:[]
    };
  },
  methods: {
    
  },
  mounted() {},
});
</script>