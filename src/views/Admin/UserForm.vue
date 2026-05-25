<template>
  <div class="min-h-screen flex bg-gray-100">
    <AdminSidebar />

    <div class="flex-1 flex flex-col">
      <AdminHeader />

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
      <AdminFooter />
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
import AdminHeader from "../../components/Admin/AdminHeader.vue";
import AdminSidebar from "../../components/Admin/AdminSidebar.vue";
import AdminFooter from "../../components/Admin/AdminFooter.vue";

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
