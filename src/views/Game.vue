<style scoped lang="less">
	.container {
		background-color: rgb(255,229,58);
		
	}
	.headerBox {
		background:url(../../static/images/bg_01.png) no-repeat;
		background-size: 100%;
		height: 15rem;
		.h_title {
			padding: 1rem .3rem .5rem .3rem;
			height: 3.5rem;
			img {
				width: 100%;
				animation: roa 1s;
				-moz-animation: roa 1s;	/* Firefox */
				-webkit-animation: roa 1s;	/* Safari 和 Chrome */
				-o-animation: roa 1s;	/* Opera */
			}
		}
		.h_button  {
			display: flex;
			justify-content: center;
			button {
				font-size: .34rem;
			}
			.recharge {
				background:url(../../static/images/button.png) no-repeat;
				background-size: cover;
				width: 2rem;
				height: .7rem;
				border: none;
				outline: none;
				margin-left: .5rem;
				font-weight: bold;
			}
			.center {
				background:url(../../static/images/button.png) no-repeat;
				background-size: cover;
				width: 2rem;
				height: .7rem;
				border: none;
				outline: none;
				font-weight: bold;
			}
		}
	}
	
    .turnTable {
        .content {
			.content_hd {
				padding-top: 1.44rem;
				height: 3.6rem;
				display: flex;
				flex-direction: column;
				>span {
					height: .7rem;
					line-height: .7rem;
					text-align: center;
				}
				.msg {
					margin-top: .3rem;
					>span {
						padding: 0 .2rem;
					}
					.item {
						height: .5rem;
						color:#fff;
					}
				}
			}
			.content_bd {
				background-color: rgb(15,118,209);
				padding: .1rem;
				width: 5.6rem;
				height: 5.6rem;
				margin: 0 auto;
				border-radius: .1rem;
				position: relative;
				.goods {
					background-color: rgb(47,47,47);
					padding: .1rem;
					border-radius: .1rem;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;
				    height: 100%;
				    width: 100%;
					li {
						width: 1.25rem;
						height: 1.25rem;
						
						box-sizing: border-box;
						img {
							width: 1.25rem;
							height: 1.25rem;
							box-sizing: border-box;
							border:8px solid rgb(47, 47, 47);
							border-radius: .1rem;
						}
						img.active {
							border:8px solid rgb(239,55,55);
						}
					}
				}
				>a img{
				width: 1rem;
				height: 1rem;
				position: absolute;
				top: 50%;
			    left: 50%;
			    transform: translate(-50%,-50%);
				}
				>a.rotate img {
					-moz-transform: rotateZ(360deg);
				    -ms-transform: rotateZ(360deg);
				    -o-transform: rotateZ(360deg);
				    transform: rotateZ(360deg);
				    -webkit-transform: rotateZ(360deg);
				    transition: all .5s;
				    -webkit-transition: all .5s;
				}
			}
        }
    }
    .buttonBox {
		display: flex;
		justify-content: center;
		font-size: .34rem;
		.once {
			background:url(../../static/images/button.png) no-repeat;
			background-size: 100%;
			width: 2rem;
			height: .7rem;
			border: none;
			outline: none;
			font-weight: bold;
		}
		.more {
			background:url(../../static/images/button.png) no-repeat;
			background-size: 100%;
			width: 2rem;
			height: .7rem;
			border: none;
			outline: none;
			margin-left: .8rem;
			font-weight: bold;
		}
	}
    @keyframes roa
	{
		0% {transform: rotateZ(-45deg);}
		17% {transform: rotateZ(45deg);}
		34% {transform: rotateZ(-30deg);}
		51% {transform: rotateZ(30deg);}
		68% {transform: rotateZ(-15deg);}
		85% {transform: rotateZ(15deg);}
		100% {transform: rotateZ(0deg);}
	}
	
	@-moz-keyframes roa /* Firefox */
	{
		0% {transform: rotateZ(-45deg);}
		17% {transform: rotateZ(45deg);}
		34% {transform: rotateZ(-30deg);}
		51% {transform: rotateZ(30deg);}
		68% {transform: rotateZ(-15deg);}
		85% {transform: rotateZ(15deg);}
		100% {transform: rotateZ(0deg);}
	}
	
	@-webkit-keyframes roa /* Safari 和 Chrome */
	{
		0% {transform: rotateZ(-45deg);}
		17% {transform: rotateZ(45deg);}
		34% {transform: rotateZ(-30deg);}
		51% {transform: rotateZ(30deg);}
		68% {transform: rotateZ(-15deg);}
		85% {transform: rotateZ(15deg);}
		100% {transform: rotateZ(0deg);}
	}
	
	@-o-keyframes roa /* Opera */
	{
		0% {transform: rotateZ(-45deg);}
		17% {transform: rotateZ(45deg);}
		34% {transform: rotateZ(-30deg);}
		51% {transform: rotateZ(30deg);}
		68% {transform: rotateZ(-15deg);}
		85% {transform: rotateZ(15deg);}
		100% {transform: rotateZ(0deg);}
	}
</style>
<template>
    <div class="container">
    	<div class="headerBox">
			<div class="h_title">
				<img src="../../static/images/title_01_03.png" class="rotate">
			</div>
			<div class="h_button">
				<button  class="center" v-link="{path:'/recharge'}">充值中心</button>
				<button  class="recharge" v-link="{path:'/center'}">个人中心</button>
			</div>
	        <div class="turnTable">
	            <div class="content">
	                <div class="content_hd">
	                    <span>您还有{{userData.leftNum}}次抽奖机会</span>
	                    <div class="msg">
	                        <!--<div class="swiper-container home-sw">
	                            <div class="swiper-wrapper">
	                                <div class="swiper-slide" v-for="i in awardData">
	                                    <span>{{i.nickname}}</span>抽中了<span>{{i.goods_name}}</span>
	                                </div>
	                            </div>
	                        </div>-->
	                    </div>
	                </div>
	                <div class="content_bd">
	                    <ul class="goods">
	                        <li v-for="(item,i) in listData"><img :src="item.img" :class="[lottery.isActive-1==i? 'active' : '' ]"></li>
	                    </ul>
	                    <a class="refresh" @click="randomArr(goods)" :class="{rotate:isRotate}">
							<img src="../../static/images/refresh_03.png">
						</a>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="buttonBox">
	    	<button @click="playOnce($event)" class="once fontSize_34">抽一次</button>
			<button @click="playMore($event)" class="more fontSize_34">抽十次</button>
	    </div>
    </div>
</template>
<script>
	
	import {mapState} from "vuex";
	import {Cubic} from '../libs/tween'
	
    export default {
        data () {
            return {
            	lottery:{
					isActive:1,     //当前位置的商品
					allGoods:16,	//转盘商品总个数
					timer:null,  	//定时器
					speed:200,		//转动速度
					reward:15,		//中奖的商品位置              
					times:0,		//当前转动次数
					cycle:100,		//基本转动次数
					isPlaying:true	//是否在游戏中
				}, 
            }
        },
        computed:{
        	...mapState([
				'listData',
				'userData',
				'awardData'
			])
        },
        created(){
			this.$store.dispatch("getUserInfo").then(()=>{
				this.$store.dispatch("getListGoods",this.userData.uid);
			});
			this.$store.dispatch("getAwardData")
        	this.$store.dispatch("setLoading",false);
        },
        mounted(){
        	
        },
        beforeDestroy () {
        },
        destoryed(){

        },
        methods: {
        	randomArr:function(){
        		
        	}
        }
    }
</script>
