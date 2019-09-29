<template>
  <img :src="src" :alt="alt" class="tt-image">
</template>

<script>
  export default {
    name: 'TechTrendImage',
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
      },
    }
  }
</script>

<style scoped>
  .tt-image {
    height: 200px;
    width: 150px;
    border-radius: 2px;
    transition: 200ms filter ease-out;
  }
  .tt-image:hover {
    filter: sepia(.6);
  }
</style>
