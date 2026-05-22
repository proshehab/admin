<template>
  <div class="min-h-screen flex bg-gray-100">
    <aside class="w-64 bg-gray-900 text-white hidden lg:block">
      <div class="p-5 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <nav class="p-4 space-y-2">
        <RouterLink
          to="/dashboard"
          class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <LayoutDashboard class="w-5 h-5" />
          Dashboard
        </RouterLink>

        <RouterLink
          to="/users/create"
          class="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800"
        >
          <Users class="w-5 h-5" />
          Users
        </RouterLink>

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

    <div class="flex-1 flex flex-col">
      <header
        class="bg-white shadow flex items-center justify-between px-6 py-4"
      >
        <RouterLink
          to="/dashboard"
          class="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft class="w-5 h-5" />
          Back
        </RouterLink>

        <h1 class="text-xl font-bold flex items-center gap-2">
          <UserPlus class="w-6 h-6" />
          Create User
        </h1>

        <button
          class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          <LogOut class="w-5 h-5" />
          Logout
        </button>
      </header>

      <main class="p-8">
        <section class="bg-white rounded-xl shadow p-6 max-w-8xl">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Business User</h2>
            <p class="text-gray-500 mt-1">
              Add a user who can help manage your business admin panel.
            </p>
          </div>

          <form
            @submit.prevent="saveUser"
            class="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Full name</label
              >
              <input
                v-model="form.name"
                type="text"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <input
                v-model="form.email"
                type="email"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Phone number</label
              >
              <input
                v-model="form.phone"
                type="tel"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Company name</label
              >
              <input
                v-model="form.company"
                type="text"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Role</label
              >
              <select
                v-model="form.role"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Sales</option>
                <option>Support</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Status</label
              >
              <select
                v-model="form.status"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700"
                >Address</label
              >
              <textarea
                v-model="form.address"
                rows="4"
                class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter business address"
              ></textarea>
            </div>

            <div
              class="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:justify-end"
            >
              <RouterLink
                to="/dashboard"
                class="text-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold"
              >
                Cancel
              </RouterLink>
              <button
                type="submit"
                class="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
              >
                Save User
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import {
  ArrowLeft,
  BarChart3,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  UserPlus,
  Users,
} from "lucide-vue-next";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  role: "Manager",
  status: "Active",
  address: "",
});

const saveUser = () => {
  alert(`User ${form.name} saved successfully.`);
};
</script>
