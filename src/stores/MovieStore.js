import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 1,
        originalTitle: 'Spider-Man',
        overview:
          'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
        posterPath: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
        releaseDate: '2002-05-01',
        isWatched: false,
      },
      {
        id: 2,
        originalTitle: 'The Batman',
        overview:
          'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
        posterPath: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
        releaseDate: '2022-03-01',
        isWatched: false,
      },
    ],
    activeTab: 1,
  }),
});