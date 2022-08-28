<template>
  <div v-if="isPopupVisible" class="workplace">
    <p>Currently working at</p>
    <a class="cursor-scale small" href="https://pixeltechnology.com/">
      <img
        src="https://pixeltechnology.com/wp-content/themes/pixel-mediaweb/images/pixel-logo-top.svg"
        alt="pixel-logo"
      />
    </a>
  </div>
</template>
<script setup lang="ts">
import { useAnimation } from "@/composables";
import { ref, watch } from "vue";

const isPopupVisible = ref<boolean>(false);
const { completeAnimations } = useAnimation();

watch(
  (): string[] => completeAnimations.value,
  (arr): void => {
    arr.find((item: string): void => {
      if (item === "post") isPopupVisible.value = true;
    });
    console.log(isPopupVisible);
  },
  { immediate: true }
);
</script>
<style lang="scss">
.workplace {
  position: absolute;
  right: -50px;
  bottom: -50px;

  width: fit-content;
  padding: var(--base-padding);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--base-app-gap);

  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--base-radius);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  p {
    //font-weight: 600;

    font-size: var(--small-font-size);
  }

  img {
    width: 80px;
  }
}
</style>
