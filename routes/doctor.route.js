const express=require("express");
const doctorRouter=express.Router();
const { DoctorModel } = require('../models/doctormodel');


doctorRouter.get("/allDoctor", async (req,res)=>{
    try {
      let list = await DoctorModel.find();
      res.status(200).send(list);
    } catch (err) {
      res.status(500).send({msg: err.message});
    }
})

doctorRouter.post("/appointments", async (req, res) => {
    const { Name,Image,Specialization,Experience,Location,Date,Slots,Fee } = req.body
    try {
        const doctor=new DoctorModel({Name,Image,Specialization,Experience,Location,Date,Slots,Fee})
        await doctor.save()
        res.send('Doctors added Successful')
    } catch (error) {
        res.status(401).send({ "msg": error.message })
    }

})

// update for doctor

doctorRouter.patch("/update/:doctID",async(req,res)=>{
    const{doctID}=req.params
    const payload=req.body
    try {
        await user.modelModel.findByIdAndUpdate({_id:doctID},payload)
        res.status(200).send("Updated")
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
    
})

// Delete for doctor
doctorRouter.delete("/delete/:doctID",async(req,res)=>{
    const {doctID}=req.params
    try {
        await DoctorModel.findByIdAndDelete({_id:doctID})
        res.status(200).send({"msg":"deleted"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
   
})

module.exports= {
    doctorRouter
}