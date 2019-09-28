<template>
  <div class="header-list">
    <h2 class="header-list__title">{{title}}</h2>
    <p class="header-list__subtitle">{{subtitle}}</p>
  </div>
</template>

<script>
  export default {
    name: 'HeaderList',
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
      },
    },
  }
</script>

<style scoped>
</style>
