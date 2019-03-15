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
        <div class="parlor">
            <div class="shop">
                <h5 class="shop_name">汽车保养门店名称</h5>
                <div class="shop_tags">
                    <div class="shop_tag"> <label>汇养车</label> <label>洗车</label> </div>
                    <div class="shop_evaluete"> <span><label>4.4</label>分</span> <span><label>433</label>单</span> </div>
                </div>
                <div class="shop_tags">
                    <div class="addr"><i></i>宝安区西街道坪洲劳动路</div>
                    <router-link to="/" class="add_map">
                        <img src="../images/icon/map.png">
                    </router-link>
                </div>
            </div>

            <div class="welfare">
                <div class="title">
                    <h6><i class="vertical"></i>选择套餐</h6>
                    <router-link to="/">更多</router-link>
                </div>
                <div class="combolist">
                    <div class="combo">
                        <div class="combo_inof">
                            <h6>标准洗车 <font>￥30</font></h6>
                            <p>支持洗车卷免费洗车</p>
                        </div>
                        <div class="combo_check">
                            <input type="checkbox" value=''>
                        </div>
                    </div>

                    <div class="combo">
                        <div class="combo_inof">
                            <h6>标准洗车 <font>￥30</font></h6>
                            <p>支持洗车卷免费洗车</p>
                        </div>
                        <div class="combo_check">
                            <input type="checkbox" value=''>
                        </div>
                    </div>

                </div>
            </div>


            <div class="welfare">
                <div class="title">
                    <h6><i class="vertical"></i>消费评价</h6>
                </div>

                <vcomment v-bind:comments="comments"></vcomment>

                <!-- <div class="newslist" v-for="(item, index) in comments">
                    <div class="user">
                        <div class="userimg">
                            <img :src="item.headimg">
                        </div>
                        <div class="username">
                            <label>{{item.name}}</label>
                            <span>{{item.time}}</span>
                        </div>
                    </div>
                    <div class="content">
                        {{item.comment}}
                    </div>
                    <div class="picturelist" v-if="item.comment_img != ''">
                        <div class="picture" v-for="(item, index) in item.comment_img">
                            <img :src="item.img">
                        </div>
                    </div>
               </div> -->

                <!-- <div class="newslist">
                    <div class="user">
                        <div class="userimg">
                            <img src="../images/headimg.png">
                        </div>
                        <div class="username">
                            <label>PR小董 </label>
                            <span>2019-02-03</span>
                        </div>
                    </div>
                    <div class="content">
                        vue的事件系统，vue组件间的单项数据流，props从父组件向子组件传递数据，子组件通过事件emit向父组件传递事件，父组件通过on监听子组件的事件来处理具体事务。
                    </div>
                    <div class="picturelist">
                        <div class="picture">
                            <img src="../images/one.jpg">
                        </div>
                        <div class="picture">
                            <img src="../images/tow.jpg">
                        </div>
                        <div class="picture">
                            <img src="../images/tow.jpg">
                        </div>
                        <div class="picture">
                            <img src="../images/tow.jpg">
                        </div>
                    </div>
               </div> -->

               <!-- <div class="newslist">
                    <div class="user">
                        <div class="userimg">
                            <img src="../images/headimg.png">
                        </div>
                        <div class="username">
                            <label>PR小董 </label>
                            <span>2019-02-03</span>
                        </div>
                    </div>
                    <div class="content">
                        vue的事件系统，vue组件间的单项数据流，props从父组件向子组件传递数据，子组件通过事件emit向父组件传递事件，父组件通过on监听子组件的事件来处理具体事务。
                    </div>
               </div> -->

              
        </div>


        </div>


        <orderbtn></orderbtn>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import orderbtn from './orderbtn.vue';
import vcomment from '../component/comment.vue';
export default {
    data(){
        return {
            a:false,
            b:[],
            comments:[
                {
                    'headimg':'./src/images/headimg.png',
                    'name':'PG玩家',
                    'time':'2019-02-03',
                    'comment':'体验好,损失过多性能的前提下可以使用现有命令来实现的功能',
                    'comment_img':[
                        {'img':'./src/images/one.jpg'},
                        {'img':'./src/images/tow.jpg'},
                        {'img':'./src/images/tow.jpg'},
                        {'img':'./src/images/one.jpg'},
                    ]
                },
                {
                    'headimg':'./src/images/headimg.png',
                    'name':'赛车俱乐部',
                    'time':'2019-02-03',
                    'comment':'对于不常用到的或者在不损失过多性能的前提下可以使用现有命令来实现的功能，Redis就不会单独提供命令来实现。这一原则使得Redis在拥有强大功能的同时保持着相对精简的命令。',
                    'comment_img':[]
                },
                {
                    'headimg':'./src/images/headimg.png',
                    'name':'PG玩家',
                    'time':'2019-02-03',
                    'comment':'体验好,损失过多性能的前提下可以使用现有命令来实现的功能',
                    'comment_img':[
                        {'img':'./src/images/one.jpg'},
                        {'img':'./src/images/tow.jpg'},
                        {'img':'./src/images/tow.jpg'},
                        {'img':'./src/images/one.jpg'},
                    ]
                },
            ]
        }
    },
    components:{
        orderbtn:orderbtn,
        vcomment:vcomment
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
    .parlor{
        padding: 0.2rem 0.5rem;
        background: #fff;
    }
    .parlor .shop{
        display:flex;
        display:-webkit-flex;
        flex-direction:column;
    }
    .parlor .shop .shop_name{
        font-size: 0.6rem;
        padding:0.2rem 0;
    }
    .parlor .shop .shop_tags,.parlor .shop .shop_tags .shop_tag,.parlor .shop .shop_tags .shop_evaluete{
        display:flex;
        display:-webkit-flex;
        padding: 0.05rem 0;
    }
    .parlor .shop .shop_tags .shop_tag label{
        padding: 0.1rem 0.2rem;
        display: inline-block;
        background: #c9eff1;
        font-size: 0.4rem;
        border-radius: 0.2rem;
        color: #086521;
        margin: 0 0.2rem 0 0;
    }
    .parlor .shop .shop_tags .shop_evaluete{
        margin-left:0.3rem;
    }
    .parlor .shop .shop_tags .shop_evaluete span{
        font-size: 0.4rem;
        padding: 0.1rem 0.1rem;
    }
    
    .parlor .shop .shop_tags .shop_evaluete label{
        color:red;
    }
    .parlor .shop .shop_tags .addr{
        font-size: 0.4rem;
        display: flex;
        display: -webkit-flex;
        width: 80%;
        height: 1rem;
        line-height: 1rem;
    }
    .parlor .shop .shop_tags .addr i{
        height:1rem;
        width:6%;
        background:url('../images/icon/addr.png') no-repeat center center;
        background-size:80%;
    }
    .parlor .shop .shop_tags  .add_map{
        width: 6%;
        height: 0.5rem;
        padding: 0.23rem 0;
        display: flex;
        display: -webkit-flex;
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
    .combolist{

    }
    .combo{
        display: flex;
        display: -webkit-flex;
        background: #e6e6e6;
        padding: 0.2rem;
        border-radius: 0.15rem;
        margin-bottom: 0.3rem;
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