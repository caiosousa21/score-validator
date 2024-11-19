import { useEffect, useState } from "react";
import api from "../api/api";
import ENDPOINTS from "../utils/endpoints";

export const useCreditAnalysis = () => {
  const [data, setData] = useState({ persons: [], companies: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(ENDPOINTS.list.url).then((response) => {
      setData(response.data);
      setLoading(false);
      console.log("Fetched data:", response.data);
    });
  }, []);
  return {
    data,
    loading,
  };
};
