// eslint-disable-next-line import/no-extraneous-dependencies
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies

import { API_PATH } from '~/constants';

/**
 *
 * parse error response
 */
function parseError(messages: string | string[]) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ messages });
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ messages: [messages] });
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ messages: ['Request API error'] });
}

/**
 * parse response
 */
function parseBody(response: AxiosResponse) {
  //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
  if ([200, 201].includes(response.status)) {
    return response.data;
  }
  return parseError(response.data.messages);
}

/**
 * axios instance
 */
const instance = axios.create({
  baseURL: `${API_PATH}/api`,
  // paramsSerializer: {
  //   encode: (params) => {
  //     return qs.stringify(params);
  //   },
  // },
});

// request header
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const apiToken = localStorage.getItem('token') || '';

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: apiToken && `Bearer ${apiToken}`,
      },
    } as InternalAxiosRequestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response parse
instance.interceptors.response.use(
  (response) => {
    return parseBody(response);
  },
  (error) => {
    if (error.response) {
      return parseError(error.response.data);
    }
    return Promise.reject(error);
  }
);

export const http = instance;
