import { createStore } from "vuex";

import user from './modules/userAuth'
import setting from './modules/setting'

export default createStore({
    modules: {
        user,
        setting
    }
});
