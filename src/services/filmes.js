import axios from 'axios';

const filmes = axios.create({
  baseURL: 'https://tv-v2.api-fetch.website/movies'
});

export default filmes;