<template>
  <main id="main">
    <canvas />
    <div class="content">
      <div class="content-inner">
        <h1 class="name">Dmytro Kostenko</h1>
        <p class="post">frontend developer</p>
        <p class="likes">Hi, I like code, food and sleep.</p>
        <MyLinks class="links" @on-mouse-enter="setLink" />
      </div>
    </div>
  </main>

  <div v-show="!isTouch" ref="cursor" class="cursor">
    <component class="cursor-icon" :is="generateLinkCursor" />
  </div>
  <HelpUkraine class="help-ukraine" @on-mouse-enter="setLink" />
</template>

<script setup lang="ts">
import HelpUkraine from "@/components/HelpUkraine/HelpUkraine.vue";
import TextRotation from "@/components/HelpUkraine/TextRotation.vue";
import { isTouchDevice } from "@/helpers";
import { computed, onMounted, ref } from "vue";
import { useCustomCursor, useCursorAnimation } from "@/composables";
import MyLinks from "@/components/MyLinks";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import type { Links } from "@/models";

const cursor = ref<Element | null>(null);
const activeLink = ref<string | null>(null);
const isTouch = ref<boolean>(false);

const setLink = (name: Links | null): void => {
  activeLink.value = name;
};

const generateLinkCursor = computed(() => {
  switch (activeLink.value) {
    case "gmail":
      return EmailIcon;
    case "linkedin":
      return LinkedinIcon;
    case "help":
      return TextRotation;
    default:
      return null;
  }
});
onMounted(async (): Promise<void> => {
  useCursorAnimation();
  isTouch.value = isTouchDevice();
  if (cursor.value) await useCustomCursor().cursorInit(cursor.value);
});
</script>

<style lang="scss">
#main {
  width: 100%;
  height: 100%;
}

.content-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--base-app-space);

  padding: var(--base-app-margin);
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

.help-ukraine {
  position: fixed;
  bottom: var(--base-app-space);
  right: var(--base-app-space);

  width: 150px;
}
</style>
