import express from "express"
import { config } from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import paymentRoute from "./routes/paymentRoutes.js";
import userRouter from "./routes/userRoutes.js";
config({path:"./config/config.env"})

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/api",paymentRoute)
// SendEmail("subhe@gmail.com",'12343254');

//http://localhost:4000/api/paymentVarification

//routes


app.use("/api",userRouter) // http://localhost:4000/api/user/store

app.get("/api/getkey",(req,res)=>
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
)



//contact schema

const conatctSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
  
    sub:{
        type:String,
        required:true

    },
    msg:{
        type:String,
        required:true
    },
  

},{
timestamps:true
})





// contact model
const contactData = mongoose.model('contactData',conatctSchema);


app.post('/api/contact', async (req, res) => {
    try {
      const { name, mail, sub,msg } = req.body;
  
      const storeContactData = new contactData({
        name,
        mail,
        sub,
        msg
      });
  
      await storeContactData.save();
      res.status(201).json({ message: 'Contact Data successfully stored' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });




  // blog schema

  const blogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
  
    cmnt:{
        type:String,
        required:true

    }
  

},{
timestamps:true
})
const blogData = mongoose.model('blogData',blogSchema);


app.post('/api/blog', async (req, res) => {
    try {
      const { name, mail, cmnt } = req.body;
  
      const storeBlogData = new blogData({
        name,
        mail,
       cmnt
      });
  
      await storeBlogData.save();
      res.status(201).json({ message: 'Blog Data successfully stored' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });