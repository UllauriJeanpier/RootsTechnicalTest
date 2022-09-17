import {ErrorException} from '../interfaces/error';
import {IUser} from '../interfaces/user';
import serviceApi from './api';

export const authService = {
  async login(body: IUser) {
    try {
      const response = await serviceApi.get('/user/users/', {
        auth: {
          username: body.username,
          password: body.password,
        },
      });
      return true;
    } catch (error: any) {
      return new ErrorException(error.code, 'Auth Error', error.message);
    }
  },
};
