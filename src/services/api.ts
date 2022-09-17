import axios from 'axios';
import {URLS} from '../constans';

const serviceApi = axios.create({
  baseURL: URLS.BASE,
  headers: {
    Accept: 'application/json',
  },
  timeout: 4000,
});

serviceApi.interceptors.response.use(
  async response => response,
  async error => {
    if (error.response) {
      if (error.response.status === 500) {
      }
      return Promise.reject({
        code: error.code,
        message: error.message,
      });
    }
  },
);

export default serviceApi;
