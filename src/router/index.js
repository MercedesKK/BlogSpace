import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserListView from '../views/UserListView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import LoginView from '../views/LoginView.vue';
import NotFound from '../views/NotFound.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/UserList/',
    name: 'UserList',
    component: UserListView
  },
  {
    path: '/UserProfile/:userId/',
    name: 'UserProfile',
    component: UserProfileView
  },
  {
    path: '/Login/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound
  },
  {
    path: '/Register/',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
