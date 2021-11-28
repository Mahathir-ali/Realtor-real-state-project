import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "fb386ea923msh9cc5c5f7d1f1ea4p1915d1jsn78c3440768ae",
    },
  });
  return data;
};
