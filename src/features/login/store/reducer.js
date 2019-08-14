import { CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILURE } from "./actions";

import { createSelector } from "reselect";

const initialState = {
  loginLoading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHECK_USER: {
      return { ...state, loginLoading: true };
    }

    case CHECK_USER_SUCCESS: {
      return { ...state, loginLoading: false };
    }

    case CHECK_USER_FAILURE: {
      return { ...state, loginLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}

export const selectLoadingStatus = createSelector(
  state => state.loginReducer,
  loginReducer => loginReducer.loginLoading
);
