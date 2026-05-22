import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import UserForm from "../views/UserForm.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },

  {
    path: "/login",
    component: Login,
  },

  {
    path: "/dashboard",
    component: Dashboard,
  },

  {
    path: "/users/create",
    component: UserForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
