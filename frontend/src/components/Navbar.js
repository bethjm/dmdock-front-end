import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./NavBar.css"


const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
        <div className= "nav-bar">
          
          {user ? (
            <>
            <a class="nav-link" onClick={logoutUser}>Logout</a> 
             <Link id="logo" class="nav-link" to="/">DMDock</Link>
             <Link class="nav-link" to="/monsters">Monsters</Link>
             <Link class="nav-link" to="/pc">See your PC's</Link>
            </>
          ) : (
            <>
              <a id="logo" class="nav-link">DMDock</a>
              <Link to="/register" class="nav-link">Register</Link>
              <Link to="/login" class="nav-link">Login</Link>

            </>
          )}
        </div>

  );
};

export default Navbar;