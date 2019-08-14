import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../store/actions";
import { selectLoggedStatus } from "../../../store/reducer";
import { checkUser } from "../store/actions";

export const LoginComponent = () => {
  const dispatch = useDispatch();
  const logged = useSelector(selectLoggedStatus);
  let email;

  function myForm() {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <FormSpy>
                {props => (
                  <Field
                    name="email"
                    component="input"
                    placeholder="Enter your email"
                    onBlur={() => dispatch(checkUser(props.values.email))}
                  />
                )}
              </FormSpy>
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
