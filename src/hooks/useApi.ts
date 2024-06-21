import {useState} from 'react';

/**
 * This hook is for calling apis pass the desire api call function
 * and this hook will track data, error and loading state and returun server response.
 */

export default apiFunc => {
  const [data, setData] = useState();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args) => {
    setLoading(true);
    let response;
    try {
      response = await apiFunc(...args);
      setData(response.data);
      setError(false);
    } catch (err) {
      setError(true);
      setData(null);
    } finally {
      setLoading(false);
    }

    return response;
  };

  return {data, error, loading, request};
};
