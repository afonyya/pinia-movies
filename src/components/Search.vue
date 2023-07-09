<script setup>
  import { ref } from 'vue';
  import { useSearchStore } from '../stores/SearchStore';
  import Loader from './Loader.vue';
  import Movie from './Movie.vue';

  const searchQuery = ref('');
  const searchStore = useSearchStore();
</script>

<template>
  <form @submit.prevent="searchStore.searchMovies(searchQuery)">
    <input
      v-model="searchQuery"
      type="text"
      class="search-input"
      placeholder="Input movie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <template v-else>
    <Movie
      v-for="movie in searchStore.movies"
      :key="movie.id"
      :movie="movie"
      isSearch
    />
  </template>
</template>

<style scoped>
  .search-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
</style>
