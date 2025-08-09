import axios from "axios";
import { useState } from "react";

interface Data {
  id: string;
  nama: string;
  kelas: string;
  kamar: string;
}

export const useAddData = () => {
  const addData = async (url: string, data: Data) => {
    return await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });
  };
  return { addData };
};

export const useGetData = (): {
  data: Data[];
  getData: (url: string) => void;
} => {
  const [data, setData] = useState<Data[]>([]);

  const getData = async (url: string) => {
    const response = await axios.get(url);
    setData(response.data);
  };
  return { data, getData };
};
