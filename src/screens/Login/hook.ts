/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useAuth} from '../../hooks/auth';
import {IError} from '../../interfaces/error';

interface ILoginHook {
  username: string;
  validateUsername: boolean;
  password: string;
  validatePassword: boolean;
  errorAuth: IError | null;
  enabledToSend: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setValidateUsername: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setValidatePassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleUsername: (text: string) => boolean;
  handlePassword: (text: string) => boolean;
  signIn: () => Promise<void>;
}

export const useLogin = (): ILoginHook => {
  const [username, setUsername] = useState('');
  const [validateUsername, setValidateUsername] = useState(false);
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState(false);

  const {navigate} = useNavigation();
  const {errorAuth, isLoadingAuth, signIn: signInAction} = useAuth();

  const signIn = async () => {
    const res = await signInAction({
      username: username,
      password: password,
    });
    if (res) {
      navigate('Home');
    }
  };

  const handleUsername = (text: string) => {
    if (text.length < 4) {
      return false;
    } else {
      return true;
    }
  };

  const handlePassword = (text: string) => {
    if (text.length < 6) {
      return false;
    } else {
      return true;
    }
  };

  const enabledToSend = validateUsername && validatePassword && !isLoadingAuth;

  return {
    username,
    validateUsername,
    password,
    validatePassword,
    errorAuth,
    enabledToSend,
    setUsername,
    setPassword,
    setValidateUsername,
    setValidatePassword,
    handleUsername,
    handlePassword,
    signIn,
  };
};
