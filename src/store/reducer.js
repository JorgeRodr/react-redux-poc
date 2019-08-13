import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loading: true, error: null };
    }

    case LOGIN_SUCCESS: {
      return { ...state, loading: false };
    }

    case LOGIN_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }

    default:
      return state;
  }
}

export function selectError(state) {
  return state.error;
}
