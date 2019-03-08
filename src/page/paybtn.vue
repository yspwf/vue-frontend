<template>
    <div class="orderbtn">
        <div class="btn_layout">
            <!-- <router-link to="/" class="server"> </router-link> -->
            <div class="server">合计: ￥<font>333</font> </div>
            <a href="javascript:void(0);" @click="pay" class="order_now">去支付</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            time:  null
        }
    },
    methods: {
        pay:function(){
             //this.$router.push({path:'/'});
            this.time = setInterval(function(){
                //this.$router.push({path:'/'});
                location.href="/";
            },2000);
        }
    },
    beforeDestroy(){
        clearInterval(this.time);
        this.time = null;
    }
}
</script>

<style scoped>
    .orderbtn{
        width:100%;
        display:flex;
        display:-webkit-flex;
        flex:1;
        position:fixed;
        bottom:0;
        left:0;
    }
    .btn_layout{
        display:flex;
        display:-webkit-flex;
        width:100%;
        background: #fff;
    }
    .btn_layout .server{
        width: 35%;
        height: 1.5rem;
        font-size: 0.5rem;
        text-align: center;
        line-height: 1.5rem;
        color: #8e8e8e;
    }
    .btn_layout .server font{
        color:red;
        font-size: 0.55rem;
    }
    .btn_layout .order_now{
        width: 65%;
        height: 1.5rem;
        text-align: center;
        font-size: 0.6rem;
        line-height: 1.5rem;
        background: #30af9e;
        color: #fff;
    }
</style>