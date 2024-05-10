import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}users`);
    return response.data;
  } catch (error) {
    console.error('Fetching data failed:', error);
    throw error;
  }
}


export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}users`, data);
    return response.data;
  } catch (error) {
    console.error('Posting data failed:', error);
    throw error;
  }
}
