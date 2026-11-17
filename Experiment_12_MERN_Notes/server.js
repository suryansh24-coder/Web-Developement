require('dotenv').config();const express=require('express'),mongoose=require('mongoose'),path=require('path'),app=express();
app.use(express.json());mongoose.connect(process.env.MONGO_URI);
const Note=mongoose.model('Note',new mongoose.Schema({text:{type:String,required:true}}));
app.get('/api/notes',async(req,res)=>res.json(await Note.find()));
app.post('/api/notes',async(req,res)=>{if(!req.body.text?.trim())return res.status(400).json({error:'Text required'});res.status(201).json(await Note.create({text:req.body.text}));});
app.put('/api/notes/:id',async(req,res)=>{const n=await Note.findByIdAndUpdate(req.params.id,{text:req.body.text},{new:true,runValidators:true});n?res.json(n):res.sendStatus(404);});
app.delete('/api/notes/:id',async(req,res)=>{const n=await Note.findByIdAndDelete(req.params.id);n?res.sendStatus(204):res.sendStatus(404);});
app.use(express.static(path.join(__dirname,'dist')));app.listen(process.env.PORT||3000,()=>console.log('MERN app running'));
