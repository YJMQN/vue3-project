interface UserState{
    currentName: string
    currentId: string
    currentCode: number
}

const state = {
    currentName:'',
    currentId:'',
    currentCode:2,
}
const mutations = {
    setCurrentName(state:UserState,name:string){
        state.currentName = name
    },
    setCurrentId(state:UserState,id:string){
        state.currentId = id
    },
    setCurrentCode(state:UserState,code:number){
        state.currentCode = code
    },
    loginOut(state:UserState){
        state = {
            currentName:'',
            currentId:'',
            currentCode:2,
        }
    },
}
const actions = {

}

export default {
    state,
    mutations,
    actions
}