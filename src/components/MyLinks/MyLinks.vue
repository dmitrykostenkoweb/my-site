<template>
  <ul class="link">
    <li
      v-for="item in prepareLinksData"
      :key="item.name"
      class="links__item"
      @mouseenter="hoverLink(item.name)"
      @mouseout="hoverLink(null)"
    >
      <a class="cursor-scale" :href="item.link" target="_blank">
        <component v-if="isTouch" :is="item.iconComponent" />
        <p v-else>{{ item.filled }}</p>
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { isTouchDevice } from "@/helpers";
import { computed, onMounted, ref } from "vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import type { Links } from "@/models";

type PrepareLinksData = {
  name: Links;
  filled: string;
  link: string;
  iconComponent: any;
};

const emit = defineEmits<{
  (e: "onMouseEnter", name: Links | null): void;
}>();
const hoverLink = (name: Links | null): void => emit("onMouseEnter", name);
const isTouch = ref<boolean>(false);

const prepareLinksData = computed((): PrepareLinksData[] => [
  {
    name: "gmail",
    filled: "Contact me by email",
    link: "mailto:dmitrykostenkoweb@gmail.com",
    iconComponent: EmailIcon,
  },
  {
    name: "linkedin",
    filled: "Massage me on Linkedin",
    link: "https://www.linkedin.com/in/dmitry-kostenkoweb/",
    iconComponent: LinkedinIcon,
  },
]);
onMounted(() => (isTouch.value = isTouchDevice()));
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
      //text-decoration: none;
      //-webkit-text-stroke: 1px white;
      pointer-events: auto;
      color: white;

      &:hover {
        mix-blend-mode: normal;
      }
    }
  }
}
</style>
