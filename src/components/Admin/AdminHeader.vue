<template>
  <header class="bg-white shadow flex items-center justify-between px-6 py-4">
    <button class="lg:hidden text-2xl" type="button">
      &#9776;
    </button>

    <h1 class="text-xl font-bold flex items-center gap-2">
      <LayoutDashboard class="w-6 h-6" />
      Dashboard
    </h1>

    <div ref="dropdownRef" class="relative">
      <button
        type="button"
        class="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50"
        @click.stop="isDropdownOpen = !isDropdownOpen"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white"
        >
          A
        </span>
        <span class="hidden text-left sm:block">
          <span class="block text-sm font-semibold text-gray-900">Admin</span>
          <span class="block text-xs text-gray-500">Administrator</span>
        </span>
        <ChevronDown class="h-4 w-4 text-gray-500" />
      </button>

      <div
        v-if="isDropdownOpen"
        class="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
      >
        <RouterLink
          to="/admin/profile"
          class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          @click="isDropdownOpen = false"
        >
          <User class="h-4 w-4" />
          Profile
        </RouterLink>

        <RouterLink
          to="/admin/settings"
          class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          @click="isDropdownOpen = false"
        >
          <Settings class="h-4 w-4" />
          Settings
        </RouterLink>

        <button
          type="button"
          class="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut class="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-vue-next";

const isDropdownOpen = ref(false);
const dropdownRef = ref(null);

const closeDropdownOnOutsideClick = (event) => {
  if (!dropdownRef.value?.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdownOnOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdownOnOutsideClick);
});
</script>
