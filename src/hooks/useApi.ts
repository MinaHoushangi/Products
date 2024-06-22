import {useState} from 'react';

/**
 * This hook is for calling apis pass the desire api call function
 * and this hook will track data, error and loading state and returun server response.
 */

export default apiFunc => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args) => {
    setLoading(true);
    let response;
    try {
      response = await apiFunc(...args);

      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }

    return response;
  };

  return {error, loading, request};
};
