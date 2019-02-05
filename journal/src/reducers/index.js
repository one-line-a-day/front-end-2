import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE
} from "../actions";

const initialState = {
  users: [],
  posts: [],
  fetchingPosts: false,
  addingPost: false,
  deletingPost: false,
  editingPost: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return {
        ...state,
        fetchingPosts: true
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        fetchingPosts: false,
        posts: action.payload
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: action.payload
      };
    case ADD_POST_START:
      return {
        ...state,
        addingPost: true
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addingPost: false,
        posts: action.payload
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addingPost: false,
        error: action.payload
      };
    case DELETE_POST_START:
      return {
        ...state,
        deletingPost: true
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletingPost: false,
        posts: action.payload
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        deletingPost: false,
        error: action.payload
      };
    case EDIT_POST_START:
      return {
        ...state,
        editingPost: true
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        editingPost: false,
        posts: action.payload
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        editingPost: false,
        error: action.payload
      };
    default:
      return { state };
  }
};

export default reducer;
