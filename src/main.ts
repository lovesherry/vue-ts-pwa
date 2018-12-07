import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MuseUI from 'muse-ui';
import '../public/iconfont/iconfont.js';
import './style/common.css';
import 'muse-ui/dist/muse-ui.css';
import './registerServiceWorker';
Vue.use(MuseUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
