import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE
} from "./actions";

const initialState = {
  loading: false,
  logged: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loading: true, error: null, logged: true };
    }

    case LOGIN_SUCCESS: {
      return { ...state, loading: false };
    }

    case LOGIN_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }

    case CHECK_USER: {
      return { ...state, loading: true };
    }

    case CHECK_USER_SUCCESS: {
      return { ...state, loading: false };
    }

    case CHECK_USER_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }

    default:
      return state;
  }
}
