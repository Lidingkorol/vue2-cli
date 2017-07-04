<template>
  <div id="app">
    <transition name="fade">
        <router-view @isLoading="loading"></router-view>
    </transition>
    <transition name="fade">
        <div class="loading" style="position: relative;" v-show="indexLoading" @touchmove.prevent>
            <Spin fix>
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                    </svg>
                </div>
            </Spin>
        </div>
    </transition>
      <!--<div class="touch-back" @click.prevent="backTop" v-show="scrolledTop>200"  transition="ani-in"></div>-->
  </div>
</template>

<script>
  export default {
      data () {
          return {
              scrolledTop:0,
              indexLoading:false
          }
      },
      computed :{
      	  /*indexLoading (){
              return this.$store.state.indexLoading;
          }*/
      },
      created(){

      },
      ready () {

      },
      beforeDestroy () {

      },
      methods: {
          loading:function(value){
              this.indexLoading=value;
              console.log('loading')
              console.log(this.indexLoading)
          }
      },
  }
</script>

<style>



  @import  '../static/css/base.css';

  .loading {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
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
</style>
