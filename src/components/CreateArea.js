import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [inputText,setText]=useState({title:"",content:""});
  const [isExpanded,setExpand]=useState(false);

  function handleChange(event){
    
    const {name,value}=event.target;
    setText((prevValue)=>{
      return {
      ...prevValue,
      [name]:value
    }})  
  };
 
  function submit(event){
    props.onAdd(inputText)
    setText({title:"",content:""})
    event.preventDefault();
   
  }
  function expand(){
   return setExpand(true);
  }
  
  return (
    <div>
      <form className="create-note">
      {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title}/>}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 :1} value={inputText.content} />
        <Zoom in={isExpanded ? true : false}>
        <Fab onClick={submit} ><AddIcon /></Fab>
        </Zoom>
     
      </form>
    </div>
  );
}

export default CreateArea;
