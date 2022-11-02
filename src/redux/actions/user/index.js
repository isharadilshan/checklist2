import {
  SET_USER_AUTHENTICATED,
  GET_USER_INFO,
  SET_USER_INFO,
} from '../../action-types';

export const setUserAuthenticated = payload => {
  return {type: SET_USER_AUTHENTICATED, payload};
};

export const getUserInfo = payload => {
  return {type: GET_USER_INFO};
};

export const setUserInfo = payload => {
  return {type: SET_USER_INFO, payload};
};
