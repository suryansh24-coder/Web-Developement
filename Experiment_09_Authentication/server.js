require('dotenv').config();const express=require('express'),mongoose=require('mongoose'),bcrypt=require('bcryptjs'),jwt=require('jsonwebtoken'),app=express();
app.use(express.json());mongoose.connect(process.env.MONGO_URI);
const User=mongoose.model('User',new mongoose.Schema({email:{type:String,unique:true},password:String}));
app.post('/register',async(req,res)=>{try{const password=await bcrypt.hash(req.body.password,10),u=await User.create({email:req.body.email,password});res.status(201).json({id:u._id,email:u.email});}catch(e){res.status(400).json({error:'Registration failed; email may already exist'});}});
app.post('/login',async(req,res)=>{const u=await User.findOne({email:req.body.email});if(!u||!await bcrypt.compare(req.body.password,u.password))return res.status(401).json({error:'Invalid credentials'});res.json({token:jwt.sign({id:u._id},process.env.JWT_SECRET,{expiresIn:'1h'})});});
function auth(req,res,next){try{req.user=jwt.verify((req.headers.authorization||'').replace('Bearer ',''),process.env.JWT_SECRET);next();}catch{return res.status(401).json({error:'Invalid or missing token'});}}
app.get('/profile',auth,(req,res)=>res.json({message:'Authenticated',userId:req.user.id}));
app.listen(process.env.PORT||3000,()=>console.log('Auth API running'));
