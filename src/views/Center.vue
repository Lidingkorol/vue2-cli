<style scoped lang="less">
	.container {
		
	}
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
	.itemBox {
		.item_hd {
			display:flex;
			padding: .2rem .25rem;
			.imgHead {
				width: 1.2rem;
			}
			.orderHead {
				flex: 1;
			}
			.nameHead {
				width: 2rem;
			}
			span {
				text-align: center;
			}
		}
		li {
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: .2rem .25rem;
			border-top: 1px solid rgb(222,222,222);
			.imgBox {
				width: 1.2rem;
				display:flex;
				align-items: center;
				img {
					width: .6rem;
					height: .6rem;
					border-radius: 50%;
					margin: 0 auto;
				}
			}
			
			.order_id {
				flex: 1;
				text-align: center;
				
			}
			.goods_name {
				width: 2rem;
				text-align: center;
			}
		}
		li:last-child {
			border-bottom: 1px solid rgb(222,222,222);
		}
	}
</style>
<template>
    <div class="container">
    	<header-component :status="status"></header-component>
        <div class="headerBox">
			<div class="imgBox">
				<img :src="userData.logo">
			</div>
			<span >{{userData.nickname}}</span>
			<div class="tab">
				<a @click="showTab=0">中奖记录</a>
				<a @click="showTab=1">我的好友</a>
				<a @click="showTab=2">查看物流</a>
			</div>
		</div>
        <div class="tabList">
        	<template v-if="showTab==0">
        		<ul class="itemBox">
        			<div class="item_hd">
        				<span class="imgHead">商品图片</span>
        				<span class="orderHead">订单编号</span>
        				<span class="nameHead">商品名称</span>
        			</div>
        			<li v-for="item in friendData.list">
        				<div class="imgBox">
        					<img :src="item.img">
        				</div>
        				<span class="order_id">{{item.order_id}}</span>
        				<span class="goods_name">{{item.goods_name}}</span>
        			</li>
        		</ul>
        	</template>
        	<template v-if="showTab==1"></template>
        	<template v-if="showTab==2"></template>
        </div>
        <no-more ref="getMore">
        	<p v-if="friendData.hasMore">加载更多...</p>
			<p v-if="!friendData.hasMore">客官，到底啦</p>
        </no-more>
    </div>
</template>
<script>
	
	import {mapState,mapActions} from "vuex";
	import noMore from '../components/nomore';
	import headerComponent from '../components/header';
    export default {
        data () {
            return {
            	showTab:0,
            	status:{
                	c:false,
					h:true,
                }
            }
        },
        components:{
        	noMore,
        	headerComponent
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
        	await this.getFriendsList(this.friendData);
        	window.addEventListener('scroll', this.scroll);
        	this.$store.dispatch("setLoading",false);
        },
        beforeDestroy () {
        	window.removeEventListener('scroll', this.scroll);
        },
        destoryed(){

        },
        methods: {
        	...mapActions([
				'getFriendsList'
			]),
			async scroll(){
				let pos = this.$refs.getMore.$el.getBoundingClientRect()
				if(this.friendData.hasMore && ((pos.top > 0 && window.innerHeight - pos.top > 0) ||
                    (pos.top <= 0 && pos.bottom >= 0))) {
                    	await this.getFriendsList(this.friendData);
                    }
			},
			goDetail:function(i){
				
			}
        }
    }
</script>
