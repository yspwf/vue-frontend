<template>
    <div>
              
            
            
            <!-- 
                <div class="welfare">
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
                </div> 



                 <div class="welfare">
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
                </div> 
         
        </div> -->
        <v-focusinfo v-bind:focusinfo="focuslist"></v-focusinfo>
    </div>
</template>

<script>
import vfocusinfo from '../component/focus.vue';
export default {
    data(){
        return {
            focuslist:[
                {
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
                    'headimg':'./src/images/headimg.png',
                    'name':'爱车俱乐部',
                    'time':'2019-02-03',
                    'comment':'点赞其实是一个很有意思的功能。基本的设计思路有大致两种， 一种自然是用mysql（写了几百行的代码都还没写完，有毒）啦数据库直接落地存储， 另外一种就是利用点赞的业务特征来扔到redis(或memcache)中， 然后离线刷回mysql等。我这里所讲的功能都是基于我之前的项目去说的，所以有些地方可以不用管的，我主要是记录这个功能的实现思路，当你理解了，基本想用什么鬼语言写都一样的',
                    'comment_img':[
                    ],
                    'tags':['用车心得']
                }
            ]
        }
    },
    components:{
        vFocusinfo:vfocusinfo
    }
}
</script>

