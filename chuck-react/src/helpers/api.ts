import { API_URL } from "../constants/url";

export const getCategories = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();
  return data;
};
