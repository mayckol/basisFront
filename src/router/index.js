import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Register from "@/components/Auth/Register.vue";
import Login from "@/components/Auth/Login.vue";
import Logout from "@/components/Auth/Logout.vue";
import Main from "@/views/Main.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth: true,
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
