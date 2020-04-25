import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../layout/index';
import Login from '../views/Login';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: '登录页',
    component: Login,
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: '导航页',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
