import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0ba28d6cefmsh3ef37c940c04b89p1cd0bdjsnba4f6ef0fa7f",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data
};
