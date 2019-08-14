import { createStore, combineReducers } from "redux";
import rootReducer from "./reducer";
import loginReducer from "../features/login/store/reducer";

export const store = createStore(
  combineReducers({
    rootReducer,
    loginReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
