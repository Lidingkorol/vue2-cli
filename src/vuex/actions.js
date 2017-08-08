/**
 * Created by Administrator on 2017/7/4.
 */


	import Config from '../conf/config' 
	import Request from '../conf/request'


const actions = {
    setLoading ({commit},platform){
        commit('ROUTER_LOADING',platform)
    },
    async getUserInfo({ commit }){
    	let res = await Request.get(Config.apiDomain + '/api/getUser');
        if(res.status == 200&& !!res.data) {
       		console.log(res.data)
        	commit('USER_DATA', res.data)
        }else {
        	console.log(res.data)
        	commit('DEFAULT_DATA', res.data)
        }
    },
    async getListGoods({commit},e){
    	let res = await Request.post(Config.apiDomain + '/api/getListGoods',{data:{uid:e}});
        if(res.status == 200&& !!res.data) {
       		console.log(res.data)
        	commit('LIST_DATA', res.data)
        }else {
        	console.log(res.data)
        	commit('DEFAULT_DATA', res.data)
        }
    },
    async getAwardData({commit}){
    	let res = await Request.get(Config.apiDomain + '/api/getAwardData');
        if(res.status == 200&& !!res.data) {
       		console.log(res.data)
        	commit('AWARD_DATA', res.data)
        }else {
        	console.log(res.data)
        	commit('DEFAULT_DATA', res.data)
        }
    }
}

export default actions
