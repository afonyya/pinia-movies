import { defineStore } from 'pinia';
const url = `${import.meta.env.VITE_API_URL}/3/search/movie`;

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(query) {
      this.loader = true;
      const urlSearchParams = new URLSearchParams({
        api_key: import.meta.env.VITE_API_KEY,
        query,
      });
      const res = await fetch(`${url}?${urlSearchParams}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
  },
});
