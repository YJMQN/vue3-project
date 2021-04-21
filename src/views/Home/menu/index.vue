<template>
  <el-menu :default-active="defaultActive" :unique-opened="true" :router="true">
          <template v-for="(item,index) in ChildRoutes" :key="item.path+index">
            <el-submenu :index="item.path" v-if="item.children&&item.children.length>0">
              <template #title>{{item.name}}</template>
              <template v-for="(child,childIndex) in item.children" :key="child.path+childIndex">
                <el-menu-item v-if="child.meta.isShow" :index="item.path+'/'+child.path">{{child.name}}</el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
              <template #title>{{item.name}}</template>
            </el-menu-item>
          </template>
        </el-menu>
</template>
<script lang="ts">
import { ref, reactive, onMounted, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { childRoutes } from "@/router/index";
import api from "../../../api"
import cookie from "../../../utils/cookie"

export default {
  name:"customMenu",
  setup() {
    const ChildRoutes = reactive(childRoutes);
    const test = reactive({
      query:'vue',
      child:{}
    })
    const defaultActive = ref('/form/select');
    const route = useRoute();
    const fetchData = async (query:any) => {
      const data = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      ).then(rsp => rsp.json())
      test.child = data.hits
    }
    onMounted(() => {
      childRoutes.forEach((item)=>{
        
      })
    });
    watchEffect(() => {
      console.log(route.name)
      defaultActive.value = route.path;
    });
    return {
      ChildRoutes,
      defaultActive,
    };
  },
}


</script>