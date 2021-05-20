<template>
    <el-menu :default-active="defaultActive" :unique-opened="true" :router="true">
        <template v-for="(item,index) in ChildRoutes" :key="item.path+index">
            <el-submenu :index="item.path" v-if="item.children&&item.children.length>0">
                <template #title>{{t('route.'+item.name)}}</template>
                <template v-for="(child,childIndex) in item.children" :key="child.path+childIndex">
                    <el-menu-item v-if="child.meta.isShow" :index="item.path+'/'+child.path">{{t('route.'+child.name)}}</el-menu-item>
                </template>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
                <template #title>{{t('route.'+item.name)}}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import children from "@/router/children";
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export default {
    name:"customMenu",
    setup() {
        let ChildRoutes = JSON.parse(JSON.stringify(children));
        const defaultActive = ref('/index');
        const { t } = useI18n();
        const route = useRoute();
        const store = useStore();
        let code = store.state.user.currentCode;
        if(code!=1){
            let arr:any = [];
            ChildRoutes.forEach((item:any)=>{
                if(item.meta.code==code){
                    arr.push(item)
                }
                if(item.meta.code==0){
                    arr.push(item)
                }
            })
            ChildRoutes = arr
        }
        defaultActive.value = route.path;
        
        return {
            ChildRoutes,
            defaultActive,
            t,
        };
    },
}


</script>