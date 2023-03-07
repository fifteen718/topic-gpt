import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/Login/index.vue';
import Home from '@/views/Home/index.vue';
import RegExp from '@/views/RegExp/index.vue';
import CodeReview from '@/views/CodeReview/index.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/regexp',
      name: 'RegExp',
      component: RegExp,
    },
    {
      path: '/codereview',
      name: 'CodeReview',
      component: CodeReview,
    },
  ],
});

export default router;
