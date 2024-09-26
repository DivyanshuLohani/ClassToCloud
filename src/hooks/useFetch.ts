import { api } from "@/constants/api";
import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { Platform } from "react-native";
import showToast from "@/components/ui/toast";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { auth } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, {
        headers: { Authorization: `Bearer ${auth?.access}` },
      });
      setData(response.data);
    } catch (e) {
      setError(`${e}`);
      showToast(`${e}`);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useFetch;
