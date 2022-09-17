import {useState, useCallback} from 'react';
import {ErrorException, IError} from '../interfaces/error';
import {IMeta} from '../interfaces/meta';
import {homeService} from '../services/home';

interface HomeHook {
  errorRetrieve: IError | null;
  isLoadingRetrieve: boolean;
  retrieve: () => Promise<IMeta | null>;
}

export const useHome = (): HomeHook => {
  const [errorRetrieve, setErrorRetrieve] = useState<IError | null>(null);
  const [isLoadingRetrieve, setIsLoadingRetrieve] = useState(false);

  const retrieve = useCallback(async () => {
    setIsLoadingRetrieve(true);
    try {
      const homeData = await homeService.retrieveData();
      if (homeData instanceof ErrorException) {
        throw homeData.error;
      }
      return homeData as IMeta;
    } catch (error: any) {
      setErrorRetrieve(error);
      return null;
    } finally {
      setIsLoadingRetrieve(false);
    }
  }, []);
  return {
    errorRetrieve,
    isLoadingRetrieve,
    retrieve,
  };
};
