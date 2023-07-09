import { defineStore } from 'pinia';
import { searchMovies } from '../api/search';
import { useMovieStore } from './MovieStore';
import { TABS } from '../helpers/tabs';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async searchMovies(query) {
      this.loader = true;
      this.movies = await searchMovies(query);
      this.loader = false;
    },
    addMovie(movie) {
      const movieStore = useMovieStore();
      movieStore.movies.unshift({ ...movie, isWatched: false });
      movieStore.activeTab = TABS.FAVORITE;
    },
  },
});
