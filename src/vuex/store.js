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
    listData:[],
    awardData:{},
    lotteryData:{},
    myData:{
    	page:0,
    	list:[],
    	isLoading:true,
    	hasMore:true,
    },
    friendData:{
    	page:0,
    	list:[],
    	isLoading:true,
    	hasMore:true,
    },
    luckyPlate:{
    	isPlaying:false,
    }
}




export default new Vuex.Store({
    state,
    mutations,
    actions
})
