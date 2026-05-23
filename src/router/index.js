import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import UserForm from "../views/UserForm.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import AdminDashboard from "../views/Admin/AdminDashboard.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/admin/login",
    component: AdminLogin,
  },

  {
    path: "/admin/dashboard",
    component: AdminDashboard,
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
