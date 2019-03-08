<template>
    <div class="community">
        <div class="tabs">
            <div class="tabs_title">
                <div class="tab_link">
                    <router-link to="/find">发现</router-link>
                </div>
                <div class="tab_link">
                    <router-link to="/focus">关注</router-link>
                </div>
                <!-- <div class="tab_link">
                    <router-link to="/nearby">附近</router-link>
                </div> -->
            </div>
            <div class="comment">
                <a href="javascript:void(0);" @click="comment">
                    <img src="../images/icon/comment.png">
                </a>
            </div>
        </div>

        <router-view></router-view>

       



        <vfoot></vfoot>
    </div>
</template>

<script>
import vfoot from '../component/bottom.vue';
export default {
    data(){
        return {
            msg:'home'
        }
    },
    components:{
        vfoot:vfoot
    },
    methods: {
        comment:function(){
            alert('44444');
        }
    },
}
</script>

<style scoped>
    .community{
        background:#efefef;
    }
    .tabs{
        background:#41bd6e;
        justify-content: space-between;
    }
    .tabs,.tabs .tab_link{
        display:flex;
        display:-webkit-flex;
    }
    .tabs .tabs_title{
        width: 30%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        padding: 0 0.4rem;
    }
    .tabs .tab_link a{
        color:#ececec;
        font-size:0.6rem;
        display: inline-block;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .comment{
        display: flex;
        display: -webkit-flex;
        justify-content: flex-end;
    }
    .comment a{
        width: 10%;
        display: block;
        padding: 0 0.3rem;
    }
    .comment a img{
        vertical-align: middle;
    }
    

</style>