<template>
    <div>

         <div class="welfare">
                    <div class="title">
                        <h6><i class="vertical"></i>社区动态</h6>
                    </div>
                    <div class="newslist" v-for="(item, index) in findInfo">
                            <div v-if="item.type=='news'">
                                <div class="user">
                                    <div class="userimg">
                                        <img :src="item.headimg">
                                    </div>
                                    <div class="username">
                                        <label>{{item.name}}</label>
                                        <span>23分钟前</span>
                                    </div>
                                </div>
                                <div class="content">
                                    {{item.comment}}
                                </div>
                                <div class="picturelist">
                                    <div class="picture" v-for="(item, index) in item.comment_img">
                                        <img :src="item.img">
                                    </div>
                                </div>
                                <div class="comment">
                                    <div>
                                        <label v-for="(item, index) in item.tags">#{{item}}</label>
                                    </div>
                                    <div>
                                        <router-link to="/">评论</router-link>
                                        <router-link to="/">点赞</router-link>
                                    </div>
                                </div>
                            </div>   
                            <div v-if="item.type=='active'">
                                <div class="newslist">
                                    <div class="title">
                                        <h6><i class="vertical"></i>热门用户</h6>
                                    </div>
                                    <div class="over_hidden">
                                        <div class="scroll">
                                            <div class="hot_out">
                                                <div class="hot_user">
                                                    <div class="recommend_user">
                                                        <img src="../images/headimg.png" width="4rem" height="4rem">
                                                    </div>
                                                    <label class="name">哈哈哈哈</label>
                                                    <div class="dynamic">
                                                        <label>234动态</label>
                                                        <label>234赞</label>
                                                    </div>
                                                    <div class="focus">
                                                        <input type="botton" value="+ 关注" readonly>
                                                    </div>
                                                </div>
                                                <div class="hot_user">
                                                    <div class="recommend_user">
                                                        <img src="../images/headimg.png" width="4rem" height="4rem">
                                                    </div>
                                                    <label class="name">哈哈哈哈</label>
                                                    <div class="dynamic">
                                                        <label>234动态</label>
                                                        <label>234赞</label>
                                                    </div>
                                                    <div class="focus">
                                                        <input type="botton" value="+ 关注" readonly>
                                                    </div>
                                                </div>
                                                <div class="hot_user">
                                                    <div class="recommend_user">
                                                        <img src="../images/headimg.png" width="4rem" height="4rem">
                                                    </div>
                                                    <label class="name">哈哈哈哈</label>
                                                    <div class="dynamic">
                                                        <label>234动态</label>
                                                        <label>234赞</label>
                                                    </div>
                                                    <div class="focus">
                                                        <input type="botton" value="+ 关注" readonly>
                                                    </div>
                                                </div>
                                                <div class="hot_user">
                                                    <div class="recommend_user">
                                                        <img src="../images/headimg.png" width="4rem" height="4rem">
                                                    </div>
                                                    <label class="name">哈哈哈哈</label>
                                                    <div class="dynamic">
                                                        <label>234动态</label>
                                                        <label>234赞</label>
                                                    </div>
                                                    <div class="focus">
                                                        <input type="botton" value="+ 关注" readonly>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>      


        <!-- <div class="welfare">
            <div class="title">
                <h6><i class="vertical"></i>社区动态</h6>
            </div>
          <div class="newslist">
                <div class="user">
                    <div class="userimg">
                        <img src="../images/headimg.png">
                    </div>
                    <div class="username">
                        <label>PR小董</label>
                        <span>23分钟前</span>
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
                <div class="comment">
                    <div>
                        <label>#用车心得</label>
                    </div>
                    <div>
                        <router-link to="/">评论</router-link>
                        <router-link to="/">点赞</router-link>
                    </div>
                </div>
          </div>
        </div>

            <div class="welfare">
                <div class="title">
                    <h6><i class="vertical"></i>热门用户</h6>
                </div>
                <div class="over_hidden">
                    <div class="scroll">
                            <div class="hot_out">
                                        <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>
                                            <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>

                                        <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>

                                        <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>

                                        <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>

                                        <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>

                                        <div class="hot_user">
                                            <div class="recommend_user">
                                                <img src="../images/headimg.png" width="4rem" height="4rem">
                                            </div>
                                            <label class="name">哈哈哈哈</label>
                                            <div class="dynamic">
                                                <label>234动态</label>
                                                <label>234赞</label>
                                            </div>
                                            <div class="focus">
                                                <input type="botton" value="+ 关注" readonly>
                                            </div>
                                        </div>

                            </div>
                    </div>
                </div>
            </div>     -->
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['findInfo']
}
</script>


<style scoped>
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
    .newslist,.newslist .user .username{
        flex-direction:column;
        padding:0.2rem 0;
    }
    .newslist,.newslist .user,.newslist .user .username,.newslist .picturelist,.newslist .comment{
        display: flex;
        display: -webkit-flex;
    }
    .newslist .user .userimg{
        width: 11%;
        height: 1.3rem;
    }
    .newslist .user .username{
        padding: 0 0.3rem;
    }
    .newslist .user .username label{
        font-size: 0.5rem;
        padding-top: 0.1rem;
    }
    .newslist .user .username span{
        font-size: 0.2rem;
    }
    .newslist .content{
        font-size: 0.45rem;
        padding: 0.1rem;
    }
    .newslist .picturelist{

    }
    .newslist .picture{
        height:2.5rem;
        padding:0 0.05rem;
    }
    .newslist .comment{
        font-size: 0.4rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        padding:0.2rem 0;
    }
    .newslist .comment label{
        color: #41bb51;
        padding: 0 0.2rem;
    }
    .over_hidden{
        height: 4.35rem;
        overflow: hidden;
    }
    .scroll{
        overflow-x: scroll;
        padding-bottom:0.3rem;
    }


    .hot_out{
        display:flex;
        display: -webkit-flex;
        width:130%;
    }
    .hot_user{
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        width: 35%;
        background: #efefef;
        margin: 0 0.05rem;
    }
    .hot_user .recommend_user{
        width: 34%;
        margin: 0.2rem auto 0.05rem;
    }
    .hot_user .dynamic{
        display: flex;
        display: -webkit-flex;
        font-size: 0.45rem;
        justify-content: space-around;
        color: #949494;
    }
    .hot_user .name{
        font-size: 0.5rem;
        text-align: center;
        padding: 0.1rem 0;
        color: #2b2727;
    }
    .hot_user .focus{
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        padding:0.2rem 0;
    }
    .hot_user .focus input{
        width: 50%;
        background: #26a74e;
        border: none;
        height: 0.8rem;
        text-align: center;
        color:#fff;
    }
</style>