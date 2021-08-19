import { Checkbox, IconButton, Typography } from "@material-ui/core";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import React from "react";


function Thought({ tho, toggleCompleteTho, removeTho }) {

    const handleCheckboxTho=(e)=> {
    toggleCompleteTho(tho.id);
  }

  const handleRemoveTho=(e)=> {
    removeTho(tho.id);
  }
  return (
<div className="container col-md-12">
    

    <Typography
        variant="body1"
        style={{
        textDecoration: tho.completed ? "line-through" : null
        }}
    >
    <div className="row">
   
    
        <div className="col-md-1">
            <p><Checkbox checked={tho.completed} onClick={e=>handleCheckboxTho(e.target.value)} /></p>
           
        </div>
        <div className="col-md-1">
            <p style={{fontFamily: "'Indie Flower', cursive", fontSize:"20px"}}>{tho.id}</p>
        </div>
        <div className="col-md-6">
           <p style={{fontFamily: "'Indie Flower', cursive", fontSize:"25px"}}>{tho.thought}</p>
        </div>
        <div className="col-md-3">
            <p style={{fontFamily: "'Indie Flower', cursive", fontSize:"25px"}}>{tho.dateTho}</p>
        </div>
        <div className="col-md-1">
            <IconButton onClick={e=> handleRemoveTho(e.target.value)}>
                <CancelOutlinedIcon style={{color:"red"}}/>
            </IconButton>
        </div>
    </div>
    </Typography>
    
</div>
  );
  
}

export default Thought;
