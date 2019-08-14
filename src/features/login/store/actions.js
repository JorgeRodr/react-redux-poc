export const CHECK_USER = "CheckUserAction";
export const CHECK_USER_SUCCESS = "CheckUserSuccess";
export const CHECK_USER_FAILURE = "CheckUserFailure";

export function checkUser(email) {
  return { type: CHECK_USER, payload: email };
}

export function checkUserSuccess() {
  return { type: CHECK_USER_SUCCESS };
}

export function checkUserFailure(err) {
  return { type: CHECK_USER_FAILURE, payload: err };
}
