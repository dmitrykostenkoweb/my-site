<template>
  <div ref="cursor" class="cursor"></div>
  <RouterView class="background" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCustomCursor } from "@/composables";

gsap.registerPlugin(ScrollTrigger);
const cursor = ref<Element | null>(null);

onMounted(async (): Promise<void> => {
  if (cursor.value) await useCustomCursor().cursorInit(cursor.value);
});
</script>

<style></style>
