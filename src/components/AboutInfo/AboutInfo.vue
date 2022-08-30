<template>
  <div class="about">
    <div class="about__info">
      <WelcomeCaption />
      <PostCaption />
      <p class="about__info-description">
        I am very passionate about interface development while taking into
        consideration the latest trends and technologies.
      </p>
      <a
        class="about__info-workplace cursor-scale small"
        href="https://pixeltechnology.com/"
      >
        Currently working at
        <img
          class="cursor-scale small"
          src="https://pixeltechnology.com/wp-content/themes/pixel-mediaweb/images/pixel-logo-top.svg"
          alt="pixel-logo"
        />
      </a>
    </div>
    <Transition name="bounce">
      <img
        v-show="isAboutAnimationComplete"
        class="about-info__img"
        src="@/assets/img/Dima.png"
        alt="Dmytro Kostenko"
      />
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useAnimation } from "@/composables";
import WelcomeCaption from "@/components/WelcomeCaption";
import PostCaption from "@/components/PostCaption";

const isAboutAnimationComplete = computed(
  (): boolean =>
    !!useAnimation()
      .get("completeAnimations")
      .find((item: string): boolean => item === "about")
);
</script>
<style lang="scss">
.about {
  width: 80vw;
  min-height: 80vh;
  padding: 32px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--base-app-space);

  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--base-radius);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &__info {
  }

  &__info-description {
    max-width: 30vw;
    font-weight: bold;
    line-height: 1.5;
    margin-top: var(--base-app-space);
  }

  &__info-workplace {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--black);
    font-weight: bold;
    line-height: 1.5;

    img {
      width: 100px;
      margin-left: 8px;
    }
  }

  &__img {
    width: 30vw;
  }
}
</style>
