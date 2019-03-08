import Vue from 'vue';
import App from './app.vue';

import './style/common.css';

/**
 * vue-router
 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import HOME from './page/home.vue';
import COMMUNITY from './page/community.vue';
import MINE from './page/mine.vue';


import FIND from './page/find.vue';
import FOCUS from './page/focus.vue';
import NEARBY from './page/nearby.vue';
import PARLOR from './page/parlor.vue';
import ORDER from './page/order.vue';

const routes = [
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component: HOME
    },{
        path:'/community',
        component: COMMUNITY,
        children:[
            {
                path:'/find',
                component:FIND
            },
            {
                path:'/focus',
                component:FOCUS
            },
            {
                path:'/nearby',
                component:NEARBY
            },
        ]
    },{
        path:'/mine',
        component: MINE
    },{
        path:'/parlor',
        component: PARLOR
    },{
        path:'/order',
        component: ORDER
    }
];

const router = new VueRouter({
      mode:'history',
      routes:routes
});

new Vue({
    el:'#app',
    router,
    template: '</App>',
    render:h=>h(App)
});