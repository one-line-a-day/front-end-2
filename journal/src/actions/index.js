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

export const getPosts = () => dispatch => {
  dispatch({ type: GET_POSTS_START });
  axios
    .get("")
    .then(res => dispatch({ type: GET_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_POSTS_FAILURE, payload: err }));
};

export const addPost = newPost => dispatch => {
  dispatch({ type: ADD_POST_START });
  axios
    .post("", newPost)
    .then(res => dispatch({ type: ADD_POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_POST_FAILURE, payload: err }));
};