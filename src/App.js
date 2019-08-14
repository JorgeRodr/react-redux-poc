import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginComponent } from "./features/login/containers/login";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Route path="/login" component={LoginComponent} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
