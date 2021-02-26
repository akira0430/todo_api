import axios from "axios";
import React from "react";
import Login from "./auth/Login";
import Registration from "./auth/Registration";

export default function Home(props) {
  const handleSuccessfulAuth = (data) => {
    console.log(data);
    props.handleLogin(data);
    props.history.push("/dashboard");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>ログイン状態: {props.loggedInStatus}</h1>
      <button onClick={handleLogoutClick}>ログアウト</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}
