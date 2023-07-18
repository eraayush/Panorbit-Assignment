import { API_FAILURE, API_SUCCESS, LOADING, LAST_LOGGED_USERS, CURRENT_LOGIN } from '../actionTypes';

export const onLoading = (data) => ({
  type: LOADING,
  payload: data,
});

export const apiSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data,
});

export const apiFailure = (data) => ({
  type: API_FAILURE,
  payload: data,
});

export const setLastLoggedUsers = (data) => ({
  type: LAST_LOGGED_USERS,
  payload: data,
});

export const setCurrentUser = (data) => ({
  type: CURRENT_LOGIN,
  payload: data,
});
