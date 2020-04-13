import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import NProgress from 'nprogress'
import http from './utils/http';

import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

/**
 * 头部进度条
 */
router.beforeEach((to, from, next) => {
  NProgress.start() // 显示进度条
  next()
})
router.afterEach(() => {
  NProgress.done() // 完成进度条
})

Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
