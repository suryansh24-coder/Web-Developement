const express=require('express'),app=express();app.use(express.json());
let books=[{id:1,title:'Web Design Basics',author:'A. Student'}],nextId=2;
app.get('/books',(req,res)=>res.json(books));
app.get('/books/:id',(req,res)=>{const b=books.find(x=>x.id===+req.params.id);b?res.json(b):res.status(404).json({error:'Book not found'});});
app.post('/books',(req,res)=>{const{title,author}=req.body;if(!title||!author)return res.status(400).json({error:'title and author required'});const b={id:nextId++,title,author};books.push(b);res.status(201).json(b);});
app.put('/books/:id',(req,res)=>{const b=books.find(x=>x.id===+req.params.id);if(!b)return res.status(404).json({error:'Book not found'});b.title=req.body.title??b.title;b.author=req.body.author??b.author;res.json(b);});
app.delete('/books/:id',(req,res)=>{const old=books.length;books=books.filter(x=>x.id!==+req.params.id);res.status(old===books.length?404:204).end();});
app.listen(3000,()=>console.log('API running at http://localhost:3000'));
