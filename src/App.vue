<template>
  <section id="main">
    <h1 class="content name">Dmytro Kostenko</h1>
    <p class="content likes">Hi, I like code, food and sleep.</p>
    <MyLinks class="links" />
    <!--    <canvas></canvas>-->
  </section>
  <div ref="cursor" class="cursor" />
</template>

<script setup lang="ts">
import MyLinks from "@/components/MyLinks";
import { onMounted, ref } from "vue";
import { useCustomCursor, useCursorAnimation } from "@/composables";
import EmailIcon from "@/components/icons/EmailIcon.vue";

const cursor = ref<Element | null>(null);

onMounted(async (): Promise<void> => {
  useCursorAnimation();
  if (cursor.value) await useCustomCursor().cursorInit(cursor.value);
});
</script>

<style lang="scss">
#main {
  display: flex;
  width: 100%;
  height: 100%;
}

.name {
  font-size: var(--xxl-font-size);
  top: var(--base-app-margin);
  left: var(--base-app-margin);
}

.likes {
  font-size: var(--xl-font-size);
  top: 96px;
  left: var(--base-app-margin);
}

.links {
  position: absolute;
  width: 50px;
  height: 50px;
  top: var(--base-app-margin);
  right: var(--base-app-margin);
}
</style>
