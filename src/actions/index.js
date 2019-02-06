import axios from "axios";

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const EDIT_POST_START = "EDIT_POST_START";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

const baseURL = "https://one-line-a-day-backend.herokuapp.com";

export const getPosts = () => dispatch => {
  dispatch({ type: GET_POSTS_START });
  axios
    .get(`${baseURL}/api/lines`, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => dispatch({ type: GET_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_POSTS_FAILURE, payload: err }));
};

export const addPost = newPost => dispatch => {
  dispatch({ type: ADD_POST_START });
  return axios
    .post(`${baseURL}/api/lines`, newPost, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => dispatch({ type: ADD_POST_SUCCESS, payload: res.data }))
    .then(() => getPosts()(dispatch))
    .catch(err => dispatch({ type: ADD_POST_FAILURE, payload: err }));
};

export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_POST_START });
  axios
    .delete(`${baseURL}/api/lines/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => dispatch({ type: DELETE_POST_SUCCESS, payload: res.data }))
    .then(() => getPosts()(dispatch))
    .catch(err => dispatch({ type: DELETE_POST_FAILURE, payload: err }));
};

export const editPost = (id, post) => dispatch => {
  dispatch({ type: EDIT_POST_START });
  axios
    .patch(`${baseURL}/api/lines/${id}`, post, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => dispatch({ type: EDIT_POST_SUCCESS, payload: res.data }))
    .then(() => getPosts()(dispatch))
    .catch(err => dispatch({ type: EDIT_POST_FAILURE, payload: err }));
};

export const addUser = newUser => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios
    .post(`${baseURL}/api/register`, newUser)
    .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_USER_FAILURE, payload: err }));
};

export const loginUser = loggedUser => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  return axios
    .post(`${baseURL}/api/users/login`, loggedUser)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      return dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_USER_FAILURE, payload: err }));
};
