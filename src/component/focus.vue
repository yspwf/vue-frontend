<template>
    <div>
         <div class="welfare" v-for="(item, index) in focusinfo">
                        <div class="newslist">
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
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:['focusinfo']
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
    .newslist,.newslist .user .username{
        flex-direction:column;
        padding:0.2rem 0;
    }
    .newslist,.newslist .user,.newslist .user .username,.newslist .picturelist,.newslist .comment{
        display: flex;
        display: -webkit-flex;
    }
    .newslist .user .userimg{
        width: 12%;
        height: 1.5rem;
    }
    .newslist .user .username{
        padding: 0 0.3rem;
    }
    .newslist .user .username label{
        font-size: 0.5rem;
        padding-top: 0.15rem;
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
        padding: 0.2rem 0;
    }
    .newslist .comment label{
        color: #41bb51;
        padding: 0 0.2rem;
    }
    .over_hidden{
        height: 4.7rem;
        overflow: hidden;
    }
    .scroll{
        overflow-x: scroll;
        padding-bottom:1rem;
    }
    .hot_out{
        display:flex;
        display: -webkit-flex;
        width:245%;
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
        width: 40%;
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