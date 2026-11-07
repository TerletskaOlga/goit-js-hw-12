

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58470405-625d688a865bda6f5c5d5c9de';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
