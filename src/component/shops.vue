<template>
    <div>

          <div class="upkeep_list" v-for="(item, index) in shops">
            
            <router-link to="/parlor" class="upkeep">
              <div class="upkeep_img"><img :src="item.shopimg"></div>
              <div class="upkeep_shop">
                <h5 class="shop_name">{{item.shopname}}</h5>
                <div class="shop_evaluate"><label><span>{{item.evaluate}}</span>分</label><label><span>{{item.orders}}</span>单</label></div>
                <div class="shop_tag">
                  <label  v-for="(tag, index) in item.tags">{{tag}}</label>
                </div>
                <div class="shop_addr"><label class="saddr"><i class="addr"></i>{{item.addr}}</label><label>{{item.distance}}</label></div>
              </div>
            </router-link> 
        </div>

    </div>
   
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['shops']
}
</script>

<style scoped>
    .upkeep{
      display: flex;
      display: -webkit-flex;
      padding: 0.2rem 0;
      border-bottom: 1px solid #e2e2e2;
    }
    .upkeep .upkeep_img{
      width:40%;
    }
    .upkeep .upkeep_img img{
      border-radius: 0.2rem;
    }
    .upkeep .upkeep_img,.upkeep .upkeep_shop{
      height:3rem;
    }
    .upkeep_shop{
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      padding: 0 0.3rem;
      width: 60%;
    }
    .upkeep_shop .shop_name{
      font-size:0.5rem;
      color: #4e4e4e;
      height: 0.9rem;
      line-height: 0.8rem;
    } 
    .upkeep_shop .shop_evaluate,.upkeep_shop .shop_tag,.upkeep_shop .shop_addr{
          font-size: 0.4rem;
          height: 0.8rem;
          line-height: 0.8rem;
    }
    .upkeep_shop .shop_addr{
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
    }
    .upkeep_shop .shop_evaluate label{
      padding:0 0.2rem;
    }
    .upkeep_shop .shop_tag label{
      padding: 0 0.2rem;
      display: inline-block;
      margin: 0 0.2rem 0 0;
      border-radius: 0.1rem;
    }
    .tagone{
      background: #dcdcdc;
      color: #17c3ce;
    }
    .tagtow{
      background: #dcdcdc;
      color: #ff2858;
    }
    .tagthree{
       background: #d47e7e;
      color: #75ffcd;
    }
    .upkeep_shop .shop_evaluate span{
      color:red;
    }
    .upkeep_shop .shop_addr .saddr{
      width:80%;
      display: flex;
      display: -webkit-flex;
    }
    .upkeep_shop .shop_addr .addr{
      display: inline-block;
      width: 10%;
      height: 0.8rem;
      background:url('../images/icon/addr.png') no-repeat center center;
      background-size:80%;
    }
    
</style>