import React from "react";
import Todolist from "../Todolist/Todolist";
import { Link } from "react-router-dom";
import AppList from "../AppList";

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <Link to="/">
          <button>Topページに戻る</button>
        </Link>
        <h1>{props.loggedInStatus}</h1>
        <AppList />
      </div>
    </div>
  );
};

export default Dashboard;
