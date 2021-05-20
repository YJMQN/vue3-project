<template>
	<div>
        <div>
            {{t('homepage.configTitle')}}
        </div>
		<div>
            {{t('homepage.totalmem')}}
            <span style="color:red;">{{totalmem}}</span>
        </div>
        <div>
            {{t('homepage.usedmem')}}
            <span style="color:blue;">{{usedmem}}</span>
        </div>
        <div>
            {{version}}
        </div>
	</div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import api from "../api";
import { useI18n } from 'vue-i18n'

export default defineComponent({
    name: "default",
    setup() {
        const { t } = useI18n();
        let usedmem = ref('');
        let totalmem = ref('');
        let version = ref('');
        onMounted(()=>{
            api.getConfig({}, (res: any) => {
		        usedmem.value=res.data.usedmem;
                totalmem.value=res.data.totalmem;
                version.value = res.data.version;
            });
        })
        return {
            t,
            usedmem,
            totalmem,
            version
        }
    },
});
</script>