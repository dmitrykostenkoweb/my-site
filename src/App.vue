<template>
  <section id="main">
    <h1 class="content name">Dmytro Kostenko</h1>
    <p class="content post">frontend developer</p>
    <p class="content likes">Hi, I like code, food and sleep.</p>
    <MyLinks class="links" @on-mouse-enter="setLink" />
    <canvas></canvas>
  </section>
  <div ref="cursor" class="cursor">
    <component class="cursor-icon" :is="generateLinkCursor" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useCustomCursor, useCursorAnimation } from "@/composables";
import MyLinks from "@/components/MyLinks";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import type { Links } from "@/models";

const cursor = ref<Element | null>(null);
const activeLink = ref<string | null>(null);

const setLink = (name: Links | null): void => {
  activeLink.value = name;
};

const generateLinkCursor = computed(() => {
  switch (activeLink.value) {
    case "gmail":
      return EmailIcon;
    case "linkedin":
      return LinkedinIcon;
    default:
      return null;
  }
});
onMounted(async (): Promise<void> => {
  useCursorAnimation();
  if (cursor.value) await useCustomCursor().cursorInit(cursor.value);
});
</script>

<style lang="scss">
#main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.name {
  font-size: var(--xxl-font-size);
  top: var(--base-app-margin);
  left: var(--base-app-margin);
}

.post {
  font-size: var(--xl-font-size);
  top: 96px;
  left: var(--base-app-margin);
}

.likes {
  font-size: var(--xl-font-size);
  top: 160px;
  left: var(--base-app-margin);
}

.links {
  position: absolute;
  top: 224px;
  left: var(--base-app-margin);
}
</style>
