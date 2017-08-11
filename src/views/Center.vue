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
			height: .46rem;
			display: block;
			margin: 0 auto;
		}
		.tab {
			padding: .3rem 0 .2rem 0;
			margin-top: .3rem;
			position: relative;
			.tab_hd {
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
			.bottomIcon {
				width: 0;
			    height: 0;
			    border-left: 8px solid transparent;
			    border-right: 8px solid transparent;
			    border-bottom: 10px solid #fff;
			    position: absolute;
			    bottom: -.05rem;
			    transition: left 0.5s cubic-bezier(0.68, 0.22, 0.27, 1.55);
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
				font-size: .3rem;
				color:rgb(71,83,89);
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
			span {
				color:rgb(135,145,148);
				font-size: .26rem;
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
	.serviceBox {
		padding: 1.5rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		img {
			margin: .3rem 0;
			width: 3rem;
			height: 3rem;
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
				<div class="tab_hd">
					<a @click="showTab=0">中奖记录</a>
					<a @click="showTab=1">我的好友</a>
					<a @click="showTab=2">查看物流</a>
				</div>
				<i class="bottomIcon" :style="{left:1.1+2.5*showTab+'rem'}"></i>
			</div>
		</div>
        <div class="tabList">
        	<template v-if="showTab==0">
        		<ul class="itemBox">
        			<div class="item_hd">
        				<span class="imgHead">商品图片</span>
        				<span class="orderHead">订单编号</span>
        				<span class="nameHead">联系客服</span>
        			</div>
        			<li v-for="item in myData.list">
        				<div class="imgBox">
        					<img :src="item.img">
        				</div>
        				<span class="order_id">{{item.order_id}}</span>
        				<span class="goods_name">{{item.goods_name}}</span>
        			</li>
        		</ul>
        		<no-more ref="getMore">
		        	<p v-if="myData.hasMore">加载更多...</p>
					<p v-if="!myData.hasMore">客官，到底啦</p>
		        </no-more>
        	</template>
        	<template v-if="showTab==1">
        		
        	</template>
        	<template v-if="showTab==2">
        		<div class="serviceBox">
        			<span>遇到问题可以咨询客服哦~</span>
        			<span>关注下方公众号，小助手帮您解决</span>
        			<img src="../../static/images/1502437702.png">
        			<span>温馨提示：请在公众号内写明详细情况</span>
        		</div>
        	</template>
        </div>
    </div>
</template>
<script>
	
	import {mapState,mapActions} from "vuex";
	import Util from '../libs/util';
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
				'myData',
			])
      	},
        created(){
			
        },
        async mounted(){
        	await this.getMyList(this.myData);
        	window.addEventListener('scroll', Util.throttle(this.scroll,250,500));
        	this.$store.dispatch("setLoading",false);
        },
        beforeDestroy () {
        	window.removeEventListener('scroll', this.scroll);
        },
        destoryed(){

        },
        methods: {
        	...mapActions([
				'getMyList'
			]),
			async scroll(){
				let pos = this.$refs.getMore.$el.getBoundingClientRect();
				if(this.myData.hasMore && ((pos.top > 0 && window.innerHeight - pos.top > 0) ||
                    (pos.top <= 0 && pos.bottom >= 0))) {
                    	await this.getMyList(this.myData);
                    }
			},
			goDetail:function(i){
				
			}
        }
    }
</script>
