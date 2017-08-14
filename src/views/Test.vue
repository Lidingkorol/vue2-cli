<style scoped>
	.item {
		height:96px;
	}
	.msg {
		height: 3rem;
		overflow: hidden;
	}
</style>
<template>
    <div class="container">
        <router-link :to="{ name: 'Game', params: { userId: 123 }}">game</router-link>
    	<div class="msg">
    		<swiper :options="swiperOption" ref="mySwiper">
			    <!-- slides -->
			    <swiper-slide v-for="(i,index) in swipers" :key="index">
			    	<div class="item">
			    		{{i}}
			    	</div>
			    </swiper-slide>
			</swiper>
    	</div>
    	
    </div>
</template>
<script>

	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
    export default {
    	components:{
    		swiper,
    		swiperSlide
    	},
        data () {
            return {
            	swiperOption:{
					autoplay: 2000,
                    paginationClickable :true,
		          	mousewheelControl : true,
		          	observeParents:true,
		          	loop:true,
		          	direction : 'vertical',
				},
				swipers:[1,2,3,4,5,6],
            }
        },
        created(){
            console.log(3)
            this.$emit('isLoading',true);

        },
        mounted(){
            console.log(2)
            this.$emit('isLoading',false);
            this.getData();
        },
        beforeDestroy () {
        },
        destoryed(){

        },
        methods: {
        	getData(){
		        this.$http.get('http://localhost:8080/api/center')
	               .then((response) => {
					console.log('23')
	                 this.test=response.data;
	                 console.log(response.data)
	
	               }).catch(function(response) {
					console.log('24')
	               console.log(response)
	
	            })
        	}
        }
    }
</script>
