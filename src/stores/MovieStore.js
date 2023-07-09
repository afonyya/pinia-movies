import { defineStore } from 'pinia';
import { TABS } from '../helpers/tabs';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    activeTab: TABS.FAVORITE,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter(({ isWatched }) => isWatched);
    },
    moviesCount() {
      return this.movies.length;
    },
    watchedMoviesCount({ watchedMovies }) {
      return watchedMovies.length;
    },
  },
  actions: {
    setActiveTab(value) {
      this.activeTab = value;
    },
    toggleIsWatched(movieId) {
      const movie = this.movies.find(({ id }) => id === movieId);
      movie.isWatched = !movie.isWatched;
    },
    deleteMovie(movieId) {
      this.movies = this.movies.filter(({ id }) => id !== movieId);
    },
  },
});
