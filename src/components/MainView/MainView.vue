<template>
  <section class="main-view-wrapper">
    <AboutInfo class="default-position about" />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAnimation } from "@/composables";
import AboutInfo from "@/components/AboutInfo";

const isAboutAnimationComplete = computed(
  (): boolean =>
    !!useAnimation()
      .get("completeAnimations")
      .find((item: string): boolean => item === "about")
);
const generateMainViewHeight = computed((): string =>
  isAboutAnimationComplete.value ? "100vh" : "110vh"
);
onMounted((): void => useAnimation().animation("about", 0, 10));
</script>

<style lang="scss">
.main-view-wrapper {
  position: relative;

  width: 100vw;
  height: v-bind(generateMainViewHeight);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 1s ease-in-out;
}
</style>
