<template>
    <div>
        <div class="center">
            <!-- <div class="operation">发表，留言</div> -->
            <div class="user_info">
                <div class="userimg">
                    <img :src='userInfo[0].headimg'>
                </div>
                <div class="username">
                    <h6 class="name">江小白 <label>已认证</label></h6>
                    <p class="sign">这个思路我就明白了为什么会有这样的坑，然后就将代码进行了改进</p>
                </div>
            </div>
            <div class="usercontents">
                <div class="contentslist vertical">
                    <label>23134</label>
                    <span>动态</span>
                </div>
                <div class="contentslist vertical">
                    <label>23134</label>
                    <span>关注</span>
                </div>
                <div class="contentslist">
                    <label>23134</label>
                    <span>粉丝</span>
                </div>
            </div>
        </div>

        <div class="active_out">
            <div class="active position">
                <h6>活动专区</h6>
                <div class="activelist">
                    <router-link to="/">
                        <div class="activeimg acsign">
                            <img src="../images/icon/sign.png">
                        </div>
                        <p>签到</p>
                    </router-link>

                    <router-link to="/">
                        <div class="activeimg task">
                            <img src="../images/icon/task.png">
                        </div>
                        <p>任务</p>
                    </router-link>

                    <router-link to="/">
                        <div class="activeimg invite">
                            <img src="../images/icon/invite.png">
                        </div>
                        <p>邀请</p>
                    </router-link>

                    <router-link to="/">
                        <div class="activeimg exchange">
                            <img src="../images/icon/sign.png">
                        </div>
                        <p>兑换</p>
                    </router-link>
                </div>
            </div>

            <div class="null"></div>

            <router-link to="/" class="navlist"> <p><i class="navicon order"></i> 我的订单</p> <font> <span class="notice">剩余4次保养</span> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon money"></i> 我的订单</p> <font> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon garage"></i>我的订单</p> <font> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon number"></i>我的订单</p> <font> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon refule"></i>我的订单</p> <font> > </font></router-link>
        </div>

        <div class="navs">
            <router-link to="/" class="navlist"> <p><i class="navicon order"></i> 我的订单</p> <font> <span class="notice">剩余4次保养</span> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon money"></i> 我的订单</p> <font> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon garage"></i>我的订单</p> <font> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon number"></i>我的订单</p> <font> > </font></router-link>
            <router-link to="/" class="navlist"> <p><i class="navicon refule"></i>我的订单</p> <font> > </font></router-link>
        </div>


        <vfoot></vfoot>
    </div>
</template>

<script>
import vfoot from '../component/bottom.vue';
export default {
    data(){
        return {
            msg:'home',
            userInfo:[
                {headimg:'./src/images/headimg.jpg'}
            ]
        }
    },
    components:{
        vfoot:vfoot
    }
}
</script>

<style scoped>
    .center{
        padding: 0.3rem 0.5rem 1rem;
        background:#2ac393;
    }
    .operation{
        font-size: 0.5rem;
        text-align: right;
        padding: 0.5rem 0.4rem;
    }
    .user_info{
        display: flex;
        display: -webkit-flex;
    }
    .user_info .userimg{
        width: 20%;
        border: 5px solid #88dad1;
        border-radius: 50%;
    }
    .user_info .userimg img{
        border-radius: 50%;
    }
    .user_info .username{
        width: 80%;
        padding: 0.2rem 0 0 0.3rem;
    }
    .user_info .username .name{
        font-size: 0.6rem;
        padding-bottom: 0.2rem;
        color: #efefef;
    }
    .user_info .username .name label{
        font-size: 0.25rem;
        background: #afdace;
        padding: 0.05rem 0.15rem;
    }
    .user_info .username .sign{
        font-size: 0.45rem;
        color: #e4e4e4;
    }

    .usercontents{
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        padding: 0.8rem 0;
    }
    .usercontents .contentslist{ 
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        position:relative;
        width: 33.33333%;
    }
    .usercontents .vertical::after{
        content: '';
        display: block;
        height: 0.5rem;
        width: 0;
        border: 1px solid #efefef;
        position: absolute;
        right: 0;
        top: 0.5rem;
    }
    .usercontents .contentslist label{
        font-size: 0.5rem;
        color: #fff;
        width: 100%;
        text-align: center;
        padding-bottom: 0.1rem;
    }
    .usercontents .contentslist span{
        font-size: 0.4rem;
        color: #eaeaea;
        width: 100%;
        text-align: center;
    }
    .active_out{
        padding:0 0.3rem;
        background:#fff;
    }

    .active_out{
        padding: 0 0.3rem;
        background: #fff;
        position:relative;
    }
    .active{
        border: 1px solid #e2e2e2;
        border-radius: 0.12em;
        box-shadow: -1px 2px 1px 0px #e2e2e2;
        width: 87%;
        margin: 0 auto;
        position: absolute;
        top: -1.1rem;
        left: 5%;
        padding: 0.2rem;
        background: #fff;
    }
    .active h6{
        padding: 0.2rem 0;
        font-size: 0.55rem;
        color: #2d2d2d;
    }
    .active .activelist{
        display: flex;
        display: -webkit-flex;
    }
    .active .activelist a{
        width: 25%;
        text-align: center;
        padding: 0.3rem;
    }
    .active .activelist .activeimg{
        padding: 0.3rem;
        width: 40%;
        height: 1rem;
        margin: 0 auto;
    }
    .active .activelist .activeimg img{
        vertical-align:inherit;
    }
    .active .activelist p{
        font-size: 0.45rem;
        padding: 0.2rem 0;
    }
    .acsign{
        background:#5b74f3;
    }
    .task{
        background:#fb6363;
    }
    .invite{
        background: #ff9447;
    }
    .exchange{
        background: #6dff79;
    }

    .null{
        height: 4.5rem;
    }

    .navlist{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        font-size: 0.55rem;
        padding: 0.3rem 0.1rem;
        border-bottom: 1px solid #e2e2e2;
        margin: 0.3rem 0;
        height: 0.8rem;
        line-height: 0.9rem;
    }
    .navlist p{
        display: flex;
        display: -webkit-flex;
        width:70%;
    }
    .navlist .navicon{
        display: inline-block;
        width: 9%;
        margin-right: 0.1rem;
    }
    .navlist .notice{
        font-size: 0.3rem;
        color: red;
    }
    .navlist .order{
        background:url('../images/icon/order.png') no-repeat center center; 
        background-size:100%;
    }
    .navlist .money{
        background:url('../images/icon/money.png') no-repeat center center; 
        background-size:100%;
    }
    .navlist .number{
        background:url('../images/icon/number.png') no-repeat center center; 
        background-size:100%;
    }
    .navlist .garage{
        background:url('../images/icon/garage.png') no-repeat center center; 
        background-size:100%;
    }
    .navlist .refule{
        background:url('../images/icon/refuel.png') no-repeat center center; 
        background-size:100%;
    }
    .navs{
        padding: 0 0.3rem;
        background: #fff;
    }
</style>