import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchMovies } from '../api/search';
import { useFavoriteStore } from './FavoriteStore';
import { TABS } from '../helpers/tabs';

export const useSearchStore = defineStore('searchStore', () => {
  const isLoading = ref(false);
  const movies = ref([]);

  const searchMovies = async (query) => {
    isLoading.value = true;
    movies.value = await fetchMovies(query);
    isLoading.value = false;
  };
  const addToFavorite = (movie) => {
    const favoriteStore = useFavoriteStore();
    favoriteStore.movies.unshift({ ...movie, isWatched: false });
    favoriteStore.activeTab = TABS.FAVORITE;
  };

  return {
    isLoading,
    movies,
    searchMovies,
    addToFavorite,
  };
});
