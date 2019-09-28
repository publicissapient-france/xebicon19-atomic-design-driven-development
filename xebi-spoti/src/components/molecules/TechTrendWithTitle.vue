<template>
  <div class="tt-with-title">
    <TechTrendImage class="tt-with-title__image" :src="image.src" :alt="image.alt"/>
    <h3 class="tt-with-title__title"><slot></slot></h3>
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

</style>
