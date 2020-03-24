import axios from 'axios';
import store from '../config/store';
import { errorHandler } from '../config/errors';
import { checkXSS } from './help';
import { URL_BASE, URL_HOST } from '../config/environment';


const app = axios.create({
  baseURL: `${URL_HOST}`
});

app.interceptors.request.use(
  config => {
    const state = store.getState();
    return {
      ...config,
      headers: {
        ...config.headers,
        common: {
          ...config.headers.common,
          'Content-Type': 'application/json',
        }
      },
      data: JSON.parse(checkXSS(JSON.stringify(config.data ? config.data : {})))
    };
  },
  error => { Promise.reject(errorHandler(error)) }
);

app.interceptors.response.use(
  response => {
    return response.status === 204 ? [] : JSON.parse(checkXSS(JSON.stringify(response.data)));
  },
  error => {
    return Promise.reject(errorHandler(error));
  }
);

auth.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        ...config.headers,
        common: {
          ...config.headers.common,
          'Content-Type': 'application/json',
        }
      }
    };
  },
  error => Promise.reject(errorHandler(error))
);

auth.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(errorHandler(error));
  }
);

export default app;
export { auth };
