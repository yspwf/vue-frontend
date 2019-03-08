<template>
    <div class="foot">
        <div class="foot_out">
            <div class="foot_link">
                <router-link to="/home">首页</router-link>
            </div>
            <div class="foot_link">
                <router-link to="/community">社区</router-link>
            </div>
            <div class="foot_link">
                <router-link to="/mine">我的</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .foot{
        /* position:fixed;
        bottom:0;
        left:0; */
        width:100%;
        z-index:-1;
    }
    .foot_out{
        width:100%;
        z-index:1;
        display:flex;
        display:-webkit-flex;
    }
    .foot_link{
         display:flex;
        display:-webkit-flex;
        flex:1;
         z-index:99;
    }
    .foot_link a{
        width: 100%;
        text-align: center;
        display: inline-block;
        color: #333;
        height: 2rem;
        background: #fff;
        font-size: 0.6rem;
    }
</style>