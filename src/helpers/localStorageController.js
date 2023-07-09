export default {
  movies: {
    get() {
      return JSON.parse(localStorage.getItem('movies'));
    },
    set(value) {
      localStorage.setItem('movies', JSON.stringify(value));
    },
  },
  tab: {
    get() {
      return JSON.parse(localStorage.getItem('tab'));
    },
    set(value) {
      localStorage.setItem('tab', JSON.stringify(value));
    },
  },
};
