import express from 'express';
import Experiment from '../models/experimentModel.js';
import data from '../data.js';

// console.log('printing data:', data.present);
const seedRouter = express.Router();

seedRouter.get('/', async(req,res) =>{
    // await Experiment.remove({})
    console.log("data",data)
    const createdExperiments = await Experiment.insertMany(data.experiments);
    res.send({createdExperiments});
});

export default seedRouter;