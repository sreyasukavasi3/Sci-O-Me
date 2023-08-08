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
const API_ENDPOINT = "https://e06hz3blkk.execute-api.us-east-2.amazonaws.com/default/GetsignedurlMemorylimit";

const trials = [
	{
		"test1": {
			"stimulus": "",
			"question": "",
			"solution": ""
		}
	}
	// ,
	// {
	// 	"test1": {
	// 		"stimulus": "",
	// 		"question": "",
	// 		"solution": ""
	// 	},
	// },
	// {
	// 	"test1": {
	// 		"stimulus": "",
	// 		"question": "",
	// 		"solution": ""
	// 	},
	// }
]

function MemoryLimits(props) {
	useMemo(() => {
		// Initialize jsPsych
		const jsPsych = initJsPsych({
			onfinish: async() => {
				saveData(jsPsych.data.get().json());
				// console.log('HIIIIIII sreya')
				// const response = await axios({
				// 	method: "GET",
				// 	url: API_ENDPOINT,
					
				//   });

				// console.log("Response: ", response);

				// const result = await fetch(response.data.uploadURL, {
				// 	method: "PUT",
				// 	headers: {
				// 	  "Content-Type": "Inputfile/csv"
				// 	},
				// 	body: final,
				//   });
			}
		});

		// Create the experiment timeline - https://www.jspsych.org/7.2/overview/timeline/
		let timeline = [];

		// Display welcome message
		const welcome = {
			type: instructions,
			pages: [
				`<p style="font-size:21px;"><b>This experiment will test your ability to remember a number of objects.<br>In the first trial you will need to remember 2 objects; in the second trial, 3 objects; and in the third trial 4 objects.
				<br> There are 8 tests in the first series.</br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);


		// Adding present images list
		const present = ['<img src="/img/MemoryLimits/Slide21.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide22.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide23.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide24.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide26.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide27.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide28.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide29.jpeg" alt="">'
	
		,'<img src="/img/MemoryLimits/Slide1.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide2.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide3.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide4.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide6.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide7.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide8.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide9.jpeg" alt="">'
	
		,'<img src="/img/MemoryLimits/Slide11.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide12.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide13.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide14.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide16.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide17.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide18.jpeg" alt="">'
		,'<img src="/img/MemoryLimits/Slide19.jpeg" alt="">']

		const respond = ['/img/MemoryLimits/Slide25.jpeg', '/img/MemoryLimits/Slide25.jpeg',
		 '/img/MemoryLimits/Slide25.jpeg', '/img/MemoryLimits/Slide25.jpeg', '/img/MemoryLimits/Slide30.jpeg'
		 , '/img/MemoryLimits/Slide30.jpeg', '/img/MemoryLimits/Slide30.jpeg', '/img/MemoryLimits/Slide30.jpeg'
		
		,'/img/MemoryLimits/Slide5.jpeg', '/img/MemoryLimits/Slide5.jpeg',
		'/img/MemoryLimits/Slide5.jpeg', '/img/MemoryLimits/Slide5.jpeg', '/img/MemoryLimits/Slide10.jpeg'
		, '/img/MemoryLimits/Slide10.jpeg', '/img/MemoryLimits/Slide10.jpeg', '/img/MemoryLimits/Slide10.jpeg'
	
		,'/img/MemoryLimits/Slide15.jpeg', '/img/MemoryLimits/Slide15.jpeg',
		'/img/MemoryLimits/Slide15.jpeg', '/img/MemoryLimits/Slide15.jpeg', '/img/MemoryLimits/Slide20.jpeg'
		, '/img/MemoryLimits/Slide20.jpeg', '/img/MemoryLimits/Slide20.jpeg', '/img/MemoryLimits/Slide20.jpeg']

		const corrAns = ['2','0','1','2','2','0','2','1'
			,'2','1','3','2','1','2','3','2'
			,'2','0','3','4','3','1','2','2']

		for (let i = 0; i < 2; i++) {
			const t1Stimulus = {
				type: htmlKeyboardResponse,
				stimulus: present[i],
				choices: "NO_KEYS",
				trial_duration: 1000,
			};

			timeline.push(t1Stimulus);

			const t1ResponseScreen = {
				type: imageKeyboardResponse,
				stimulus: respond[i],
				choices: ['0', '1', '2', '3','4'],
				prompt: `<p style="font-size:21px;"><b>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</b></p>`,
				
				data: {
					task: 'response',
					correct_response: corrAns[i]
				},
				on_finish: function (data) {
					data.correct = data.response == data.correct_response;
					final.push(present[i],respond[i],corrAns[i],data.correct);
					// data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
				}
			};
			
			timeline.push(t1ResponseScreen);

			if(i==7 ||i==15 ){
				timeline.push({
					type: htmlButtonResponse,
					stimulus: `<p style="font-size:21px;"><b>Continue to next trial</b></p>`,
					choices: ['Continue'],
				});
			}
			if(i==1){
				timeline.push({
					type: htmlButtonResponse,
					stimulus: function () {
						const trials = jsPsych.data.get().filter({task: 'response'});
						const correct_trials = trials.filter({correct: true});
		
						return `<p style="font-size:21px;"><b>You scored ${correct_trials.count()} out 24 questions correctly.</b></p>`
					},
					choices: ['Finish'],
					prompt: `<p style="font-size:21px;"><b>Click finish to end experiment</b></p>`,
				});
			}
		}


		// // TRIAL 1
		// const t1Stimulus = {
		// 	type: htmlKeyboardResponse,
		// 	stimulus: '<img src="/img/MemoryLimits/Slide21.jpeg" alt="">',
		// 	choices: "NO_KEYS",
		// 	trial_duration: 1000,
		// };

		// timeline.push(t1Stimulus);

		// const t1ResponseScreen = {
		// 	type: imageKeyboardResponse,
		// 	stimulus: '/img/MemoryLimits/Slide25.jpeg',
		// 	choices: ['0', '1', '2', '3','4'],
		// 	prompt: "<p>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</p>",
		// 	data: {
		// 		task: 'response',
		// 		correct_response: '2'
		// 	},
		// 	on_finish: function (data) {
		// 		data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
		// 	}
		// };

		// timeline.push(t2ResponseScreen);

		// timeline.push({
		// 	type: htmlButtonResponse,
		// 	stimulus: '<p>Continue to next trial</p>',
		// 	choices: ['Continue'],
		// });

		// //	TRIAL 2
		// const t2Stimulus = {
		// 	type: htmlKeyboardResponse,
		// 	stimulus: '<img src="/img/MemoryLimits/Slide1.jpeg" alt="">',
		// 	choices: "NO_KEYS",
		// 	trial_duration: 1000,
		// };

		// timeline.push(t2Stimulus);

		// const t2ResponseScreen = {
		// 	type: imageKeyboardResponse,
		// 	stimulus: '/img/MemoryLimits/Slide5.jpeg',
		// 	choices: ['0', '1', '2', '3','4'],
		// 	prompt: "<p>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</p>",
		// 	data: {
		// 		task: 'response',
		// 		correct_response: '2'
		// 	},
		// 	on_finish: function (data) {
		// 		data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
		// 	}
		// };

		// timeline.push(t2ResponseScreen);

		// timeline.push({
		// 	type: htmlButtonResponse,
		// 	stimulus: '<p>Continue to next trial</p>',
		// 	choices: ['Continue'],
		// });

		// //	TRIAL 3
		// const t3Stimulus = {
		// 	type: htmlKeyboardResponse,
		// 	stimulus: '<img src="/img/MemoryLimits/Slide13.jpeg" alt="">',
		// 	choices: "NO_KEYS",
		// 	trial_duration: 1000,
		// };

		// timeline.push(t3Stimulus);

		// const t3ResponseScreen = {
		// 	type: imageKeyboardResponse,
		// 	stimulus: '/img/MemoryLimits/Slide15.jpeg',
		// 	choices: ['0', '1', '2', '3', '4'],
		// 	prompt: "<p>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</p>",
		// 	data: {
		// 		task: 'response',
		// 		correct_response: '3'
		// 	},
		// 	on_finish: function (data) {
		// 		data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
		// 	}
		// };

		// timeline.push(t3ResponseScreen);

		// timeline.push({
		// 	type: htmlButtonResponse,
		// 	stimulus: function () {
		// 		const trials = jsPsych.data.get().filter({task: 'response'});
		// 		const correct_trials = trials.filter({correct: true});

		// 		return `<p>You scored ${correct_trials.count()} out 3 questions correctly.</p>`
		// 	},
		// 	choices: ['Finish'],
		// 	prompt: "Click finish to end experiment"
		// });

		jsPsych.run(timeline);
	}, []);

	return (
		<>
			{/*	LEAVE EMPTY */}
		</>
	);
}

export default MemoryLimits;
