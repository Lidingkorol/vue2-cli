<style scoped>

</style>
<template>
    <div class="container">
        <router-link :to="{ name: 'Game', params: { userId: 123 }}">game</router-link>
        <p @click="setData()">{{userData}}</p>
        <
    </div>
</template>
<script>
	
	import {mapState} from "vuex";

    export default {
        data () {
            return {}
        },
        computed :{
      		...mapState([
				'userData'
			])
      	},
        created(){
			this.$store.dispatch('getUserInfo');
        },
        mounted(){
        	this.$store.dispatch("setLoading",false);
        },
        beforeDestroy () {
        },
        destoryed(){

        },
        methods: {
        }
    }
</script>
