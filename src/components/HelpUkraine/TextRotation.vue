<template>
  <svg id="ukranian-curor" viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <path
        id="circle"
        d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
      />
    </defs>
    <text font-size="17">
      <textPath xlink:href="#circle">Help Ukraine win!</textPath>
    </text>
  </svg>
</template>
<style lang="scss" scoped>
svg {
  fill: currentColor;
  height: auto;
  max-width: 66vmin;
  transform-origin: center;
  width: 66%;
  animation: spin360 10s linear infinite;
  border-radius: 50%;
  padding: 4px;

  text {
    font-size: var(--m-font-size);
    color: white;
  }
}
</style>
