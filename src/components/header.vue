<style scoped lang="less">
	.headerComponent {
		background: rgba(145,77,197,1);
		display: flex;
		align-items: center;
		height: .8rem;
		i {
			font-size: .4rem;
			color: #fff;
		}
		h1 {
			color: #fff;
			font-size: .34rem;
			font-weight: normal;
			text-align: center;
			flex: 1;
		}
		.iconBtn {
			width: 1.5rem;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			a {
				flex: 1;
			}
		}
	}
	.navFixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;
	}
	.headerCom .blank {
		display: block;
		height: .8rem;
	}
</style>
<template>
	<div class="headerCom">
		<div :class="['headerComponent',{'navFixed':navFixed}]">
			<div class="iconBtn">
				<a @click="goBack()">
					<i class="fa fa-chevron-left" aria-hidden="true"></i>
				</a>
			</div>
			<h1>{{pageName}}</h1>
			<div class="iconBtn">
				<router-link class="center" to="{path:'/center'}" v-show="status.c">
					<i class="fa fa-user" aria-hidden="true"></i>
				</router-link>
				<router-link class="home" to="{path:'/game'}" v-show="status.h">
					<i class="fa fa-home" aria-hidden="true"></i>
				</router-link>
			</div>		
		</div>
		<div class="blank" v-if="navFixed">	</div>
	</div>
</template>
<script>


	export default {
		props:{
            pageName:{
                type:String,
                default:'幸运大转盘'
            },
            status:{
            	type:Object,
            	default:{c:false,h:true}
            }
        },
		data () {
			return {
				navFixed:false,
			}
		},
		created(){

		},
		mounted () {
			window.addEventListener('scroll', this.fixed);
		},
		beforeDestroy () {
			window.removeEventListener('scroll', this.fixed);
		},
		methods: {
			goBack:function(){
				history.go(-1);
			},
			fixed:function(){
            	let scrollTop = document.body.scrollTop
            	scrollTop > 80 ? this.navFixed = true :this.navFixed = false
            }
		}
	}
</script>