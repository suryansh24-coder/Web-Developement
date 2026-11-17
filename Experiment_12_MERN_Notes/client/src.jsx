import React,{useEffect,useState}from'react';import{createRoot}from'react-dom/client';import'./style.css';
function App(){const[notes,setNotes]=useState([]),[text,setText]=useState(''),[edit,setEdit]=useState('');
async function load(){setNotes(await fetch('/api/notes').then(r=>r.json()));}useEffect(()=>{load()},[]);
async function save(e){e.preventDefault();const url=edit?'/api/notes/'+edit:'/api/notes';await fetch(url,{method:edit?'PUT':'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text})});setText('');setEdit('');load();}
async function del(id){await fetch('/api/notes/'+id,{method:'DELETE'});load();}
return <main><h1>MERN Notes</h1><form onSubmit={save}><input value={text} onChange={e=>setText(e.target.value)} placeholder="Write a note" required/><button>{edit?'Update':'Add'}</button></form>{notes.map(n=><p key={n._id}>{n.text} <button onClick={()=>{setText(n.text);setEdit(n._id)}}>Edit</button><button onClick={()=>del(n._id)}>Delete</button></p>)}</main>}
createRoot(document.getElementById('root')).render(<App/>);
