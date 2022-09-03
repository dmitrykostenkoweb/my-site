<template>
  <ul class="links content">
    <li
      v-for="item in prepareLinksData"
      :key="item.name"
      class="links__item"
      @mouseenter="hoverLink(item.name)"
      @mouseout="hoverLink(null)"
    >
      <a class="cursor-scale" :href="item.link" target="_blank">
        {{ item.filled }}
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { Links } from "@/models";
import { computed } from "vue";

type PrepareLinksData = { name: Links; filled: string; link: string };

const emit = defineEmits<{
  (e: "onMouseEnter", name: Links | null): void;
}>();
const hoverLink = (name: Links | null): void => emit("onMouseEnter", name);

const prepareLinksData = computed((): PrepareLinksData[] => [
  {
    name: "gmail",
    filled: "Contact me by email",
    link: "mailto:dmitrykostenkoweb@gmail.com",
  },
  {
    name: "linkedin",
    filled: "Massage me on Linkedin",
    link: "https://www.linkedin.com/in/dmitry-kostenkoweb/",
  },
]);
</script>
<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--base-app-margin);

  pointer-events: auto;

  &__item {
    a {
      font-weight: 900;
      text-decoration: none;
      -webkit-text-stroke: 1px white;
    }
  }
}
</style>
