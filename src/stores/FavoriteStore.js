import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import localStorageController from '../helpers/localStorageController';

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const movies = ref([]);

  const moviesLS = localStorageController.movies.get();
  if (moviesLS) {
    movies.value = moviesLS;
  }
  watch(
    () => movies,
    (value) => {
      localStorageController.movies.set(value.value);
    },
    { deep: true },
  );

  const watchedMovies = computed(() =>
    movies.value.filter(({ isWatched }) => isWatched),
  );
  const moviesCount = computed(() => movies.value.length);
  const watchedMoviesCount = computed(() => watchedMovies.value.length);

  const toggleIsWatched = (movieId) => {
    const movie = movies.value.find(({ id }) => id === movieId);
    movie.isWatched = !movie.isWatched;
  };
  const addMovie = (movie) => {
    movies.value.unshift({ ...movie, isWatched: false });
  };
  const deleteMovie = (movieId) => {
    movies.value = movies.value.filter(({ id }) => id !== movieId);
  };

  return {
    movies,
    watchedMovies,
    moviesCount,
    watchedMoviesCount,
    toggleIsWatched,
    addMovie,
    deleteMovie,
  };
});
