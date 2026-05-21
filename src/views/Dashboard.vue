<template>
  <div class="drawer lg:drawer-open">
    <input id="menu" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <div class="navbar bg-base-100 shadow">
        <label for="menu" class="btn btn-square btn-ghost lg:hidden">
          ☰
        </label>

        <div class="flex-1 px-2 text-xl font-bold">Admin Dashboard</div>

        <div>
          <button class="btn btn-error">Logout</button>
        </div>
      </div>

      <div class="p-6">
        <div class="stats shadow w-full">
          <div class="stat">
            <div class="stat-title">Users</div>

            <div class="stat-value">250</div>
          </div>

          <div class="stat">
            <div class="stat-title">Orders</div>

            <div class="stat-value">500</div>
          </div>

          <div class="stat">
            <div class="stat-title">Revenue</div>

            <div class="stat-value">$8000</div>
          </div>
        </div>
      </div>
    </div>

    <div class="drawer-side">
      <label for="menu" class="drawer-overlay"></label>

      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <li>
          <a>Dashboard</a>
        </li>

        <li>
          <a>Users</a>
        </li>

        <li>
          <a>Orders</a>
        </li>

        <li>
          <a>Reports</a>
        </li>
      </ul>
    </div>
  </div>
</template>
