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
 * 导航守卫
 * 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
 */
router.beforeEach((to, from, next) => {
  // 显示进度条
  NProgress.start()
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
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
