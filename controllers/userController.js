import mongoose from "mongoose";
import { clientData } from "../models/userModel.js";
import sendMail from "../helpers/sendMail.js";



const storeUser = async(req,res)=>{
   const {name , email, mobileNo, paymentType,amount,pan,address}= req.body;

   if (!name || !email || !mobileNo || !paymentType|| !amount || !address) {
      throw res.status(400).json({error:"please enter required credentials"})
   }
   
   const user = await clientData.create({
    name,
    email,
    mobileNo,
    paymentType,
    amount,
    address,
    pan : pan || ""
   });
  

   if (!user._id) {
    throw res.status(400,{error:"user not created try again"})
   }
  await user.save();
  sendMail(email,"Welcome to kalimai trust",`Hi ${name} thank you for your support`)
    res.status(200).json({messege:"user saved successfully",user})
}

const getUser = async(req,res)=>{


   const users= await clientData.find();

   if (!users || users.length === 0) {
     return res.status(400).json({error:"user not found"});
   }
  return res.status(200).json(users);
   
}

export {
    storeUser,
    getUser
}