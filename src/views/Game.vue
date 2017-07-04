<style scoped lang="less">
    .turnTable {
        .content {

        }
    }
</style>
<template>
    <div class="container">
        <div class="turnTable">
            <div class="content">
                <div class="content_hd">
                    <!--<span>您还有{{num}}次抽奖</span>-->
                    <!--<div class="msg">
                        <div class="swiper-container home-sw">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="i in list">
                                    <span>{{i.nickname}}</span>抽中了<span>{{i.goods_name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>-->
                </div>
                <div class="content_bd">
                    <!--<ul class="goods">
                        <li v-for="item in goods" track-by="$index"><img :src="item.img" :class="[lottery.isActive-1==$index? 'active' : '' ]"></li>
                    </ul>-->
                </div>
                <div class="content_ft">
                    <router-link :to="{ name: 'Center', params: { userId: 123 }}">User</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>


    export default {
        data () {
            return {}
        },
        created(){
            console.log(1)
            this.$emit('isLoading',true);

        },
        mounted(){
            var that=this
            setTimeout(function(){
                that.$emit('isLoading',false);
            },5000)

        },
        beforeDestroy () {
        },
        destoryed(){

        },
        methods: {}
    }
</script>
