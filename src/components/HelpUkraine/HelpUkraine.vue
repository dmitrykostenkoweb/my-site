<template>
  <div class="help" @mouseenter="hoverLink('help')" @mouseout="hoverLink(null)">
    <a class="cursor-scale" href="https://uahelp.monobank.ua/">
      <UkrainianTraktor />
    </a>
  </div>
</template>
<script setup lang="ts">
import UkrainianTraktor from "@/components/icons/UkrainianTraktor.vue";
import type { Links } from "@/models";

const emit = defineEmits<{
  (e: "onMouseEnter", name: Links | null): void;
}>();
const hoverLink = (name: Links | null): void => emit("onMouseEnter", name);
// onMounted(() => (isTouch.value = isTouchDevice()));
</script>
<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--base-app-space);

  &__item {
    a {
      font-weight: 400;
      pointer-events: auto;
      color: white;

      &:hover {
        mix-blend-mode: normal;
      }
    }
  }
}
</style>
