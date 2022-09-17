import {useState, useEffect} from 'react';
import {IMeta} from '../../interfaces/meta';
import DefaultData from '../../utils/responseDefault.json';
import {useHome as useHomeGlobal} from '../../hooks/home';
import {IError} from '../../interfaces/error';

interface IHomeHook {
  data: IMeta | null;
  errorRetrieve: IError | null;
  isLoadingRetrieve: boolean;
}

export const useHome = (): IHomeHook => {
  const [data, setData] = useState<IMeta | null>(null);
  const {errorRetrieve, isLoadingRetrieve, retrieve} = useHomeGlobal();

  useEffect(() => {
    (async () => {
      const response = await retrieve();
      if (response) {
        setData(response);
      } else {
        setData(DefaultData as unknown as IMeta);
      }
    })();
  }, [retrieve]);

  return {
    data,
    errorRetrieve,
    isLoadingRetrieve,
  };
};
