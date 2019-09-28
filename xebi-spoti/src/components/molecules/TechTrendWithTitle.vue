<template>
  <div class="tt-with-title">
    <TechTrendImage class="tt-with-title__image" :src="image.src" :alt="image.alt"/>
    <p class="tt-with-title__title">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  import TechTrendImage from '../atoms/TechTrendImage';

  export default {
    name: 'TechTrendWithTitle',
    components: {TechTrendImage},
    props: {
      image: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .tt-with-title {
    text-align: center;
    cursor: pointer;
  }

  .tt-with-title .tt-with-title__title {
    font-weight: 500;
    margin-top: 5px;
  }
</style>
