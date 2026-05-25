import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || '/';

export const axiosClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

export function createJsonOptions({
  method = 'GET',
  body,
  headers = {},
  ...rest
} = {}) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    ...rest,
  };

  if (body !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}
