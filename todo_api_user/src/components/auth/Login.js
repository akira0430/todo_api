import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");

  const handleSubmit = (e) => {
    axios
      .post(
        "http://localhost:3001/login",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="eメール"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
