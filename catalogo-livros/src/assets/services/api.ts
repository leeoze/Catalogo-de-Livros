import axios from 'axios';

export const API_URL =
  'https://crudcrud.com/api/609287850d6b44a3baf88bb24caf1af2/livros';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;