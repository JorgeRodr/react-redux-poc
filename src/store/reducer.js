import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";
import { createSelector } from "reselect";

const initialState = {
  checkLoading: false,
  logged: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, checkLoading: true, error: null, logged: true };
    }

    case LOGIN_SUCCESS: {
      return { ...state, checkLoading: false };
    }

    case LOGIN_FAILURE: {
      return { ...state, checkLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}

export const selectLoggedStatus = createSelector(
  state => state.rootReducer,
  rootReducer => rootReducer.logged
);
