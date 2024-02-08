<template>
  <main class="prose">
    <h1>Usage within script setup</h1>

    <h3>Using useClerk():</h3>

    <pre>
      loaded: {{ loaded }}
      version: {{ version }}</pre>
  </main>
</template>

<script setup lang="ts">
import { useClerk } from 'vue-clerk';

const { loaded, version } = useClerk();
</script>
