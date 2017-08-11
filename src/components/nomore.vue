<style scoped>
    .nomore-warp {
        width: 100%;
        text-align: center;
    }
    .nomore {
        /*background: #f2f2f2;*/
        text-align: center;
        height: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .28rem;
        color: rgb(39,39,39);
    }

    .nomore i {
        display: inline-block;
        height: 0.41rem;
        width: 0.41rem;
        background:url("https://img.alicdn.com/imgextra/i4/1876943437/TB2COHPe88kpuFjSspeXXc7IpXa_!!1876943437.jpg") center center / cover;
    }
    .nomore span {
        padding-left: 0.24rem;
    }
</style>
<template>
    <div class="nomore-warp">
        <div class="nomore">
            <i></i>
            <span>
                <slot></slot>
            </span>
        </div>
    </div>
</template>
