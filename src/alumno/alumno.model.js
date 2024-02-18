import mongoose from 'mongoose'

const alumnoSchema = mongoose.Schema({
    nombre:{
        type:String,
        
    }
})
export default mongoose.model('alumno', alumnoSchema)