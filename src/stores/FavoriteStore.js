import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const movies = ref([]);

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
