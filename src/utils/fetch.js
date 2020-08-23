import axios from 'axios';

const getToken = () => {
  const token = localStorage.getItem('gallery-access-token');
  return token;
};
const baseUrl = 'https://gallery-heni.herokuapp.com/api/v1';

const BASIC_AUTH = {
  Authorization: 'Basic Z2FsbGVyeTpnYWxsZXJ5MjAyMA==',
};
const BEARER_AUTH = { Authorization: getToken() };

export const loginUser = async (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}/auth/login`, data, { headers: BASIC_AUTH })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export const getProfile = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/user/detail`, { headers: BEARER_AUTH })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};
