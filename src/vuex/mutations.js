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
    },
    LOTTERY_DATA(state,res) {
    	state.lotteryData = res;
    },
    FRIEND_DATA(state,res) {
    	state.friendData.list.push(...res.list);
    	state.friendData.page = res.page++;
    }
}



export default mutations;

