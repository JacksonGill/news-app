import axios from '../../_snowpack/pkg/axios.js';
const baseUrl = '/news';

const retrieveAllNews = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default {
  retrieveAllNews,
};
