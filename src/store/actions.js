export const LOGIN = "LoginAction";
export const LOGIN_SUCCESS = "LoginSuccessAction";
export const LOGIN_FAILURE = "LoginFailureAction";

export function loginAction(form) {
  return { type: LOGIN, payload: form };
}
