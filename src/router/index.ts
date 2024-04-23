import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginForm },
    { path: '/signup', component: SignupForm }
  ]
})

export default router
