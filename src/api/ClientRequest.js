import axios from 'axios';
import store from '../store/store';
import {logoutUser} from '../store/actions';
import {ApiConstants} from '../utils/Constants';

const logStyle = 'color:#F00;font-size:14px';

//TODO: set header and authorization
//TODO: mulipart, formData and uploading progress...

const requestHttp = ({
  method = 'get',
  url,
  data,
  tokenRequired,
  ...options
}) => {
  let token;
  if (tokenRequired) {
    token = store.getState().auth.token;
  }
  return axios({
    method,
    baseURL: ApiConstants.BASE_URL,
    url,
    data,
    headers: {
      [ApiConstants.API_HEADER_TOKEN_KEY]: `${ApiConstants.API_ACCESS_TOKEN_PREFIX}${token}`,
      'Cache-Control': 'no-cache',
    },
    ...options,
  })
    .then((response) => {
      console.log(`%chttp request ${method} response`, logStyle, response.data);
      return {result: response.data, ok: true};
    })
    .catch((e) => {
      return errorHandler(e);
    });
};

const getRequest = (options) => {
  return requestHttp({method: 'get', tokenRequired: false, ...options});
};

const postRequest = (options) => {
  return requestHttp({method: 'post', tokenRequired: true, ...options});
};

const errorHandler = (error) => {
  if (error?.response) {
    console.log('%chttp request error', logStyle, error.response);
    if (error.response.status === 401) {
      //TODO: OUTH2 implementation
      //TODO: Maybe a navigation is needed?
      store.dispatch(logoutUser());
    }
    return {result: error.response, ok: false};
  } else {
    return {result: error, ok: false};
  }
};

export {getRequest, postRequest};
