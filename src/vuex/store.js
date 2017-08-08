/**
 * Created by Administrator on 2017/7/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    indexLoading:false,
    userData:{},
    listData:{},
    awardData:{},
}




export default new Vuex.Store({
    state,
    mutations,
    actions
})
