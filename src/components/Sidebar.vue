<template>
  <!-- SIDEBAR -->
  <aside class="w-64 bg-gray-900 text-white hidden lg:block">
    <div class="p-5 text-2xl font-bold border-b border-gray-700">
      Admin Panel
    </div>

    <nav class="p-4 space-y-2">
      <RouterLink
        to="/dashboard"
        class="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800"
      >
        <LayoutDashboard class="w-5 h-5" />
        Dashboard
      </RouterLink>

      <RouterLink
        to="/users/create"
        class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
      >
        <Users class="w-5 h-5" />
        Users
      </RouterLink>

      <a class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
        <ShoppingCart class="w-5 h-5" />
        Orders
      </a>

      <a class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
        <BarChart3 class="w-5 h-5" />
        Reports
      </a>
    </nav>
  </aside>
</template>

<script setup>
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  LogOut,
  Wallet,
} from "lucide-vue-next";
</script>
