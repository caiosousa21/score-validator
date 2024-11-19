import { useEffect, useState } from "react";
import api from "../api/api";

export const useCreditAnalysis = () => {
  const [data, setData] = useState({ persons: [], companies: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/credit-score/list").then((response) => {
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
