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
            this.$emit('isLoading',false);

        },
        mounted(){
            console.log(2)
            this.$emit('isLoading',true);
        },
        beforeDestroy () {
        },
        destoryed(){

        },
        methods: {

        }
    }
</script>
