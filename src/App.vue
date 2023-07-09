<script setup>
  import { useMovieStore } from './stores/MovieStore';
  import Movie from './components/Movie.vue';
  import Search from './components/Search.vue';
  import { TABS } from './helpers/tabs';

  const movieStore = useMovieStore();
</script>

<template>
  <main>
    <header class="header">
      <img
        src="/logo.svg"
        alt="logo"
        class="header-logo"
      />
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button
        class="btn"
        :class="{ btn_green: movieStore.activeTab === TABS.FAVORITE }"
        @click="movieStore.setActiveTab(TABS.FAVORITE)"
      >
        Favorite
      </button>
      <button
        class="btn"
        :class="{ btn_green: movieStore.activeTab === TABS.SEARCH }"
        @click="movieStore.setActiveTab(TABS.SEARCH)"
      >
        Search
      </button>
    </div>
    <div
      v-if="movieStore.activeTab === TABS.FAVORITE"
      class="movies"
    >
      <h3>Watched Movies (count: {{ movieStore.watchedMoviesCount }})</h3>
      <Movie
        v-for="movie in movieStore.watchedMovies"
        :key="movie.id"
        :movie="movie"
      />
      <h3>All Movies (count: {{ movieStore.moviesCount }})</h3>
      <Movie
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div
      v-else-if="movieStore.activeTab === TABS.SEARCH"
      class="search"
    >
      <Search />
    </div>
  </main>
</template>

<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .header-logo {
    max-width: 50px;
    margin-right: 10px;
  }
  .btn {
    border: none;
    width: 100px;
    height: 40px;
    font-size: 14px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    background: #efefef;
  }
  .btn:hover {
    opacity: 0.7;
  }
  .btn_green {
    background: #37df5c;
  }
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
</style>
