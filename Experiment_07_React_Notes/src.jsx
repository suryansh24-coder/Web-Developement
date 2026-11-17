import React,{useState} from 'react';import{createRoot}from'react-dom/client';import'./style.css';
function App(){const[notes,setNotes]=useState([]),[text,setText]=useState(''),[edit,setEdit]=useState(-1);
function save(e){e.preventDefault();if(!text.trim())return;if(edit<0)setNotes([...notes,text]);else setNotes(notes.map((n,i)=>i===edit?text:n));setText('');setEdit(-1);}
return <main><h1>Notes App</h1><form onSubmit={save}><input value={text} onChange={e=>setText(e.target.value)} placeholder="Write a note..." /><button>{edit<0?'Add':'Update'}</button></form>{notes.map((n,i)=><p key={i}>{n} <button onClick={()=>{setText(n);setEdit(i)}}>Edit</button> <button onClick={()=>setNotes(notes.filter((_,j)=>j!==i))}>Delete</button></p>)}</main>}
createRoot(document.getElementById('root')).render(<App/>);
