<template>
  <nav class="border-b border-gray-200 bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="-my-px flex space-x-8">
            <router-link custom :to="{ name: 'home' }" v-slot="{ isActive, href, navigate }">
              <a
                class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                :href="href"
                @click="navigate"
                :class="
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                "
              >
                Home
              </a>
            </router-link>

            <router-link custom :to="{ name: 'products' }" v-slot="{ isActive, href, navigate }">
              <a
                  class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                  :href="href"
                  @click="navigate"
                  :class="
                  isActive
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                "
              >
                Products
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="py-10">
    <main>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ClerkLoading>
          <div>Clerk is loading...</div>
        </ClerkLoading>

        <ClerkLoaded>
          <RouterView />
        </ClerkLoaded>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ClerkLoaded, ClerkLoading } from 'vue-clerk'
</script>
