<template>
    <div>
        <div class="order">
            <div class="welfare">
                <div class="title">
                    <h6>订单信息</h6>
                    <!-- <router-link to="/">更多</router-link> -->
                </div>
                <div class="order_info">
                   <div class="info_list">
                       <font class="info_title">商家</font>
                       <font class="info_name">汽车保养门店名称</font>
                   </div>
                   <div class="info_list">
                       <font class="info_title">商品</font>
                       <font class="info_name">标准洗车</font>
                   </div>
                   <div class="info_list">
                       <font class="info_title">金额</font>
                       <font class="info_name">￥30</font>
                   </div>
                </div>
            </div>

            <div class="welfare">
                <div class="title">
                    <h6>优惠券</h6>
                    <!-- <router-link to="/">更多</router-link> -->
                </div>
                <div class="order_info">
                   <div class="info_list">
                       <font class="info_title">优惠券信息</font>
                       <font class="info_name"><router-link to="/">暂无优惠券 ></router-link></font>
                   </div>
                   
                </div>
            </div>

            <div class="welfare">
                <div class="title">
                    <h6>选择支付方式</h6>
                </div>
                <div class="combolist">
                    <div class="combo">
                        <div class="combo_inof">
                           微信支付
                        </div>
                        <div class="combo_check">
                            <input type="checkbox" value=''>
                        </div>
                    </div>

                    <div class="combo">
                        <div class="combo_inof">
                           支付宝
                        </div>
                        <div class="combo_check">
                            <input type="checkbox" value=''>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <paybtn></paybtn>
    </div>
</template>
<script>
import paybtn from './paybtn.vue';
export default {
    data(){
        return {

        }
    },
    components:{
        paybtn:paybtn
    }
}
</script>

<style scoped>
    .order{
        padding:0.3rem;
        background: #fff;
    }
    .welfare{
      padding: 0.2rem;
      background:#fff;
      margin-bottom: 0.4rem;
    }
    .title{
      display: flex;
      display: -webkit-flex;
      justify-content:space-between;
    }
    .title .vertical{
      display: block;
      height: 0.6rem;
      width: 2px;
      background: #1bc14f;
      float: left;
      margin: 0.2rem 0.1rem 0 0;
    }
    .title a{
      padding-right: 0.2rem;
    }
    .title h6,.title a{
      height:1rem;
      line-height:1rem;
    }
    .title h6{
      font-size: 0.55rem;
      color: #4e4e4e;
    }
    .title a{
      font-size:0.3rem;
      color: #848484;
    }
    .info_list{
        display: flex;
        display: -webkit-flex;
        font-size: 0.5rem;
        justify-content: space-between;
        padding: 0.5rem 0 0.15rem;
        border-bottom: 1px solid #ececec;
    }
    .info_list .info_title{
        color: #969696;
        padding:0 0.2rem;
    }
    .info_list .info_name{
        color: #2b2b2b;
        padding:0 0.2rem;
    }

    .combolist{

    }
    .combo{
        display: flex;
        display: -webkit-flex;
        background: #e6e6e6;
        padding: 0.3rem 0.2rem;
        border-radius: 0.15rem;
        margin-bottom: 0.3rem;
        font-size:0.5rem;
    }
    .combo .combo_inof{
        width:90%;
    }
    .combo .combo_inof h6{
        font-size: 0.55rem;
        padding-bottom: 0.2rem;
    }
    .combo .combo_inof h6 font{
        color:red;
    }
    .combo .combo_inof p{
        font-size: 0.4rem;
        color: #a9a9a9;
    }
    .combo .combo_check{
        width:10%;
    }
</style>