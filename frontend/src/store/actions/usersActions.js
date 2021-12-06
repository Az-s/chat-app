import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";
import {toast} from "react-toastify";

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const CLEAR_ERROR_USER = 'CLEAR_ERROR_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const registerUserRequest = () => ({type: REGISTER_USER_REQUEST});
export const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, payload: user});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, payload: error});

export const loginUserRequest = () => ({type: LOGIN_USER_REQUEST});
export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, payload: user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, payload: error});

export const clearErrorUser = () => ({type: CLEAR_ERROR_USER});

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = () => ({ type: FETCH_USERS_FAILURE });

export const registerUser = userData => {
  return async dispatch => {
    try {
      dispatch(registerUserRequest());
      const response = await axiosApi.post('/users', userData);
      dispatch(registerUserSuccess(response.data));
      dispatch(historyPush('/'));
      toast.success('Registration successful');
    } catch (error) {
      toast.error(error.response.data.global);
      dispatch(registerUserFailure(error.response.data));
    }
  };
};

export const loginUser = userData => {
  return async dispatch => {
    try {
      dispatch(loginUserRequest());
      const response = await axiosApi.post('/users/sessions', userData);
      dispatch(loginUserSuccess(response.data.user));
      dispatch(historyPush('/'));
      toast.success('Login successful');
    } catch (error) {
      toast.error(error.response.data.global);
      dispatch(loginUserFailure(error.response.data));
    }
  };
};

export const googleLogin = googleData => {
  return async dispatch => {
    try {
      const response = await axiosApi.post('/users/googleLogin', {
        tokenId: googleData.tokenId,
        googleId: googleData.googleId,
      });
      dispatch(loginUserSuccess(response.data.user));
      dispatch(historyPush('/'));
      toast.success('Login successful');
    } catch (error) {
      toast.error(error.response.data.global);
      dispatch(loginUserFailure(error.response.data));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await axiosApi.delete('/users/sessions');
    dispatch({type: LOGOUT_USER});
    dispatch(historyPush('/'));
  };
};

export const fetchUsers = () => {
  return async dispatch => {
      try {
          dispatch(fetchUsersRequest());
          const response = await axiosApi.get('/users');
          dispatch(fetchUsersSuccess(response.data));
      } catch (error) {
          dispatch(fetchUsersFailure(error));
      }
  }
};