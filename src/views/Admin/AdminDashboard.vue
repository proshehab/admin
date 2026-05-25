<template>
  <div class="min-h-screen flex bg-gray-100">
    <AdminSidebar />

    <div class="flex-1 flex flex-col">
      <AdminHeader />

      <main class="flex-1 p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div class="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <ShoppingCart class="w-10 h-10 text-green-500" />
            <div>
              <p class="text-gray-500">Orders</p>
              <h2 class="text-2xl font-bold">500</h2>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <Wallet class="w-10 h-10 text-yellow-500" />
            <div>
              <p class="text-gray-500">Revenue</p>
              <h2 class="text-2xl font-bold">$8000</h2>
            </div>
          </div>
        </div>
      </main>

      <AdminFooter />
    </div>
  </div>
</template>

<script setup>
import { ShoppingCart, Users, Wallet } from "lucide-vue-next";
import AdminFooter from "../../components/Admin/AdminFooter.vue";
import AdminHeader from "../../components/Admin/AdminHeader.vue";
import AdminSidebar from "../../components/Admin/AdminSidebar.vue";
</script>
