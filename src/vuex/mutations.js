/**
 * Created by Administrator on 2017/7/4.
 */


var mutations = {
    ROUTER_LOADING (state,platform) {
        state.indexLoading = platform
        console.log(state.indexLoading)
    },
    USER_DATA (state,res) {
    	state.userData = res
    },
    LIST_DATA (state,res) {
    	state.listData = res;
    },
    AWARD_DATA (state,res) {
    	state.awardData = res;
    }
}



export default mutations;

