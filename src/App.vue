<template>
  <div id="app">
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <transition name="fade">
        <div class="loading" v-show="indexLoading" @touchmove.prevent>
            <!--<Spin fix>
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                    </svg>
                </div>
            </Spin>-->
            <mt-spinner :type="2" color="#26a2ff" :size="60"></mt-spinner>
        </div>
    </transition>
    <transition name="ani-in">
    	<div class="touch-back" @click.prevent="backTop" v-show="scrolledTop>200"></div>
    </transition>
    
  </div>
</template>

<script>
	
	
	
	import {mapState,mapActions} from "vuex";
  import Util from './libs/util'
  import {Bounce} from './libs/tween'
  
  
  export default {
      data () {
          return {
              scrolledTop:0,
          }
      },
      computed :{
      		...mapState([
    					'indexLoading'
  				])
      },
      created(){
				this.getUserInfo();
      },
      mounted(){
      	window.addEventListener('scroll',Util.throttle(this.handleScroll,250,500));
      },
      beforeDestroy () {

      },
      methods: {
      	...mapActions([
    				'getUserInfo'
  			]),
  			handleScroll(){
          	this.scrolledTop = window.scrollY;
       	},
       	backTop:function(){
       		let [t,b,c,d]=[600/1000,window.scrollY,-window.scrollY,1]
	        let x=Bounce.easeIn(t,b,c,d);
	        window.scrollTo(0,x);
	        if(x<=0){
	            return false;
	        }
	        requestAnimationFrame(this.backTop);
       	}
      },
  }
</script>

<style>



  @import  '../static/css/base.css';

  .loading {
      width: 1.5rem;
      height: 1.5rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(3,3);
     	background: rgba(255,255,255,0); 
     	z-index: 10000;
  }
  .circular {
      -webkit-animation: rotate 2s linear infinite;
      animation: rotate 2s linear infinite;
      height: 100%;
      -webkit-transform-origin: center center;
      transform-origin: center center;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
  .path {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
      -webkit-animation: dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;
      animation: dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;
      stroke-linecap: round;
  }
  @keyframes rotate {
      100% {
          -webkit-transform: rotate(1turn);
          transform: rotate(1turn);
      }
  }
  @keyframes dash {
      0% {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
      }
      50% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -35;
      }
      100% {
          stroke-dasharray: 89,200;
          stroke-dashoffset: -124;
      }
  }
  @keyframes color {
      0%, 100% {
          stroke: #d62d20;
      }
      40% {
          stroke: #0057e7;
      }
      66% {
          stroke: #008744;
      }
      80%, 90% {
          stroke: #ffa700;
      }
  }
  .touch-back {
      position: fixed;
      bottom: 2.20rem;
      right: 0.20rem;
      height: .8rem;
      width: .8rem;
      border-radius: 50%;
      background: rgba(0,0,0,.5);
      color: #fff;
      text-align: center;
      z-index: 999;
  }
  .touch-back span {
      display: block;
      height: .44rem;
      line-height: .44rem;
  }

  .touch-back:before {
      content: '';
      display: block;
      height: .26rem;
      width: .26rem;
      background: transparent;
      border: 2px solid #fff;
      border-bottom: transparent;
      border-left: transparent;
      position: absolute;
      top: 58%;
      left: 50%;
      -webkit-transform: translate3d(-50%,-50%,0) rotate(-45deg);
      transform: translate3d(-50%,-50%,0) rotate(-45deg);
  }
  .ani-in-enter-active,.ani-in-leave-active {
    transition: all .3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    transform: scale(1);
    opacity: 1;
	}
	
	.ani-in-enter {
	    transform: scale(0);
	    opacity: 0;
	}
	.ani-in-leave-to {
	    opacity: 0;
	}
</style>
