<template>
  <div class="min-h-screen grid md:grid-cols-2">
    <!-- Left Side Image -->
    <div class="relative hidden md:block">
      <!-- Change image anytime -->
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        alt="Login Background"
        class="w-full h-screen object-cover"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/40 flex items-center justify-center"
      >
        <div class="text-white text-center px-10">
          <h1 class="text-5xl font-bold">Welcome Back</h1>

          <p class="mt-4 text-lg">
            Manage your application from a modern dashboard
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side Login -->
    <div class="flex items-center justify-center bg-base-100 p-8">
      <div class="w-full max-w-md">
        <h2 class="text-4xl font-bold mb-2">Admin Login</h2>

        <p class="text-gray-500 mb-8">Sign in to access your dashboard</p>

        <div class="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            class="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Enter Password"
            class="input input-bordered w-full"
          />

          <button class="btn btn-primary w-full" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  router.push("/dashboard");
};
</script>
