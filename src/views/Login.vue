<template>
  <div class="min-h-screen flex justify-center items-center bg-base-200">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-center text-3xl font-bold">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          class="input input-bordered w-full"
        />

        <input
          type="password"
          placeholder="Password"
          class="input input-bordered w-full mt-3"
        />

        <button class="btn btn-primary mt-4 w-full" @click="login">
          Login
        </button>
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
