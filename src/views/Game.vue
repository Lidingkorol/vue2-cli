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
			>a {
				font-size: .34rem;
				color: #000;
				text-align: center;
				line-height: .7rem;
			}
			.center {
				background:url(../../static/images/button.png) no-repeat;
				background-size: cover;
				width: 2rem;
				height: .7rem;
				border: none;
				outline: none;
				margin-left: .5rem;
				font-weight: bold;
			}
			.recharge {
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
				align-items: center;
				>span {
					height: .7rem;
					line-height: .7rem;
					text-align: center;
					font-size: .28rem;
				}
				.msg {
					padding-top: .3rem;
					height: 1.5rem;
					width: 4rem;
					overflow: hidden;
					>span {
						padding: 0 .2rem;
					}
					.item {
						width: 100%;
						height: 1.2rem;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #fff;
						font-size: .28rem;
						span {
							padding: 0 .1rem;
						}
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
							border:2px solid rgb(47, 47, 47);
							border-radius: .1rem;
						}
						img.active {
							border:2px solid rgb(239,55,55);
						}
					}
				}
				>a img{
				width: 1rem;
				height: 1rem;
				position: absolute;
				top: 2.3rem;
			    left: 2.3rem;
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
			background-size: cover;
			width: 2rem;
			height: .65rem;
			border: none;
			outline: none;
			font-weight: bold;
		}
		.more {
			background:url(../../static/images/button.png) no-repeat;
			background-size: cover;
			width: 2rem;
			height: .65rem;
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
</style>
<template>
    <div class="container">
    	<div class="headerBox">
			<div class="h_title">
				<img src="../../static/images/title_01_03.png" class="rotate">
			</div>
			<div class="h_button">
				<router-link to="/recharge" class="recharge">充值中心</router-link>
				<router-link to="/center" class="center">个人中心</router-link>
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
	                        <swiper :options="swiperOption" ref="mySwiper">
							    <swiper-slide v-for="(i,index) in awardData" :key="index">
							    	<div class="item">
							    		<span>{{i.nickname}}</span>抽中了<span>{{i.goods_name}}</span>
							    	</div>
							    </swiper-slide>
							</swiper>
	                    </div>
	                </div>
	                <div class="content_bd">
	                    <ul class="goods">
	                        <li v-for="(item,i) in listData"><img :src="item.img" :class="[(lottery.isActive-1==i)||(playMethod.addr[0]==i)||(playMethod.addr[1]==i)? 'active' : '' ]"></li>
	                    </ul>
	                    <a class="refresh" @click="randomArr()" :disabled="luckyPlate.isPlaying" :class="{rotate:isRotate}">
							<img src="../../static/images/refresh_03.png">
						</a>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="buttonBox">
	    	<button @click="getAward(1)" :disabled="luckyPlate.isPlaying" class="once">抽一次</button>
			<button @click="getAward(2)":disabled="luckyPlate.isPlaying"  class="more">抽十次</button>
	    </div>
	    <div class="descBox">
	    	<h2>温馨提示:</h2>
	    	<p></p>
	    </div>
    </div>
</template>
<script>
	
	import { mapState,mapActions } from 'vuex'
	import {Sine} from '../libs/tween'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	
    export default {
    	components:{
    		swiper,
    		swiperSlide
    	},
        data () {
            return {
            	lottery:{
					isActive:1,     //当前位置的商品
					allGoods:16,	//转盘商品总个数
					timer:null,  	//定时器
					speed:200,		//转动速度            
					times:0,		//当前转动次数
					cycle:100,		//基本转动次数
				}, 
				isRotate:false,
				playMethod:{
					status:1,        //1:一次  2：十次
					addr:[]
				},   	
				swiperOption:{
					autoplay: 2000,
                    paginationClickable :true,
		          	mousewheelControl : true,
		          	observeParents:true,
		          	loop:true,
				}
            }
        },
        computed:{
        	...mapState([
				'listData',
				'userData',
				'awardData',
				'awardNum',
				'lotteryData',
				'luckyPlate',
			])
        },
        created(){
			this.getListGoods();
			this.getAwardData();
        },
        mounted(){
        	this.$store.dispatch("setLoading",false);
        },
        beforeDestroy () {
        },
        destoryed(){

        },
        methods: {
        	...mapActions([
        	 	'getListGoods',
        	 	'getAwardData',
        	 	'getAwardNum',
        	 	'randomList',
        	 	'luckyPlateIsPlaying'
        	]),
        	async getAward(i) {
        		await this.luckyPlateIsPlaying(true);
        		await this.getAwardNum(i);
        		let lottery = Array.isArray(this.lotteryData) ? this.lotteryData[0] : this.lotteryData;
        		this.playMethod.status = i;
        		let time = this.findGoods(lottery.goods_id)+1;
        		console.log('time=',time)
        		this.lottery.reward = time;
        		this.play();
        	},
        	play:function(){
        		this.lottery.times++;
        		this.lottery.isActive++;
        		if(this.playMethod.status==2) {
        			this.playMethod.addr[0] = Math.floor(Math.random(1,15)*10);
        			this.playMethod.addr[1] = Math.floor(Math.random(1,15)*10);
        		}
        		console.log(this.asd)
        		if(this.lottery.cycle<this.lottery.times&&this.lottery.isActive==this.lottery.reward) {
        			this.lottery.speed=200;
        			this.lottery.times=0;
					this.playMethod.addr = [];    			
        			clearTimeout(this.lottery.timer);
        			//this.getAwardData();
        			this.luckyPlateIsPlaying(false);
        			return false;
        		}
				this.lottery.isActive = this.lottery.isActive>16 ? 1 : this.lottery.isActive;
				this.lottery.speed=0.01*Math.pow((this.lottery.times-10),2)+30<10 ? 10 : 0.01*Math.pow((this.lottery.times-10),2)+30;
        		this.lottery.timer=setTimeout(this.play,this.lottery.speed)
        	},
        	findGoods:function(target){
        		var num;
        		this.listData.forEach(function(i,index){
        			if(i.goods_id==target) {
        				num = index;
        				return num;
        			}
        		})
        		return num;
        	},
        	randomArr:function(){
        		this.luckyPlateIsPlaying(true);
        		this.isRotate = true;
        		this.randomList(this.listData)
        		setTimeout(()=>{
        			this.luckyPlateIsPlaying(false);
        			this.isRotate = false;
        		},1000)
        	}
        	
        }
    }
</script>
