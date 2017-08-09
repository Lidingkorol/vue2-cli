<style scoped lang="less">
	.headerBox {
		background:url(../../static/images/bg_04_02.png) no-repeat;
		background-size: cover;
		height: 4rem;
		
		.imgBox {
			padding: .5rem .5rem .3rem;
			display:flex;
			justify-content:center;
			img {
				width: 1.5rem;
				height: 1.5rem;
				border-radius: 50%;
			}
		}
		>span {
			text-align: center;
			color: #fff;
			font-size: .34rem;
			display: block;
			margin: 0 auto;
		}
		.tab {
			padding: .3rem 0;
			margin-top: .2rem;
			display: flex;
			align-items: center;
			a {
				text-align: center;
				border-right: 1px solid #fff;
				color: #fff;
				font-size: .34rem;
				flex: 1;
			}
			a:last-child {
				border-right: none;
			}
		}
	}
</style>
<template>
    <div class="container">
        <div class="headerBox">
			<div class="imgBox">
				<img :src="userData.logo">
			</div>
			<span>{{userData.nickname}}</span>
			<div class="tab">
				<a>中奖记录</a>
				<a>我的好友</a>
				<a>查看物流</a>
			</div>
		</div>
        
    </div>
</template>
<script>
	
	import {mapState,mapActions} from "vuex";

    export default {
        data () {
            return {}
        },
        computed :{
      		...mapState([
				'userData',
				'friendData'
			])
      	},
        created(){
			
        },
        async mounted(){
        	await this.getFriendsList(this.friendData.page);
        	this.$store.dispatch("setLoading",false);
        },
        beforeDestroy () {
        	
        },
        destoryed(){

        },
        methods: {
        	...mapActions([
				'getFriendsList'
			])
        }
    }
</script>
