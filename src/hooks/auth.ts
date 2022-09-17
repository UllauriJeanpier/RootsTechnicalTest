import {useState} from 'react';
import {ErrorException, IError} from '../interfaces/error';
import {IUser} from '../interfaces/user';
import {authService} from '../services/login';

interface AuthHook {
  errorAuth: IError | null;
  isLoadingAuth: boolean;
  signIn: (user: IUser) => Promise<boolean | undefined>;
}

export const useAuth = (): AuthHook => {
  const [errorAuth, setErrorAuth] = useState<IError | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false);

  const signIn = async (user: IUser) => {
    setIsLoadingAuth(true);
    try {
      const auth = await authService.login(user);
      if (auth instanceof ErrorException) {
        throw auth.error;
      }
      return auth;
    } catch (err: any) {
      setErrorAuth(err);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  return {
    errorAuth,
    isLoadingAuth,
    signIn,
  };
};
