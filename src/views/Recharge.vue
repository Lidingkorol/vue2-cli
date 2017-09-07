<style scoped lang="less">

</style>
<template>
    <div class="container">
    	<div class=""
    </div>
</template>
<script>
	import { mapState,mapActions } from 'vuex'

    export default {
        data () {
            return {}
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
        }
    }
</script>
