/**
 * Created by Administrator on 2017/7/4.
 */

	import Vue from 'vue'
	import Config from '../conf/config' 
	import Request from '../conf/request'


const actions = {
    setLoading ({commit},platform){
        commit('ROUTER_LOADING',platform)
    },
    async getUserInfo({ commit }){
    	if(Vue.localStorage.get('User')) {
    		let user = JSON.parse(Vue.localStorage.get('User'))
    		commit('USER_DATA',user)
    		return ;
    	}
    	let res = await Request.get(Config.apiDomain + '/api/getUser');
        if(res.status == 200&& !!res.data) {
       		Vue.localStorage.set('User', JSON.stringify(res.data))
        	commit('USER_DATA', res.data)
        }else {
        	commit('DEFAULT_DATA', res.data)
        }
    },
    async getListGoods(store){
    	if(!Vue.localStorage.get('User')) {
    		await store.dispatch('getUserInfo')
    	}
    	let user =JSON.parse(Vue.localStorage.get('User'))
    	let res = await Request.post(Config.apiDomain + '/api/getListGoods',{data:{uid:user.uid}});
        if(res.status == 200&& !!res.data) {
        	store.commit('LIST_DATA', res.data)
        }else {
        	store.commit('DEFAULT_DATA', res.data)
        }
    },
    async getAwardData({commit}){
    	let res = await Request.get(Config.apiDomain + '/api/getAwardData');
        if(res.status == 200&& !!res.data) {
        	commit('AWARD_DATA', res.data)
        }else {
        	commit('DEFAULT_DATA', res.data)
        }
    },
    async getAwardNum({commit},i){
    	let res = await Request.post(Config.apiDomain + '/api/getAwardNum',{data:{num:i}});
        if(res.status == 200&& !!res.data) {
        	commit('LOTTERY_DATA', res.data)
        }else {
        	commit('DEFAULT_DATA', res.data)
        }
    },
    randomList({commit},arr){
    	var _arr = [];
	    var length = arr.length;
	    for(let i=0; i<length; i++){
	        let random = Math.random() * arr.length;
	        _arr.push(arr.splice(random, 1)[0]);
	    }
	    commit('LIST_DATA', _arr);
    },
    async getFriendsList(store,obj) {
    	if(!store.state.friendData.isLoading){
    		return ;
    	}
    	store.commit('UPDATE_FRIEND_DATA', false);
    	let res = await Request.post(Config.apiDomain + '/api/getFriendsList',{data:{page:obj.page}});
        if(res.status == 200&& !!res.data) {
        	store.commit('FRIEND_DATA',{list:res.data,page:obj.page,isLoading:true})
        	if(res.data.length<10) {
        		store.commit('HASMORE_FRIEND_DATA', false);
        	}
        }else {
        	store.commit('DEFAULT_DATA', res.data)
        }
    }
}

export default actions
