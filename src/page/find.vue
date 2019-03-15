<template>
    <div>
        <div class="welfare">
          <div class="title">
            <h6><i class="vertical"></i>热门话题</h6>
          </div>
          <div class="topic">
              <input type="button" value="用车心得" readonly>
              <input type="button" value="违章" readonly>
              <input type="button" value="吐槽" readonly>
              <input type="button" value="一路见闻" readonly>
              <input type="button" value="爆料" readonly>
              <input type="button" value="信息" readonly>
              <input type="button" value="车友爆料" readonly>
              <input type="button" value="优惠信息" readonly>
          </div>
         
        </div>

        <vfind v-bind:findInfo="findInfo"></vfind>  
      <!-- <div class="welfare" v-for="(item, index) in findInfo">
            <div class="title" v-if="item.type=='new'">
                <h6><i class="vertical"></i>社区动态</h6>
            </div>
            <div class="title" v-else-if="item.type=='active'">
                <h6><i class="vertical"></i>热门用户</h6>
            </div>

            <div v-if="item.type=='new'">
                <div class="newslist" v-for="(item, index) in item.list">
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
            </div>

             <div v-if="item.type=='active'">
              <div class="over_hidden">
                <div class="scroll">
                    <div class="hot_out">
                        <div class="hot_user" v-for="(item, index) in item.list">
                            <div class="recommend_user">
                                <img src="../images/headimg.png" width="1rem" height="1rem">
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
        </div> -->

        <!-- <div class="welfare">
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
        </div>  -->


               <!-- <div class="welfare">
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
                </div>   -->
               

            
    </div>
</template>

<script>
import vfind from '../component/find.vue';
export default {
    data(){
        return {
            findInfo:[
                        {
                            'type':'news',
                            'headimg':'./src/images/headimg.png',
                            'name':'PG玩家',
                            'time':'2019-02-03',
                            'comment':'体验好,损失过多性能的前提下可以使用现有命令来实现的功能',
                            'comment_img':[
                                {'img':'./src/images/one.jpg'},
                                {'img':'./src/images/tow.jpg'},
                                {'img':'./src/images/tow.jpg'},
                            ],
                            'tags':['用车心得','实时路况','一路心情']
                        },
                        {
                            'type':'news',
                            'headimg':'./src/images/headimg.png',
                            'name':'爱车俱乐部',
                            'time':'2019-02-03',
                            'comment':'点赞其实是一个很有意思的功能。基本的设计思路有大致两种， 一种自然是用mysql（写了几百行的代码都还没写完，有毒）啦数据库直接落地存储， 另外一种就是利用点赞的业务特征来扔到redis(或memcache)中， 然后离线刷回mysql等。我这里所讲的功能都是基于我之前的项目去说的，所以有些地方可以不用管的，我主要是记录这个功能的实现思路，当你理解了，基本想用什么鬼语言写都一样的',
                            'comment_img':[],
                            'tags':['用车心得']
                        },
                        {
                            'type':'active',
                            'name':'推荐'
                        },
                        {
                            'type':'news',
                            'headimg':'./src/images/headimg.png',
                            'name':'爱车俱乐部',
                            'time':'2019-02-03',
                            'comment':'点赞其实是一个很有意思的功能。基本的设计思路有大致两种， 一种自然是用mysql（写了几百行的代码都还没写完，有毒）啦数据库直接落地存储， 另外一种就是利用点赞的业务特征来扔到redis(或memcache)中， 然后离线刷回mysql等。我这里所讲的功能都是基于我之前的项目去说的，所以有些地方可以不用管的，我主要是记录这个功能的实现思路，当你理解了，基本想用什么鬼语言写都一样的',
                            'comment_img':[],
                            'tags':['用车心得']
                        },
                        {
                            'type':'news',
                            'headimg':'./src/images/headimg.png',
                            'name':'PG玩家',
                            'time':'2019-02-03',
                            'comment':'体验好,损失过多性能的前提下可以使用现有命令来实现的功能',
                            'comment_img':[
                                {'img':'./src/images/one.jpg'},
                                {'img':'./src/images/tow.jpg'},
                                {'img':'./src/images/tow.jpg'},
                            ],
                            'tags':['用车心得','实时路况','一路心情']
                        },
                        {
                            'type':'news',
                            'headimg':'./src/images/headimg.png',
                            'name':'爱车俱乐部',
                            'time':'2019-02-03',
                            'comment':'点赞其实是一个很有意思的功能。基本的设计思路有大致两种， 一种自然是用mysql（写了几百行的代码都还没写完，有毒）啦数据库直接落地存储， 另外一种就是利用点赞的业务特征来扔到redis(或memcache)中， 然后离线刷回mysql等。我这里所讲的功能都是基于我之前的项目去说的，所以有些地方可以不用管的，我主要是记录这个功能的实现思路，当你理解了，基本想用什么鬼语言写都一样的',
                            'comment_img':[],
                            'tags':['用车心得']
                        },
                        {
                            'type':'active',
                            'name':'推荐'
                        },
                        {
                            'type':'news',
                            'headimg':'./src/images/headimg.png',
                            'name':'PG玩家',
                            'time':'2019-02-03',
                            'comment':'体验好,损失过多性能的前提下可以使用现有命令来实现的功能',
                            'comment_img':[
                                {'img':'./src/images/one.jpg'},
                                {'img':'./src/images/tow.jpg'},
                                {'img':'./src/images/tow.jpg'},
                            ],
                            'tags':['用车心得','实时路况','一路心情']
                        },
            ]
        }
    },
    components:{
        vfind:vfind
    }
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
    .topic input{
        border: none;
        background: #4cd6b7;
        color: #fff;
        padding: 0.2rem;
    }
    .topic input:after{
        content:'';
        display:block;
    }

</style>