<template>
    <div style="float:right;">
		<div style="display:inline-block;margin-right:20px;">
    		<el-dropdown>
      			<IconFont type="icon-qiehuanyuyan"></IconFont>
      			<template #dropdown>
        			<el-dropdown-menu>
          				<el-dropdown-item
            				v-for="item in languages"
            				:key="item.value"
                            :disabled="language===item.value"
          				>
            				<span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          				</el-dropdown-item>
        			</el-dropdown-menu>
      			</template>
    		</el-dropdown>
  		</div>
        <div style="display:inline-block;margin-right:20px;">
            <el-dropdown>
      			<span>{{userName}}</span>
      			<template #dropdown>
        			<el-dropdown-menu>
          				<el-dropdown-item>
            				<span @click="loginOut()">{{ t('button.loginOut') }}</span>
          				</el-dropdown-item>
        			</el-dropdown-menu>
      			</template>
    		</el-dropdown>
        </div>
	</div>
</template>
<script lang="ts">
import { ref,defineComponent,reactive,toRefs, computed } from "vue";
import cookie from "@/utils/cookie"
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter } from "vue-router"
import IconFont from '@/components/IconFont'

export default defineComponent({
    name:"customHeader",
    setup(){
        const { locale ,t } = useI18n();
        const store = useStore();
        const router=useRouter();
        let userName = ref('');
        const state = reactive({
            languages: [{ name: 'en', value: 'en' }, { name: '中文', value: 'zh-cn' }],
            handleSetLanguage: (lang: string) => {
                locale.value = lang
                store.commit('changeLang',lang)
            }
        })
        const language = computed(() => {
            return store.state.setting.language
        })
        const method = reactive({
            loginOut:()=>{
                cookie.remove('token');
                store.commit('loginOut');
                router.push("/login");
            }
        })
        let info = cookie.get('token')
            let data = cookie.verify(info);
            userName.value = data.name;
            store.commit('setCurrentName', userName.value)
            store.commit('setCurrentCode', data.power)
        return{
            ...toRefs(state),
            ...toRefs(method),
            userName,
            t,
            language
        }
    },
    components:{
        IconFont
    }
})

</script>