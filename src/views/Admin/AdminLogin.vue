<template>
  <div class="min-h-screen grid md:grid-cols-2 font-poppins">
    <!-- LEFT SIDE: IMAGE -->
    <div class="hidden md:block relative">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        class="w-full h-screen object-cover"
        alt="Login Image"
      />

      <div
        class="absolute inset-0 bg-black/40 flex items-center justify-center"
      >
        <div class="text-white text-center px-10">
          <h1 class="text-5xl font-bold">Welcome Back</h1>
          <p class="mt-4 text-lg">
            Manage your system easily with modern dashboard
          </p>
        </div>
      </div>
    </div>

    <!-- RIGHT SIDE: FULL LOGIN -->
    <div class="flex items-center justify-center bg-gray-100 p-10">
      <div class="w-full h-full flex flex-col justify-center">
        <!-- Header -->
        <div class="mb-10 text-center">
          <h2 class="text-4xl font-bold text-gray-900">Admin Login</h2>
          <p class="text-gray-500 mt-2">Enter your credentials to continue</p>
        </div>

        <!-- FORM FULL WIDTH -->
        <form
          @submit.prevent="login"
          class="w-full max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition"
          >
            Sign in
          </button>
        </form>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
