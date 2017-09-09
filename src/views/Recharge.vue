<style scoped lang="less">
	.money {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		a {
			margin-top: .2rem;
			box-sizing: border-box;
			width: 2rem;
			text-align: center;
			line-height: .8rem;
			border:1px solid rgb(239,55,55);
			color: #000;
			border-radius: 40px;
			font-size: .3rem;
		}
		a.active {
			background:rgb(239,55,55);
			color: #fff;
		}
	}
	.recharge {
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		padding: .2rem;
		a {
			text-align: center;
			line-height: .8rem;
			background-color:rgb(239,55,55);
			color: #fff;
			border-radius: 40px;
			width: 100%;
			display: block;
			font-size: .34rem;
			
		}
	}
</style>
<template>
    <div class="container">
    	<div class="money">
    		<a :class="[num==i ? 'active':'']" v-for="(item,i) in money" @click="num=i">{{item}}</a>
    	</div> 
    	<div class="recharge">
    		<a @click="goRecharge()">充值  :  {{money[num]}}</a>
    	</div>
    </div>
</template>
<script>
	import { mapState,mapActions } from 'vuex'

    export default {
        data () {
            return {
            	money:[30,60,100,150,300],
            	num:0
            }
        },
        created(){
			
        },
        computed:{
        	...mapState([
				'userData',
			])
        },
        mounted(){
        	this.$store.dispatch("setLoading",false);
        },
        beforeDestroy () {

        },
        methods: {
        	...mapActions([
        		
        	]),
        	goRecharge:function(){
        		this.$router.push({path:'game'})
        	}
        }
    }
</script>
