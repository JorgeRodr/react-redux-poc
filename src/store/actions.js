export const LOGIN = "LoginAction";
export const LOGIN_SUCCESS = "LoginSuccessAction";
export const LOGIN_FAILURE = "LoginFailureAction";
export const CHECK_USER = "CheckUserAction";
export const CHECK_USER_SUCCESS = "CheckUserSuccess";
export const CHECK_USER_FAILURE = "CheckUserFailure";

export function loginAction(form) {
  return { type: LOGIN, payload: form };
}

export function checkUser(email) {
  return { type: CHECK_USER, payload: email };
}
