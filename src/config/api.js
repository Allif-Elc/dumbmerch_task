import axios from "axios";

//Create base URL
export const API = axios.create({
    baseURL: 
      process.env.SERVER_URL ||
      "https://dumbmerch-be33.herokuapp.com/api/v1/"||
      "http://localhost:5000/api/v1/",
});

//Set Auth token header
export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        delete API.defaults.headers.commin["Authorization"];
      };
};

export const API_query = () => {
  const baseUrl = 
    process.env.SERVER_URL ||
    "https://dumbmerch-be33.herokuapp.com/api/v1/"||
    "http://localhost:5000/api/v1/";


  const executeAPI = async (endpoint, config) => {
    const response = await fetch(baseUrl + endpoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    patch: executeAPI,
    delete: executeAPI,
  };
};