import {api} from '@constants/api';
import {useEffect, useState} from 'react';
import useAuth from './useAuth';
import showToast from '@components/ui/toast';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const {auth} = useAuth();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, {
        headers: {Authorization: `Bearer ${auth?.access}`},
      });
      setData(response.data);
    } catch (e) {
      setError(`${e}`);
      showToast(`${e}`);
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error};
};

export default useFetch;
