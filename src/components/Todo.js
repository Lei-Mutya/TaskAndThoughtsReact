import { Checkbox, IconButton, Typography } from "@material-ui/core";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import React from "react";


function Todo({ todo, toggleComplete, removeTodo }) {

    
    const handleCheckboxClick=(e)=> {
    toggleComplete(todo.id);
  }

  const handleRemoveClick=(e)=> {
    removeTodo(todo.id);
  }
  return (
<div className="container col-md-12">
    

    <Typography
        variant="body1"
        style={{
        textDecoration: todo.completed ? "line-through" : null
        }}
    >
    <div className="row">
   
    
        <div className="col-md-1">
            <p><Checkbox checked={todo.completed} onClick={e=>handleCheckboxClick(e.target.value)} /></p>
           
        </div>
        <div className="col-md-1">
            <p style={{fontFamily: "'Indie Flower', cursive", fontSize:"20px"}}>{todo.id}</p>
        </div>
        <div className="col-md-6">
           <p style={{fontFamily: "'Indie Flower', cursive", fontSize:"25px"}}>{todo.task}</p>
        </div>
        <div className="col-md-3">
            <p style={{fontFamily: "'Indie Flower', cursive", fontSize:"25px"}}>{todo.date}</p>
        </div>
        <div className="col-md-1">
            <IconButton onClick={e=> handleRemoveClick(e.target.value)}>
                <CancelOutlinedIcon style={{color:"red"}}/>
            </IconButton>
        </div>
       
   
    </div>
    </Typography>
    
</div>
  );
  
}

export default Todo;