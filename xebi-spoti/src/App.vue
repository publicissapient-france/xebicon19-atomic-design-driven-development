<template>
  <div class="app">
    <DiscoverTechTrendsTemplate :tt-categories="ttCategories"/>
  </div>
</template>

<script>
  import DiscoverTechTrendsTemplate from './components/templates/DiscoverTechTrendsTemplate';
  import TtCategoryService from './services/tt-categories.service';

  export default {
    name: 'app',
    components: {
      DiscoverTechTrendsTemplate
    },
    data() {
      return {
        ttCategories: [],
      };
    },
    async mounted() {
      this.ttCategories = await TtCategoryService.getTtCategories();
    }
  }
</script>

<style>
  body {
    font-family: 'Nunito', sans-serif;
    color: #666666;
    cursor: default;
  }

  h1, h2 {
    font-family: 'Oswald', sans-serif;
    color: #FE414D;
    margin: 0;
  }

  p {
    margin: 0;
  }
</style>
