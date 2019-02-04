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
  users: [
    {
      username: "",
      email: "",
      password: ""
    }
  ],
  posts: [
    {
      line: "",
      date: "",
      id: ""
    }
  ],
  fetchingPosts: false,
  addingPost: false,
  deletingPost: false,
  editingPost: false
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
        posts: action.payload
      };
    default:
      return { state };
  }
};

export default reducer;
