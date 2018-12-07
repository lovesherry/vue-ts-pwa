import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/index.vue';
import Collect from './views/collect/index.vue';
import Survey from './views/survey/index.vue';
import Settings from './views/settings/index.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/collect',
      children: [{
        path: 'collect',
        component: Collect,
      },
      {
        path: 'survey',
        component: Survey,
      },
      {
        path: 'settings',
        component: Settings,
      }],
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
