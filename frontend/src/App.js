import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import Monster from "./components/Monsters";
import Favorites from "./components/Favorites";
import PCShow from "./components/PCShow";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <AuthProvider>
            <Navbar />
            <Switch>
              <PrivateRoute component={Favorites} path="/favorites" exact />
              <PrivateRoute component={Monster} path="/monsters" exact />
              <PrivateRoute component={PCShow} path="/pc" exact />
              <Route component={Login} path="/login" />
              <Route component={Register} path="/register" />
              <Route component={Home} path="/" />
            </Switch>
          </AuthProvider>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
