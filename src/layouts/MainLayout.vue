<template>
  <q-layout view="hHh lpr fFf">
    <q-header height-hint="98">
      <q-toolbar
        class="text-indigo-3 text-weight-bold"
        style="
          background: rgb(255, 222, 223);
          background: linear-gradient(
            0deg,
            rgba(255, 222, 223, 1) 0%,
            rgba(255, 247, 216, 1) 100%
          );
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="#546f9c"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.231 30.234c4.746-1.353 9.124-1.447 12.631 1.441M9.231 27.256c4.746-1.353 9.124-1.448 12.631 1.44M9.231 24.357c4.746-1.353 9.124-1.448 12.631 1.44M9.231 21.243c4.746-1.353 9.124-1.448 12.631 1.44M9.231 18.206c4.746-1.352 9.124-1.447 12.631 1.441"
          />
          <path
            fill="none"
            stroke="#546f9c"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m5.5 9.647l.117 28.625c6.889-2.91 13.067-2.542 18.402 1.714c5.657-3.267 11.575-5.01 18.364-1.675L42.5 9.958c-5.727-2.244-11.963-3.367-18.48 1.285C18.854 7.395 12.035 7.268 5.5 9.647"
          />
          <path
            fill="none"
            stroke="#546f9c"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.231 15.372c4.746-1.353 9.124-1.448 12.631 1.44m4.625 7.198c-.077 2.73 1.627 4.636 4.237 6.122l5.48-.657c3.441-2.47 3.41-4.841 3.303-7.21zm1.438-7.664l-1.477 4.07c1.735.102 3.566-.661 5.111 1.148l1.05-2.784c-2.432.204-3.472-1.396-4.684-2.434"
          />
        </svg>
        <q-toolbar-title class="col text-left text-weight-bold">
          App
        </q-toolbar-title>

        <div>Version: 0.9.8</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer style="height: 12%">
      <q-tabs
        style="height: 100%"
        align="justify"
        dense
        class="bg-white text-black shadow-2"
        :breakpoint="0"
      >
        <q-route-tab
          to="/"
          label="Page 1"
          style="
            width: 50%;
            border-right: solid;
            background: rgb(255, 222, 223);
            background: linear-gradient(
              0deg,
              rgba(255, 222, 223, 1) 0%,
              rgba(255, 247, 216, 1) 100%
            );
          "
        />
        <q-route-tab
          to="/page2"
          label="Page 2"
          style="
            width: 50%;
            text-wrap: wrap;
            background: rgb(255, 222, 223);
            background: linear-gradient(
              0deg,
              rgba(255, 222, 223, 1) 0%,
              rgba(255, 247, 216, 1) 100%
            );
          "
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>
