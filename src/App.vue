<template>
  <div ref="cursor" class="cursor"></div>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useCustomCursor } from "@/composables";

const cursor = ref<Element | null>(null);

onMounted(async (): Promise<void> => {
  if (cursor.value) await useCustomCursor().cursorInit(cursor.value);
});
</script>

<style></style>
