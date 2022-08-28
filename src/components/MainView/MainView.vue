<template>
  <section class="main-view-wrapper">
    <WelcomeCaption class="default-position welcome" />
    <PostCaption class="default-position post" />
    <WorkplacePopup />
  </section>
  <section class="main-view-wrapper"></section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import WelcomeCaption from "@/components/WelcomeCaption";
import PostCaption from "@/components/PostCaption";
import WorkplacePopup from "@/components/WorkplacePopup";

import { useAnimation } from "@/composables";

const loadAnimation = (): void => {
  useAnimation().animation("welcome", 0);
  useAnimation().animation("post", 0);
};

onMounted((): void => loadAnimation());
</script>

<style lang="scss">
.main-view-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--main-page-gap);
  width: 100vw;
  height: 100vh;
}
</style>
