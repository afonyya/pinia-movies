import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    activeTab: 1,
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
