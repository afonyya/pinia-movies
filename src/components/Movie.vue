<script setup>
  import { useMovieStore } from '../stores/MovieStore';

  const props = defineProps({
    movie: {
      type: Object,
      required: true,
    },
  });
  const movieStore = useMovieStore();
  const toggleIsWatched = () => movieStore.toggleIsWatched(props.movie.id);
  const deleteMovie = () => movieStore.deleteMovie(props.movie.id);
</script>

<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.posterPath}`"
      :alt="movie.originalTitle"
      class="movie-img"
    />
    <div>
      <div class="movie-name">
        {{ movie.originalTitle }} ({{ movie.releaseDate }})
      </div>
      <span class="movie-overview">
        {{ movie.overview }}
      </span>
      <div class="movie-buttons">
        <button
          class="btn movie-buttons-watched"
          @click="toggleIsWatched"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button
          class="btn movie-buttons-delete"
          @click="deleteMovie"
        >
          Delete
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
