<style scoped>

</style>
<template>
    <div class="container">
        <router-link :to="{ name: 'Game', params: { userId: 123 }}">game</router-link>
    </div>
</template>
<script>


    export default {
        data () {
            return {}
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
