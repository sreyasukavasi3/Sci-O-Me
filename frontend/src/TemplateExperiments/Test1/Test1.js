import React, {useMemo} from 'react';
import axios from 'axios';

// CSS styles
import 'jspsych/css/jspsych.css';

// jsPsych
import {initJsPsych} from 'jspsych';

// jsPsych plugins - https://www.jspsych.org/7.2/plugins/list-of-plugins/
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import htmlButtonResponse from '@jspsych/plugin-html-button-response';
import instructions from '@jspsych/plugin-instructions';
import imageKeyboardResponse from '@jspsych/plugin-image-keyboard-response';
import {saveData} from "../../Utilities/SaveData";

let final =[];
let currentScore = 0;


function Test1(props) {
	useMemo(() => {
		axios.get('/api/seed')
		.then(response => {
			// Handle the response data here
			const experiment = response.data;
			// console.log(experiment.createdExperiments[0].present);
			const presentList = experiment.createdExperiments[0].present.map(imagePath => "'" + imagePath + "'");
			const respondList = experiment.createdExperiments[0].respond.map(imagePath => "'" + imagePath + "'");
			const corrAnsList = experiment.createdExperiments[0].corrAns;
		
		// Initialize jsPsych
		const jsPsych = initJsPsych({
			onfinish: async() => {
				saveData(jsPsych.data.get().json());
			}
		});

		// Create the experiment timeline - https://www.jspsych.org/7.2/overview/timeline/
		let timeline = [];

		// Display welcome message
		const welcome = {
			type: instructions,
			pages: [
				`<p style="font-size:21px;"><b> This experiment will test your memory for objects. 
                There will be 4 trials of 10 images each. Try to remember the specific objects that you see in each image.  
				<br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);
		const dummy =[];

		for (let i = 0; i < 40; i++) {
			const t1Stimulus1 = {
				type: htmlKeyboardResponse,
				stimulus: presentList[i],
				choices: "NO_KEYS",
				trial_duration: 2000,
			};

			timeline.push(t1Stimulus1);


			const t1ResponseScreen = {
				type: htmlKeyboardResponse,
				stimulus: respondList[i],
				choices: ['1', '2', '3', '4', '5'],
				prompt: `<p style="font-size:21px;"><b>How many of the objects from the last image are present in this image?  
                <br> Press the corresponding number key: 1, 2, 3, 4 or 5. </br></b></p>`,
				
				data: {
					task: 'response',
					correct_response: corrAnsList[i]
				},
				on_finish: function (data) {
					data.correct = data.response == data.correct_response;
					final.push(presentList[i],respondList[i],corrAnsList[i],data.correct);
					// data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
				}
			};
			
			timeline.push(t1ResponseScreen);

            timeline.push({
                type: htmlButtonResponse,
                stimulus: `<p style="font-size:21px;"><b>Continue to next trial</b></p>`,
                choices: ['Continue'],
            });
			
			// Initialize variables to keep track of the current trial and score
            
            
            if(i==9 || i==19 || i==29 || i==39){
                timeline.push({
                type: htmlButtonResponse,
                stimulus: function () {
                const trials = jsPsych.data.get().filter({task: 'response'});
                const correct_trials = trials.filter({correct: true});
                
                const score = correct_trials.count() - currentScore; // Calculate score for the current trial
                currentScore = score+ currentScore; // Update the cumulative score
                console.log(`Currentscoreafter ${currentScore}` )
                return `<p style="font-size:21px;"><b>You scored ${score} out 10 questions correctly.</b></p>`
                },
                choices: ['Finish'],
                prompt: `<p style="font-size:21px;"><b>Click finish to end this trail</b></p>`,
                });
                
            }          
		}
		jsPsych.run(timeline);
	})
	.catch(error => {
		// Handle any errors that occurred during the request
		console.error('Request failed:', error);
	});
	}, []);

	return (
		<>
			{/*	LEAVE EMPTY */}
		</>
	);
}

export default Test1;
