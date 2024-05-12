import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const fetchData = async () => {
  try {
    // Yalnızca is_active true olan kullanıcıları getir
    const response = await axios.get(`${API_URL}users?is_active=true`);
    return response.data;
  } catch (error) {
    console.error('Fetching active users failed:', error);
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

export const updateData = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Updating data failed:', error);
    throw error;
  }
}

export const deleteData = async (userId) => {
  try {
    // soft delete için is_active'i false olarak güncelle
    const response = await axios.put(`${API_URL}users/${userId}`, { is_active: false });
    return response.data;
  } catch (error) {
    console.error('Soft deleting user failed:', error);
    throw error;
  }
}