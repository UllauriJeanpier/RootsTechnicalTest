import serviceApi from './api';
import {ErrorException} from '../interfaces/error';

export const homeService = {
  async retrieveData() {
    try {
      const response = await serviceApi.get('/sol/meta/');
      if (response && response.data.collection) {
        return response.data;
      }
      return null;
    } catch (error: any) {
      return new ErrorException(
        error.code,
        'Home retrieve Error',
        error.message,
      );
    }
  },
};
