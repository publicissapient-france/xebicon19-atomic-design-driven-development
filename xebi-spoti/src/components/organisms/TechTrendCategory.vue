<template>
  <section class="tt-category">
    <HeaderList :title="title" :subtitle="subtitle"></HeaderList>
    <div class="tt-category__items">
      <TechTrendWithTitle
          class="tt-category__item"
          :image="tt.image"
          :key="tt.title"
          v-for="tt in techTrends">{{tt.title}}
      </TechTrendWithTitle>
    </div>
  </section>
</template>

<script>
  import HeaderList from '../molecules/HeaderList';
  import TechTrendWithTitle from '../molecules/TechTrendWithTitle';

  export default {
    name: 'TechTrendCategory',
    components: {
      TechTrendWithTitle,
      HeaderList,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
      },
      techTrends: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>
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
</style>
