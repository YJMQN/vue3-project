const state = {
    language:'zh-cn'
}
const mutations = {
    changeLang(state:any,value:string){
        state.language = value
    },
}
const actions = {

}

export default {
    state,
    mutations,
    actions
}