<template>
  <section class="tt-category">
    <HeaderList :title="title" :subtitle="subtitle"></HeaderList>
    <div class="tt-category__items">
      <TechTrendWithTitle :image="tt.image" v-for="tt in techTrends">{{tt.title}}</TechTrendWithTitle>
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

</style>
