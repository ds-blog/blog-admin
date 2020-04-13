import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard',
    component: Layout,
  },
  {
    path: '/dashboard',
    name: '导航页',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
