const mongoose=require('mongoose')
const doctorSchema=mongoose.Schema({
    Name:String,
    Image:String,
    Specialization:String,
    Experience:Number,
    Location:String,
    Date:Date,
    Slots:Number,
    Fee:Number
})

const DoctorModel=mongoose.model('doctor',doctorSchema)

module.exports={
    DoctorModel
}