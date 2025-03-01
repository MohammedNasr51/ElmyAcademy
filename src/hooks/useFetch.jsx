import { useState, useEffect } from "react";

export default function useFetch(fetchFn, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setisFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setisFetching(true);
      try {
          const response = await fetchFn();
          console.log('response', response);
          const error = response.error.response.data.message;
        if (error) {
          setError(error);
        } else {
          console.log('data',response)
          setData(response);
        }
      } catch (error) {
        setError(error.message);
      }
      setisFetching(false);
    };
    fetchData();
  }, [fetchFn]);

  return { data, isFetching, error };
}