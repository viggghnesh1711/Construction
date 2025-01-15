import mongoose from 'mongoose'

const servicesSchema = new mongoose.Schema({
    one:{
        type:String,
    },
    two:{
        type:String,
    },
    three:{
        type:String
    },
})

const Services = mongoose.models.Services || mongoose.model('Services',servicesSchema)

export default Services