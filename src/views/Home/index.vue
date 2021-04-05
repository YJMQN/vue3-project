<template>
  <h1 class="text">我是首页</h1>
  vuex:{{ $store.state.num }}
  <button @click="add">++</button>
  {{ state.name }}
  {{ state.num }}
  <div class="login">
    <button type="primary" @click="goLogin">跳转登录页</button>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const goLogin = () => {
  router.push("/login");
};
const add = () => {
  store.commit("addNum");
  state.num = store.state.num;
  state.num > 20 ? (state.color = "pink") : (state.color = "#ccc");
};

const state = reactive({
  name: "霍庆祝",
  num: 10,
  color: "#ccc",
});
</script>
<style >
.text {
  color: v-bind("state.color");
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
