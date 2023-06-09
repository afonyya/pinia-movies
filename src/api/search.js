export const fetchMovies = async (query) => {
  const urlSearchParams = new URLSearchParams({
    api_key: import.meta.env.VITE_API_KEY,
    query,
  });
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?${urlSearchParams}`,
  );
  const data = await res.json();
  const mappedMovies = data.results.map(
    ({ poster_path, original_title, release_date, overview, id }) => ({
      posterPath: poster_path,
      originalTitle: original_title,
      releaseDate: release_date,
      overview,
      id,
    }),
  );
  return mappedMovies;
};
