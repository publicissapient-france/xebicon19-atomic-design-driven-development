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

</style>
