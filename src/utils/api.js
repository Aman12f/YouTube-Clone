import axios from "axios";

const options = {
  method: 'GET',
  url: '', // We'll set this dynamically
  headers: {
    // 'x-rapidapi-key': 'e18779a2edmsh13d915051b753efp1304a8jsna7f155fce27c',
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
