import axios, { AxiosRequestHeaders } from 'axios';

// const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.API_URL : '/v1/'

export const anilistHttpRequest = axios.create();
export const malHttpRequest = axios.create();

anilistHttpRequest.interceptors.request.use(
  (config) => {
    const clonedConfig = { ...config };

    clonedConfig.headers = {
      ...clonedConfig.headers,
      Test: 1
    } as unknown as AxiosRequestHeaders;

    return clonedConfig;
  },
  (error) => error
);

anilistHttpRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('This is error in axios interceptor for anilist', error);
  }
);
