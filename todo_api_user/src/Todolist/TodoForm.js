import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTask = (e) => {
    //ページがロードされるのを防ぐ
    e.preventDefault();
    setTask({ task: e.target.value });
    // console.log("task", task);
  };

  const handleChangeBody = (e) => {
    e.preventDefault();
    setBody({ body: e.target.value });
    // console.log("body", body);
  };

  const handleSubmit = (e) => {
    //ページがロードされるのを防ぐ
    e.preventDefault();
    const data = Object.assign(task, body);
    console.log(data);
    axios
      .post(props.api_url, data)
      .then((res) => {
        // 通信に成功してレスポンスが返ってきた時に実行したい処理
        console.log(res.data);
        props.add(res.data);
        setTask("");
        setBody("");
        e.target.reset();
      })
      .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        console.log(error);
      });
  };

  return (
    <Grid container>
      <Grid item xs></Grid>
      <Grid item xs={10}>
        <form id="todo_form" autoComplete="off" onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                id="task_input"
                label="タスク名"
                variant="outlined"
                type="text"
                onChange={handleChangeTask}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                id="body_input"
                label="Task Body"
                variant="outlined"
                type="text"
                style={{ width: "99%", borderRadius: "5px" }}
                rowsMin={3}
                placeholder="タイトルを追加してください"
                onChange={handleChangeBody}
              ></TextareaAutosize>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ height: "100%" }}
              >
                タスク追加
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
};

export default TodoForm;
