import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import 'bulma/css/bulma.min.css';


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
<div id="register-background" class="hero is-fullheight ">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="column is-8 is-offset-2">
  <h3 class="title has-text-black">Welcome New Dungeon Master</h3>

    <div class="box">
    <p class="title has-text-grey is-5">Please create a log in and password.</p>

      <form onSubmit={handleSubmit}>
        
      <div class="field">
        <div class="control">
          <input
            class="input is-large"
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          </div>
        </div>

        
        <div class="field">
          <div class="control">
          <input
            class="input is-large"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          </div>
        </div>

        <div class="field">
        <div class="control">

          <input
            class="input is-large"
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        </div>
        <button id="register-button" class="button is-block is-large is-fullwidth">Register</button>
      </form>

</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;