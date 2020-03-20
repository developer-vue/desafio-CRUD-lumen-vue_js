import axios from 'axios';
import { getItem } from '@/util/localStorage';

const setBearerToken = () => {
  const headers = {};
  const token = getItem('token');

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return headers;
};

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: setBearerToken()
});

export default api;
