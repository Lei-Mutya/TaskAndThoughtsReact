import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function ThoughtForm({ addTho }) {
  const [tho, setTho] = useState({
    id: "",
    thought: "",
    dateTho:"",
    completed: false
  });

  function handleThoInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTho({ ...tho, thought: e.target.value });
  }
  function handleDateInputChangeTho(e){
    setTho({...tho, dateTho: e.target.value});
  }

  function handleSubmitTho(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (tho.thought.trim()) {
      addTho({ ...tho, id: Math.floor(Math.random()*1000) });
      setTho({ ...tho, thought: "", dateTho:"" });
    }
  }

  return (
  <>
    <form className="todo-form mt-2" onSubmit={handleSubmitTho}>
    
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center">
      <TextField
        id="standard-multiline-flexible"
        multiline
        maxRows={5}
        label="Thoughts for the day (this is Multi-Lines)"
        type="text"
        name="thought"
        value={tho.thought}
        onChange={handleThoInputChange}
        style={{width:"400px"}}
        required
      />
      <TextField
        type="date"
        name="date"
        value={tho.dateTho}
        onChange={handleDateInputChangeTho}
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
        <p style={{fontFamily: "'Permanent Marker', cursive",fontSize:"25px",color:"white"}}>#</p>
    </div>
    <div className="col-md-6">
        <p style={{fontFamily: "'Permanent Marker', cursive",fontSize:"25px",color:"white"}}>Thought for the day</p>
    </div>
    <div className="col-md-3">
        <p style={{fontFamily: "'Permanent Marker', cursive",fontSize:"25px",color:"white"}}>Date</p>
    </div>
    <div className="col-md-1">
    <DeleteForeverIcon style={{fontSize:"30",color:"white"}}/>
    </div>
</div>
</div>
</>
  );
}

export default ThoughtForm;