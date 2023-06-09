import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Note(props) {

    function handleClick(){
    props.ondelete(props.id)
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <DeleteIcon /></button>
    </div>
  );
}

export default Note;
