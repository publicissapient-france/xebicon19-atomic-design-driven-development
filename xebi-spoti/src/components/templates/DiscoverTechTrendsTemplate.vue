<template>
  <div class="discover-tts-template">
    <TechTrendCategory
        :tech-trends="ttCategory.techTrends"
        :title="ttCategory.title"
        :subtitle="ttCategory.subtitle"
        v-for="ttCategory in ttCategories"/>
  </div>
</template>

<script>
  import TechTrendCategory from '../organisms/TechTrendCategory';

  export default {
    name: 'DiscoverTechTrendsTemplate',
    components: {TechTrendCategory},
    props: {
      ttCategories: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>
