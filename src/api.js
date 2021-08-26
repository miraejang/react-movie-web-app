const { default: axios } = require('axios');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd317c98ada26509d995e06cc0f334961',
    language: 'en-US',
  },
});

export const MovieAPI = {
  nowPlaying: () => api.get('/movie/now_playing'),
};
