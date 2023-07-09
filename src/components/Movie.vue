<script setup>
  import { useMovieStore } from '../stores/MovieStore';
  import { useSearchStore } from '../stores/SearchStore';

  const props = defineProps({
    movie: {
      type: Object,
      required: true,
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
  });

  const movieStore = useMovieStore();
  const searchStore = useSearchStore();
</script>

<template>
  <div class="movie">
    <img
      v-if="movie.posterPath"
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.posterPath}`"
      :alt="movie.originalTitle"
      class="movie-img"
    />
    <div
      v-else
      class="movie-img-empty"
    >
      Not found
    </div>
    <div>
      <div class="movie-name">
        {{ movie.originalTitle }} ({{ movie.releaseDate }})
      </div>
      <span class="movie-overview">
        {{ movie.overview }}
      </span>
      <div
        v-if="!isSearch"
        class="movie-buttons"
      >
        <button
          class="btn movie-buttons-watched"
          @click="movieStore.toggleIsWatched(movie.id)"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button
          class="btn movie-buttons-delete"
          @click="movieStore.deleteMovie(movie.id)"
        >
          Delete
        </button>
      </div>
      <div
        v-else
        class="movie-buttons"
      >
        <button
          class="btn btn_green"
          @click="searchStore.addMovie(movie)"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .movie {
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 30px;
    margin-bottom: 20px;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 10px;
  }
  .movie-accept {
    margin-right: 10px;
  }
  .movie-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
  .movie-img-empty {
    width: 200px;
    height: 200px;
    text-align: center;
  }
  .movie-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .movie-overview {
    display: block;
    margin-bottom: 20px;
  }
  .movie-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .movie-buttons-watched {
    color: #fff;
    background: #1eb4c3;
  }
  .movie-buttons-watched__icon {
    width: 15px;
    margin-left: 10px;
  }
  .movie-buttons-delete {
    color: #fff;
    background: #ff2a2a;
  }
</style>
