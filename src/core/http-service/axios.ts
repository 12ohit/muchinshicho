import axios, { AxiosError, AxiosRequestHeaders } from 'axios';

// const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.API_URL : '/v1/'

export const anilistHttpRequest = axios.create();
export const malHttpRequest = axios.create();

anilistHttpRequest.interceptors.request.use(
  (config) => {
    const clonedConfig = { ...config };

    clonedConfig.baseURL = 'https://graphql.anilist.co';
    clonedConfig.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    } as unknown as AxiosRequestHeaders;

    return clonedConfig;
  },
  (error: AxiosError) => error
);

anilistHttpRequest.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log('Oh no! We got an error.');

    return Promise.reject(error);
  }
);
