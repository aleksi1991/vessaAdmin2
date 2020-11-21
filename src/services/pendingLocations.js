import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/pending-locations`);
  return response.data;
};

const updateLocation = async (location) => {
  const response = await axios.post(baseUrl, location)
  return response.data;
}

const validateLocation = async (location) => {
  const response = await axios.delete(`${baseUrl}/pending-locations/${location._id}`)
  return response.data;
}

export default { getAll, updateLocation, validateLocation };