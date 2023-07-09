<script setup>
  import { useFavoriteStore } from './stores/FavoriteStore';
  import { useTabsStore } from './stores/TabsStore';
  import Movie from './components/Movie.vue';
  import Search from './components/Search.vue';
  import { TABS } from './helpers/tabs';

  const favoriteStore = useFavoriteStore();
  const tabsStore = useTabsStore();
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
        :class="{ btn_green: tabsStore.tab === TABS.FAVORITE }"
        @click="tabsStore.setTab(TABS.FAVORITE)"
      >
        Favorite
      </button>
      <button
        class="btn"
        :class="{ btn_green: tabsStore.tab === TABS.SEARCH }"
        @click="tabsStore.setTab(TABS.SEARCH)"
      >
        Search
      </button>
    </div>
    <div
      v-if="tabsStore.tab === TABS.FAVORITE"
      class="movies"
    >
      <h3>Watched Movies (count: {{ favoriteStore.watchedMoviesCount }})</h3>
      <Movie
        v-for="movie in favoriteStore.watchedMovies"
        :key="movie.id"
        :movie="movie"
      />
      <h3>All Movies (count: {{ favoriteStore.moviesCount }})</h3>
      <Movie
        v-for="movie in favoriteStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div
      v-else-if="tabsStore.tab === TABS.SEARCH"
      class="search"
    >
      <Search />
    </div>
  </main>
</template>

<style scoped>
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
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
</style>
