<template>
  <div class="min-h-screen flex bg-gray-100">
    <Sidebar />
    <!-- MAIN -->
    <div class="flex-1 flex flex-col">
      <!-- TOP NAV -->
      <header
        class="bg-white shadow flex items-center justify-between px-6 py-4"
      >
        <button class="lg:hidden text-2xl">☰</button>

        <h1 class="text-xl font-bold flex items-center gap-2">
          <LayoutDashboard class="w-6 h-6" />
          Dashboard
        </h1>

        <button
          class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          <LogOut class="w-5 h-5" />
          Logout
        </button>
      </header>

      <!-- CONTENT -->
      <main class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- USERS -->
          <RouterLink
            to="/users/create"
            class="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <Users class="w-10 h-10 text-blue-500" />
            <div>
              <p class="text-gray-500">Users</p>
              <h2 class="text-2xl font-bold">250</h2>
            </div>
          </RouterLink>

          <!-- ORDERS -->
          <div class="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <ShoppingCart class="w-10 h-10 text-green-500" />
            <div>
              <p class="text-gray-500">Orders</p>
              <h2 class="text-2xl font-bold">500</h2>
            </div>
          </div>

          <!-- REVENUE -->
          <div class="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <Wallet class="w-10 h-10 text-yellow-500" />
            <div>
              <p class="text-gray-500">Revenue</p>
              <h2 class="text-2xl font-bold">$8000</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
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
import Sidebar from "../components/Sidebar.vue";
</script>
