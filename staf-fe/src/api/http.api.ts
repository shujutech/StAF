import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
//import { readToken } from '@app/services/localStorage.service';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

/*
httpApi.interceptors.request.use((config) => {
  config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };
  return config;
});
*/

/*
httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
});
*/

export interface ApiErrorData {
  message: string;
}

function isApiErrorData(obj: any): obj is ApiErrorData {
  return obj && typeof obj.message === 'string';
}

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response && isApiErrorData(error.response.data)) {
    throw new ApiError<ApiErrorData>(error.response.data.message, error.response.data);
  } else {
    throw new ApiError<ApiErrorData>(error.message, {} as ApiErrorData); // Providing a fallback for data
  }
});