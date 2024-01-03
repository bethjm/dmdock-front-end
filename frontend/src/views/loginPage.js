import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import "./views.css";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <div id="log-in-background" class="hero is-fullheight ">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <h3 class="title has-text-black">Login Page</h3>
            <div class="box">
              <p class="title has-text-grey is-5">
                Please enter your log in and password.
              </p>
              <form onSubmit={handleSubmit}>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      htmlFor="username"
                      type="text"
                      id="username"
                      placeholder="Enter Username"
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      htmlFor="password"
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  id="log-in-submit"
                  class="button is-block is-large is-fullwidth"
                >
                  Login
                </button>
              </form>
              <br />

              <p>Don't have an account?</p>
              <a class="button is-text">
                {" "}
                <Link to="/register">Register here</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
