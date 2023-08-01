import express from "express";
import cors from "cors";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js'

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log('connected to DB');
    })
    .catch((err) =>{
        console.log(err.message);
    })


const app = express();

app.use('/api/seed', seedRouter);

// app.use(express.json());
// app.use(cors()); // Enable CORS for all routes

// app.get('/api/experiments', (req,res) => {
//     res.send(data.experiments);
// });

// app.use('/api/experiments', experimentRouter);












// app.post('/api/experiments', (req, res) => {
//     const questions = req.body.questions;
//     const { present, respond, corrAns } = questions.experiments[0];
//     // Create a new experiment object using the extracted arrays
//     const newExperiment = {
//         present,
//         respond,
//         corrAns,
//     };

//     // Add the new experiment to the data.experiments array
//   data.experiments.push(newExperiment);
  
//     res.status(200).json({ message: 'Questions received successfully' });
// });

const port =process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
});



