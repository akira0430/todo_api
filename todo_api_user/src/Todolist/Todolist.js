import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Grid from "@material-ui/core/Grid";

const api_url = `http://localhost:3001/api/v1/todos`;

function Todolist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(api_url);
      setItems(result.data);
    };
    fetchData();
  }, []);

  const addToDoList = (item) => {
    setItems(items.concat(item));
  };

  const deleteItem = (id) => {
    const deleteURL = api_url + `/${id}`;
    axios
      .delete(deleteURL)
      .then((res) => {
        console.log(res);
        setItems(items.filter((x) => x.id !== id));
      })
      .catch((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TodoForm api_url={api_url} add={addToDoList} />
        </Grid>
        <Grid item xs={12} id="todo_list">
          {items.map((item) => (
            <TodoItem key={item.id} item={item} deleteItem={deleteItem} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Todolist;
