import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { TABS } from '../helpers/tabs';

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const movies = ref([]);
  const activeTab = ref(TABS.FAVORITE);

  const watchedMovies = computed(() =>
    movies.value.filter(({ isWatched }) => isWatched),
  );
  const moviesCount = computed(() => movies.value.length);
  const watchedMoviesCount = computed(() => watchedMovies.value.length);

  const setActiveTab = (value) => {
    activeTab.value = value;
  };
  const toggleIsWatched = (movieId) => {
    const movie = movies.value.find(({ id }) => id === movieId);
    movie.isWatched = !movie.isWatched;
  };
  const deleteMovie = (movieId) => {
    movies.value = movies.value.filter(({ id }) => id !== movieId);
  };

  return {
    movies,
    activeTab,
    watchedMovies,
    moviesCount,
    watchedMoviesCount,
    setActiveTab,
    toggleIsWatched,
    deleteMovie,
  };
});
