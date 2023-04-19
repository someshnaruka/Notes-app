import React,{useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const local_key='Notes';
  const [list,setList]=useState(JSON.parse(localStorage.getItem(local_key))??[])

  function addNote(Newnote)
  {
    setList((prevValue)=>{
      return [...prevValue,Newnote]
    })
  
    console.log(Newnote);
  }

  useEffect(()=>{
    const items=JSON.parse(localStorage.getItem(local_key));
    if(items){
      setList(items);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem(local_key,JSON.stringify(list));
  },[list])

  function deleteNote(id){
    setList((prevValue)=>{
      return prevValue.filter((noteItem,index)=>{
        return index !==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {list.map((noteItem,index)=>{
          return (<Note key={index} id={index} title={noteItem.title} content={noteItem.content} ondelete={deleteNote} />)
        })}
      <Footer />
    </div>
  );
}

export default App;
