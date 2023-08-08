import express from 'express';
import Experiment from '../models/experimentModel';

const experimentRouter = express.Router();

experimentRouter.get('/', async(req,res) =>{
    const experiments = await Experiment.find();
    res.send(experiments);

});

experimentRouter.post('/', async(req, res) => {
    const questions = req.body.questions;
    const { present, respond, corrAns } = questions.experiments[0];
    // Create a new experiment object using the extracted arrays
    const newExperiment = {
        present,
        respond,
        corrAns,
    };

    // Add the new experiment to the data.experiments array
  data.experiments.push(newExperiment);
  res.status(200).json({ message: 'Questions received successfully' });

});


export default experimentRouter;