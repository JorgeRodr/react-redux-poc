import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions";
import { selectError } from "../../store/reducer";
import { bindActionCreators } from "redux";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
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
    this.props.loginAction(e);
  }

  log(lg) {
    console.log(lg);
  }
}

function mapStateToProps(state) {
  return {
    error: selectError(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
