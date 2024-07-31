import axios from "axios";

const options = {
  method: 'GET',
  url: '', 
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.request({
      ...options,
      url: `https://youtube138.p.rapidapi.com/${url}`
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchDataFromApi };
