<template>
    <div>
        
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../images/one.jpg"></div>
              <div class="swiper-slide"><img src="../images/tow.jpg"></div>
              <div class="swiper-slide"><img src="../images/three.jpg"></div>
          </div>
          <!-- 如果需要分页器-->
          <div class="swiper-pagination"></div>
        </div>

        <div class="category">
          
          <router-link to="/" class="categor_link">
            <div class="forbid_out bgone">
              <i class="common forbid"></i>
            </div>
            <label>查违章</label>
          </router-link>
          <router-link to="/" class="categor_link">
            <div class="forbid_out bgtow">
              <i class="common wash"></i>
            </div>
            <label>优惠洗车</label>
          </router-link>
          <router-link to="/" class="categor_link">
            <div class="forbid_out bgone">
              <i class="common insurance"></i>
            </div>
            <label>买车险</label>
          </router-link>
          <router-link to="/" class="categor_link">
            <div class="forbid_out three">
              <i class="common manual"></i>
            </div>
            <label>保养手册</label>
          </router-link>
          <router-link to="/" class="categor_link">
            <div class="forbid_out three">
              <i class="common eletricize"></i>
            </div>
            <label>充电桩</label>
          </router-link>
           <router-link to="/" class="categor_link">
            <div class="forbid_out four">
              <i class="common shop"></i>
            </div>
            <label>兑换商城</label>
          </router-link>
           <router-link to="/" class="categor_link">
            <div class="forbid_out bgtow">
              <i class="common upkeep"></i>
            </div>
            <label>会员保养</label>
          </router-link>
         
         

        
        </div>

        <div class="activity">
            <img src="../images/one.jpg">
        </div>

        <div class="welfare">
          <div class="title">
            <h6><i class="vertical"></i>福利专区</h6>
            <router-link to="/">更多</router-link>
          </div>
          <div class="welfare_list">
            <router-link to="/" class="welfare_img" v-for="(item, index) in welfares">
                <img :src="item.img">
            </router-link>
          </div>
        </div>


        <div class="welfare">
          <div class="title">
            <h6><i class="vertical"></i>白拿商城</h6>
            <router-link to="/">更多</router-link>
          </div>
          <div class="product_list">
              <div class="product">
                  <router-link to="/">
                    <div class="pro_img">
                      <img src="../images/pro1.jpg">
                    </div>
                   <label class="pro_name">车载挂件</label>
                    <div class="exchange"><span>2400</span>积分</div>
                  </router-link>
              </div>
              <div class="product">
                  <router-link to="/">
                    <div class="pro_img">
                      <img src="../images/pro1.jpg">
                    </div>
                   <label class="pro_name">车载挂件</label>
                    <div class="exchange"><span>2400</span>积分</div>
                  </router-link>
              </div>
              <div class="product">
                  <router-link to="/">
                    <div class="pro_img">
                      <img src="../images/pro1.jpg">
                    </div>
                    <label class="pro_name">车载挂件</label>
                    <div class="exchange"><span>2400</span>积分</div>
                  </router-link>
              </div>
              
          </div>
        </div>



        <div class="welfare">
          <div class="title">
            <h6><i class="vertical"></i>养车门店</h6>
            <router-link to="/">更多</router-link>
          </div>

          <vshop-list v-bind:shops="shoplist"></vshop-list>
          
        </div>
      
        <vfoot></vfoot>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import vfoot from '../component/bottom.vue';
import vshopList from '../component/shops.vue';
export default {
    data(){
        return {
            msg:'home',
            welfares:[
                {img:'./src/images/red.jpg'},
                {img:'./src/images/red.jpg'},
            ],
            shoplist:[
              {
                id:1,
                shopname:'汽车保养门店名称',
                shopimg:'./src/images/three.jpg',
                evaluate:4.2,
                orders: 564,
                tags:['优惠','服务号','评分高'],
                addr:'宝安区西街道坪洲劳动路',
                distance:'333m'
              },
              {
                id:2,
                shopname:'汽车保养门店名称',
                shopimg:'./src/images/three.jpg',
                evaluate:4.2,
                orders: 564,
                tags:['优惠','服务号','评分高'],
                addr:'宝安区西街道坪洲劳动路',
                distance:'333m'
              },
              {
                id:2,
                shopname:'汽车保养门店名称',
                shopimg:'./src/images/three.jpg',
                evaluate:4.2,
                orders: 564,
                tags:['优惠','服务号','评分高'],
                addr:'宝安区西街道坪洲劳动路',
                distance:'333m'
              }
            ]
        }
    },
    mounted() {
         var mySwiper = new Swiper('.swiper-container', {
               autoplay: true,//可选选项，自动滑动
               loop:true,
             
               width:window.innerWidth,
               pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
          })

    },
    components:{
        vfoot:vfoot,
        vshopList:vshopList
    }
}
</script>

<style scoped>
   

   .swiper-container {
        width: 100%;
        height: 6rem;
        overflow: hidden;
    } 
    .swiper-slide{
        width:100% !important;
    }  
    .category{
        padding: 0.2rem;
        display: flex;
        display: -webkit-flex;
        flex-wrap:wrap;
        background: #fff;
    }
    .categor_link{
        width:20%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        margin: 0.1rem 0.3rem;
    }
    .categor_link .forbid_out{
        width: 65%;
        height: 1.5rem;
        margin: 0 auto;
        border-radius: 0.1rem;
    }
    .categor_link .bgone{
        background: #009fff;
    }
    .categor_link .bgtow{
        background: #ff9a40;
    }
    .categor_link .three{
        background: #3cbb35;
    }
    .categor_link .four{
        background: #ff7c6d;
    }
    .categor_link label{
      font-size:0.4rem;
      display: inline-block;
      text-align: center;
      width: 100%;
      padding: 0.1rem 0;
      color: #5f5f5f;
    }
    .categor_link .common{
        display:block;
        height:1.5rem;
        width:80%;
        margin: 0 auto;
    }
    .categor_link .forbid{
        background:url('../images/icon/forbid.png') no-repeat center center;
        background-size:80%;
    }
    .categor_link .wash{
        background:url('../images/icon/wash.png') no-repeat center center;
        background-size:80%;
    }
    .categor_link .insurance{
        background:url('../images/icon/insurance.png') no-repeat center center;
        background-size:80%;
    }
    .categor_link .eletricize{
        background:url('../images/icon/eletricize.png') no-repeat center center;
        background-size:80%;
    }
    .categor_link .manual{
        background:url('../images/icon/manual.png') no-repeat center center;
        background-size:80%;
    }
    .categor_link .shop{
        background:url('../images/icon/shop.png') no-repeat center center;
        background-size:80%;
    }
    .categor_link .upkeep{
        background:url('../images/icon/upkeep.png') no-repeat center center;
        background-size:80%;
    }
    .activity{
      padding:0.3rem;
      background:#fff;
      height:3rem;
      margin: 0.1rem 0;
    }
    .activity  img{
      height: inherit;
    }
    .welfare{
      padding: 0.2rem;
      background:#fff;
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
      font-size:0.5rem;
      color: #4e4e4e;
    }
    .title a{
      font-size:0.3rem;
      color: #848484;
    }
    .welfare_list{
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
    }
    .welfare_list .welfare_img{
      height:2.5rem;
      padding:0 0.2rem 0 0;
      width:49%;
    }
    .welfare_list .welfare_img img{
      height:inherit;
    }
    
    .product_list,.product_list .product a{
      display: flex;
      display: -webkit-flex;
    }
    .product_list .product{
        width: 33.333%;
        margin: 0.1rem;
        background: #efefef;
        padding: 0.2rem;
    }
    .product_list .product a{
        font-size:0.45rem;
        flex-direction:column;
        text-align:center;
    }
    .product_list .product .pro_img{
      height:4rem;
    }
    .product_list .product .pro_name{
        padding-top: 0.1rem;
    }
    .product_list .product .exchange{
        padding-bottom: 0.2rem;
        font-size: 0.4rem;
        color: #a7a7a7;
    }
</style>