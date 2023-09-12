import axios from "axios";
import { API_URL } from "../constants/url";
import { IJoke } from "../types/joke";

export const getCategories = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const GetJoke = async (value: string) => {
  if (value === "random") {
    const { data } = await axios.get(`${API_URL}/random`);
    return data;
  }
  const { data } = await axios.get<IJoke>(
    `${API_URL}/random?category=${value}`
  );
  return data;
};
