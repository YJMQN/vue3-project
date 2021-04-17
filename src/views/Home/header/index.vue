<template>
    <span>{{userName}}</span>
</template>
<script lang="ts">
import { ref,defineComponent } from "vue";
import { useRouter } from "vue-router"
import api from "../../../api"
import cookie from "../../../utils/cookie"

export default defineComponent({
  name:"customHeader",
  data(){
    return {
      userName:ref(''),
      input2:ref(''),
      router:useRouter(),
    }
  },
  methods:{
    getuserInfo(){
      let info = cookie.get('token')
      let data = cookie.verify(info);
      this.userName = data.name
      console.log(data);
    },
  },
  mounted(){
    this.getuserInfo()
  },
})


</script>