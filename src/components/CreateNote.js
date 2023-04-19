import React from "react";
import notes from "../notes";
import Note from "./Note";


const CreateNote=(props)=>{

    return(
        <div>
            {notes.map((noteValue)=>{
              return (
                <Note 
                key={noteValue.id}
                    title={noteValue.title}
                    content={noteValue.content}
                />
              )
            
            })}
        </div>
    )
};

export default CreateNote;