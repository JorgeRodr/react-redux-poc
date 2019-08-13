import React from "react";
import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../store/actions";

export const LoginComponent = () => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.logged);

  function myForm() {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="email"
                component="input"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Field
                name="password"
                component="input"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );
  }

  function onSubmit(e) {
    log(e);
    dispatch(loginAction(e));
  }

  function log(lg) {
    console.log(lg);
  }

  return (
    <div>
      <div>{myForm()}</div>
      <div>
        <span>{logged ? "Logged" : "Not logged"}</span>
      </div>
    </div>
  );
};
