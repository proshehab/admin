<template>
  <footer class="border-t border-gray-200 bg-white px-6 py-4">
    <div
      class="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>
        &copy; {{ currentYear }} Admin Panel. All rights reserved.
      </p>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <RouterLink to="/admin/dashboard" class="hover:text-gray-900">
          Dashboard
        </RouterLink>
        <RouterLink to="/users/create" class="hover:text-gray-900">
          Users
        </RouterLink>
        <a href="#" class="hover:text-gray-900">Privacy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
