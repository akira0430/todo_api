import React from "react";
import "./App.css";
import TodoList from "./Todolist/Todolist";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app_title: {
    textAlign: "center",
  },
});

function AppList() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" className={classes.app_title}>
          タスク管理
        </Typography>
        <hr />
        <TodoList />
      </header>
    </div>
  );
}

export default AppList;
