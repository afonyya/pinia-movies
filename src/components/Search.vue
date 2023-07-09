<script setup>
  import { ref } from 'vue';
  import { useSearchStore } from '../stores/SearchStore';
  import Loader from './Loader.vue';
  import Movie from './Movie.vue';

  const searchQuery = ref('');
  const isLoading = ref(false);

  const searchStore = useSearchStore();

  const onSubmit = async () => {
    isLoading.value = true;
    await searchStore.searchMovies(searchQuery.value);
    isLoading.value = false;
  };
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="searchQuery"
      type="text"
      class="search-input"
      placeholder="Input movie"
    />
  </form>
  <Loader v-if="isLoading" />
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
