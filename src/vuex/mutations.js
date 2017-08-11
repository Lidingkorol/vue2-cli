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
    MY_DATA(state,res) {
    	state.myData.list.push(...res.list);
    	res.page++;
    	state.myData.page = res.page;
    	state.myData.isLoading = res.isLoading;
    },
    UPDATE_MY_DATA(state,res) {
    	state.myData.isLoading = res;
    },
    HASMORE_MY_DATA(state,res) {
    	state.myData.hasMore = res;
    }
}



export default mutations;

