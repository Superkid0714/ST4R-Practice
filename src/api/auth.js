import axios from 'axios';

const BASE_URL = 'https://mentoring-mock-server.vercel.app';

export const login = async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}`, {
    username,
    password,
  });
  return response.data;
};
