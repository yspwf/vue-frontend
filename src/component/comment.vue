<template>
    <div>
     <div class="newslist" v-for="(item, index) in comments">
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
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:[
        'comments'
    ]
}
</script>

<style scoped>
     .newslist{
        border-bottom: 1px solid #d8d8d8;
        padding: 0.3rem 0;
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
    }
    .newslist .comment label{
        color: #41bb51;
    }
</style>