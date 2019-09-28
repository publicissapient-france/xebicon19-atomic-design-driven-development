<template>
  <div class="discover-tts-template">
    <h1 class="discover-tts-template__title">Great list of available Tech Trends for XebiCon19!</h1>
    <TechTrendCategory
        class="discover-tts-template__category"
        :tech-trends="ttCategory.techTrends"
        :title="ttCategory.title"
        :subtitle="ttCategory.subtitle"
        :key="ttCategory.title"
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
  .discover-tts-template .discover-tts-template__title {
    color: #FE414D;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .discover-tts-template .discover-tts-template__category {
    margin-top: 50px;
  }

  .discover-tts-template .discover-tts-template__category:first-of-type {
    margin-top: 0;
  }
</style>
