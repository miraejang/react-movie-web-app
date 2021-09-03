const { default: axios } = require('axios');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd317c98ada26509d995e06cc0f334961',
    language: 'en-US',
  },
});

export const movieApi = {
  popular: () => api.get('/movie/popular'),
  nowPlaying: () => api.get('/movie/now_playing'),
  upcoming: () => api.get('/movie/upcoming'),
  topRated: () => api.get('/movie/top_rated'),
};

export const tvApi = {
  popular: () => api.get('/movie/popular'),
  airingToday: () => api.get('/movie/airing_today'),
  onAir: () => api.get('/movie/on_the_air'),
  topRated: () => api.get('/movie/top_rated'),
};
