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
	
]

function MemoryObjects1(props) {
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
				`<p style="font-size:21px;"><b> In this experiment you will see a set of objects in the first image then you will se another set of six objects.  
                You will be asked how many objects from the first set are present in the second set.  
				<br>There will be 40 trials total.
                <br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);


		// Adding present images list
		const present = ['<img src="/img/MemoryObjects1/Image1.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image2.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image3.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image4.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image5.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image6.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image7.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image8.jpg" alt="">'
	
		,'<img src="/img/MemoryObjects1/Image9.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image10.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image11.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image12.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image13.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image14.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image15.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image16.jpg" alt="">'
	
		,'<img src="/img/MemoryObjects1/Image17.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image18.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image19.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image20.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image21.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image22.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image23.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image24.jpg" alt="">'
        ,'<img src="/img/MemoryObjects1/Image25.jpg" alt="">'
        
        ,'<img src="/img/MemoryObjects1/Image26.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image27.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image28.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image29.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image30.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image31.jpg" alt="">'
	
		,'<img src="/img/MemoryObjects1/Image32.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image33.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image34.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image35.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image36.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image37.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image38.jpg" alt="">'
		,'<img src="/img/MemoryObjects1/Image39.jpg" alt="">'
        ,'<img src="/img/MemoryObjects1/Image40.jpg" alt="">'
    
    ]


		const respond = ['/img/MemoryObjects1/Ques41.jpg', '/img/MemoryObjects1/Ques41.jpg',
		 '/img/MemoryObjects1/Ques41.jpg', '/img/MemoryObjects1/Ques41.jpg', '/img/MemoryObjects1/Ques41.jpg'
		 , '/img/MemoryObjects1/Ques42.jpg', '/img/MemoryObjects1/Ques42.jpg', '/img/MemoryObjects1/Ques42.jpg'
		
		,'/img/MemoryObjects1/Ques42.jpg', '/img/MemoryObjects1/Ques42.jpg',
		'/img/MemoryObjects1/Ques43.jpg', '/img/MemoryObjects1/Ques43.jpg', '/img/MemoryObjects1/Ques43.jpg'
		, '/img/MemoryObjects1/Ques43.jpg', '/img/MemoryObjects1/Ques43.jpg', '/img/MemoryObjects1/Ques44.jpg'
	
		,'/img/MemoryObjects1/Ques44.jpg', '/img/MemoryObjects1/Ques44.jpg',
		'/img/MemoryObjects1/Ques44.jpg', '/img/MemoryObjects1/Ques44.jpg', '/img/MemoryObjects1/Ques45.jpg'
		, '/img/MemoryObjects1/Ques45.jpg', '/img/MemoryObjects1/Ques45.jpg', '/img/MemoryObjects1/Ques45.jpg'
        , '/img/MemoryObjects1/Ques45.jpg'  

        ,'/img/MemoryObjects1/Ques46.jpg', '/img/MemoryObjects1/Ques46.jpg',
		 '/img/MemoryObjects1/Ques46.jpg', '/img/MemoryObjects1/Ques46.jpg', '/img/MemoryObjects1/Ques46.jpg'
		 , '/img/MemoryObjects1/Ques47.jpg', '/img/MemoryObjects1/Ques47.jpg', '/img/MemoryObjects1/Ques47.jpg'
		
		,'/img/MemoryObjects1/Ques47.jpg', '/img/MemoryObjects1/Ques47.jpg',
		'/img/MemoryObjects1/Ques48.jpg', '/img/MemoryObjects1/Ques48.jpg', '/img/MemoryObjects1/Ques48.jpg'
		, '/img/MemoryObjects1/Ques48.jpg', '/img/MemoryObjects1/Ques48.jpg'
    
    ]

		const corrAns = ['1','2','3','4','5','1','2','3'
			,'4','5','1','2','3','4','5','1'
			,'2','3','4','5','1','2','3','3','4','1','2','2','3','4','1','2','2'
			,'3','3','1','1','2','3','3']

		for (let i = 0; i < 40; i++) {
			const t1Stimulus1 = {
				type: htmlKeyboardResponse,
				stimulus: present[i],
				choices: "NO_KEYS",
				trial_duration: 1000,
			};

			timeline.push(t1Stimulus1);


			const t1ResponseScreen = {
				type: imageKeyboardResponse,
				stimulus: respond[i],
				choices: ['1', '2', '3', '4', '5'],
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

            timeline.push({
                type: htmlButtonResponse,
                stimulus: `<p style="font-size:21px;"><b>Continue to next trial</b></p>`,
                choices: ['Continue'],
            });
			
			if(i==39){
				timeline.push({
					type: htmlButtonResponse,
					stimulus: function () {
						const trials = jsPsych.data.get().filter({task: 'response'});
						const correct_trials = trials.filter({correct: true});
		
						return `<p style="font-size:21px;"><b>You scored ${correct_trials.count()} out 40 questions correctly.</b></p>`
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

export default MemoryObjects1;
