<template>
  <h2 class="post">
    <span class="post__frontend">Frontend</span>
    <span class="post__developer">developer</span>
  </h2>
</template>
<style lang="scss">
.post {
  display: flex;
  gap: 8px;

  &__frontend {
    font-weight: bold;
    font-size: var(--big-font-size);
    background: linear-gradient(90deg, #f59e0b 39.95%, #ef4444 77.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 10;
  }

  &__developer {
    font-weight: bold;
    font-size: var(--big-font-size);
    background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 43.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 8px;
    z-index: 10;
  }
}
</style>
