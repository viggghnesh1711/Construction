import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    imgurl:{
        type:String,
    },
    title:{
        type:String,
    },
    desc:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Project = mongoose.models.Project || mongoose.model('Project',projectSchema)

export default Project