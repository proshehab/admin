import { createRouter, createWebHistory } from "vue-router";

import UserForm from "../views/Admin/UserForm.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import AdminDashboard from "../views/Admin/AdminDashboard.vue";

const routes = [
  {
    path: "/admin/login",
    component: AdminLogin,
  },

  {
    path: "/admin/dashboard",
    component: AdminDashboard,
  },

  {
    path: "/admin/users/create",
    component: UserForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
