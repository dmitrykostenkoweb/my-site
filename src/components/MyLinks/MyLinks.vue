<template>
  <ul class="links">
    <li class="links__item">
      <a
        class="cursor-scale"
        href="mailto:dmitrykostenkoweb@gmail.com"
        target="_blank"
      >
        <!--        <p class="content">Contact me by email</p>-->
        <EmailIcon class="links__icon" />
      </a>
    </li>
    <li class="links__item">
      <a
        class="cursor-scale"
        href="https://www.linkedin.com/in/dmitry-kostenkoweb/"
        target="_blank"
      >
        <!--        <p class="content">Massage me on Linkedin</p>-->
        <LinkedinIcon class="links__icon" />
      </a>
    </li>
    <li class="links__item">
      <a
        class="cursor-scale"
        href="https://github.com/dmitrykostenkoweb"
        target="_blank"
      >
        <!--        <p class="content">Look at my code</p>-->
        <GithubIcon class="links__icon" />
      </a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import EmailIcon from "@/components/icons/EmailIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
</script>
<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--base-app-space);

  &__item {
    opacity: 0.1;
    transition: 2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__icon {
    max-width: 50px;
  }
}
</style>
