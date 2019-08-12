import React, { Component } from "react";
import { Form, Field } from "react-final-form";

export class LoginComponent extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return <div>{this.myForm()}</div>;
  }

  myForm() {
    return (
      <Form
        onSubmit={this.onSubmit}
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

  onSubmit(e) {
    this.log(e);
  }

  log(lg) {
    console.log(lg);
  }
}
