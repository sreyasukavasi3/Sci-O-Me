import mongoose from "mongoose";

// creating mongoose schema to send the data to DB
const experimentSchema = new mongoose.Schema(
    {
        present: 
            [{
                type: String, required: true,
            }]
        ,

        respond: 
            [{
                type: String, required: true,
            }]
        ,

        corrAns: 
            [{
                type: Number, required: true,
            }]
        
       
    },
    {
        timestamps: true
    }  
);

const Experiment = mongoose.model('Experiment', experimentSchema);

export default Experiment;