import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    date:"",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }
  function handleDateInputChange(e){
    setTodo({...todo, date: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random()*1000) });
      setTodo({ ...todo, task: "", date:"" });
    }
  }

  return (
  <>
    <form className="todo-form mt-2" onSubmit={handleSubmit}>
    
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center">
      <TextField
        id="standard-multiline-flexible"
        multiline
        maxRows={5}
        label="Task (this is Multi-Lines)"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
        style={{width:"400px"}}
        required
      />
      <TextField
        type="date"
        name="date"
        value={todo.date}
        onChange={handleDateInputChange}
        className="mt-2"
        style={{width:"180px"}}
        required
      />
      <Button type="submit" className="bg-info mt-2">Submit</Button>
    
    </Grid>
    </form>

<div class="container col-sm-6 col-md-12 mt-5">
<div className="row bg-info pt-2">
    <div className="col-md-1">

    </div>
    <div className="col-md-1">
        <p style={{fontFamily: "'Permanent Marker', cursive",fontSize:"25px",color:"white"}}>Task #</p>
    </div>
    <div className="col-md-6">
        <p style={{fontFamily: "'Permanent Marker', cursive",fontSize:"25px",color:"white"}}>Task</p>
    </div>
    <div className="col-md-3">
        <p style={{fontFamily: "'Permanent Marker', cursive",fontSize:"25px",color:"white"}}>Due Date</p>
    </div>
    <div className="col-md-1 mt-2">
      <DeleteForeverIcon style={{fontSize:"30",color:"white"}}/>
    </div>
</div>
</div>
</>
  );
}

export default TodoForm;