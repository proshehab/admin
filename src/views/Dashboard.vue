<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- SIDEBAR -->
    <aside class="w-64 bg-gray-900 text-white hidden lg:block">
      <div class="p-5 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <nav class="p-4 space-y-2">
        <a class="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800">
          <LayoutDashboard class="w-5 h-5" />
          Dashboard
        </a>

        <a
          class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <Users class="w-5 h-5" />
          Users
        </a>

        <a
          class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <ShoppingCart class="w-5 h-5" />
          Orders
        </a>

        <a
          class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <BarChart3 class="w-5 h-5" />
          Reports
        </a>
      </nav>
    </aside>

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
          <div class="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <Users class="w-10 h-10 text-blue-500" />
            <div>
              <p class="text-gray-500">Users</p>
              <h2 class="text-2xl font-bold">250</h2>
            </div>
          </div>

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
</script>
