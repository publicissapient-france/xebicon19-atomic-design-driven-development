<template>
  <div class="discover-tts-template">
    <h1 class="discover-tts-template__title">Great list of available Tech Trends for XebiCon19!</h1>
    <div class="discover-tts-template__category" :key="ttCategory.title" v-for="ttCategory in ttCategories">
      <section class="tt-category">
        <div class="header-list">
          <h2 class="header-list__title">{{ttCategory.title}}</h2>
          <p class="header-list__subtitle">{{ttCategory.subtitle}}</p>
        </div>
        <div class="tt-category__items">
          <div class="tt-category__item" :key="tt.title" v-for="tt in ttCategory.techTrends">
            <div class="tt-with-title">
              <div class="tt-with-title__image">
                <img :src="tt.image.src" :alt="tt.image.alt" class="tt-image">
              </div>
              <p class="tt-with-title__title">{{tt.title}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import TtCategoryService from '../services/tt-categories.service';

  export default {
    name: 'MonoliticPage',
    components: { },
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

  .tt-category .tt-category__items {
    display: flex;
  }

  .tt-category .tt-category__item {
    margin-left: 15px;
  }

  .tt-category .tt-category__items {
    margin-top: 20px;
  }

  .tt-category .tt-category__item:first-of-type {
    margin-left: 0;
  }

  .tt-with-title {
    text-align: center;
    cursor: pointer;
  }

  .tt-with-title .tt-with-title__title {
    font-weight: 500;
    margin-top: 5px;
  }

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
