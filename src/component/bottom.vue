<template>
    <div id="app">
           <div class="nav">
            <router-link class="nav-item" to="/home">首页</router-link>
            <router-link class="nav-item" to="/find">社区</router-link>
            <router-link class="nav-item" to="/mine">我的</router-link>
            </div>
    </div>
</template>

<style>
   #app{
     /* height: 100%; */
     display: flex;
     display: -webkit-flex;
     flex-direction: column;
     flex: 1;
     position: fixed;
     width: 100%;
     bottom: 0;
   
   }
   .nav{
     height: 80px;
     line-height: 80px;
     display: flex;
     display: -webkit-flex;
     text-align: center;
     background: #efefef;
   }
   .nav-item{
     flex: 1;
     text-decoration: none;
     font-size:0.6rem;
   }
   .nav-item:link,.nav-item:visited{
    background-color: white;
     color: black;
   }
  .nav-item:hover,.nav-item:active{
     color: white;
     background-color: #C8C6C6;
   }
 
</style>