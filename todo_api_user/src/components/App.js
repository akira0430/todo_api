import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Dashboard from "./Dashboard";

export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    console.log(data);
    setLoggedInStatus("ログイン中");
    setUser(data.user);
  };

  const handleLogout = () => {
    setLoggedInStatus("未ログイン");
    setUser("");
  };

  useEffect(() => {
    checkLoginStatus();
  });

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (response.data.logged_in && loggedInStatus === "未ログイン") {
          setLoggedInStatus("ログイン中");
          setUser(response.data.user);
        } else if (
          !response.data.logged_in &&
          loggedInStatus === "ログイン中"
        ) {
          setLoggedInStatus("未ログイン");
          setUser({});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <Home
                {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
