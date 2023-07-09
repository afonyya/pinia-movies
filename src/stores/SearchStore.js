import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchMovies } from '../api/search';
import { useFavoriteStore } from './FavoriteStore';
import { useTabsStore } from './TabsStore';
import { TABS } from '../helpers/tabs';

export const useSearchStore = defineStore('searchStore', () => {
  const movies = ref([]);

  const searchMovies = async (query) => {
    movies.value = await fetchMovies(query);
  };
  const addToFavorite = (movie) => {
    const favoriteStore = useFavoriteStore();
    favoriteStore.addMovie(movie);
    const tabsStore = useTabsStore();
    tabsStore.setTab(TABS.FAVORITE);
  };

  return {
    movies,
    searchMovies,
    addToFavorite,
  };
});
