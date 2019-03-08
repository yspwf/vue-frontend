<template>
    <div class="orderbtn">
        <div class="btn_layout">
            <router-link to="/" class="server"> </router-link>
            <router-link to="/order" class="order_now">立即下单</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
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
        width:15%;
        height:1.5rem;
        background:url('../images/icon/server.png') no-repeat center center;
        background-size:60%;
    }
    .btn_layout .order_now{
        width: 85%;
        height: 1.5rem;
        text-align: center;
        font-size: 0.6rem;
        line-height: 1.5rem;
        background: #30af9e;
        color: #fff;
    }
</style>