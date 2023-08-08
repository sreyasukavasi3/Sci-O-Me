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

// const trials = [
// 	{
// 		"test1": {
// 			"stimulus": "",
// 			"question": "",
// 			"solution": ""
// 		}
// 	}
	
// ]

function Attention1(props) {
	useMemo(() => {
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
				`<p style="font-size:21px;"><b>This experiment will test your attention. 
                You will see a series of colored animals and then be asked to remember the color of one of them.
                Small changes in objects may attract your attention.
				<br>There will be 40 trials, 32 with small changes.
                <br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);


		// Adding present images list
		const present1 = ['<img src="/img/Attention1/Image1.jpg" alt="">'
		,'<img src="/img/Attention1/Image1.jpg" alt="">'
		,'<img src="/img/Attention1/Image1.jpg" alt="">'
		,'<img src="/img/Attention1/Image1.jpg" alt="">'
		,'<img src="/img/Attention1/Image1.jpg" alt="">'
		,'<img src="/img/Attention1/Image6.jpg" alt="">'
		,'<img src="/img/Attention1/Image6.jpg" alt="">'
		,'<img src="/img/Attention1/Image6.jpg" alt="">'
	
		,'<img src="/img/Attention1/Image6.jpg" alt="">'
		,'<img src="/img/Attention1/Image6.jpg" alt="">'
		,'<img src="/img/Attention1/Image11.jpg" alt="">'
		,'<img src="/img/Attention1/Image11.jpg" alt="">'
		,'<img src="/img/Attention1/Image11.jpg" alt="">'
		,'<img src="/img/Attention1/Image11.jpg" alt="">'
		,'<img src="/img/Attention1/Image11.jpg" alt="">'
		,'<img src="/img/Attention1/Image16.jpg" alt="">'
	
		,'<img src="/img/Attention1/Image16.jpg" alt="">'
		,'<img src="/img/Attention1/Image16.jpg" alt="">'
		,'<img src="/img/Attention1/Image16.jpg" alt="">'
		,'<img src="/img/Attention1/Image16.jpg" alt="">'
		,'<img src="/img/Attention1/Image21.jpg" alt="">'
		,'<img src="/img/Attention1/Image21.jpg" alt="">'
		,'<img src="/img/Attention1/Image21.jpg" alt="">'
		,'<img src="/img/Attention1/Image21.jpg" alt="">'
        ,'<img src="/img/Attention1/Image21.jpg" alt="">'
        
        ,'<img src="/img/Attention1/Image26.jpg" alt="">'
		,'<img src="/img/Attention1/Image26.jpg" alt="">'
		,'<img src="/img/Attention1/Image26.jpg" alt="">'
		,'<img src="/img/Attention1/Image26.jpg" alt="">'
		,'<img src="/img/Attention1/Image26.jpg" alt="">'
		,'<img src="/img/Attention1/Image31.jpg" alt="">'
	
		,'<img src="/img/Attention1/Image31.jpg" alt="">'
		,'<img src="/img/Attention1/Image31.jpg" alt="">'
		,'<img src="/img/Attention1/Image31.jpg" alt="">'
		,'<img src="/img/Attention1/Image31.jpg" alt="">'
		,'<img src="/img/Attention1/Image36.jpg" alt="">'
		,'<img src="/img/Attention1/Image36.jpg" alt="">'
		,'<img src="/img/Attention1/Image36.jpg" alt="">'
		,'<img src="/img/Attention1/Image36.jpg" alt="">'
        ,'<img src="/img/Attention1/Image36.jpg" alt="">'
    
    ]

    const present2 = ['<img src="/img/Attention1/Image1.jpg" alt="">'
		,'<img src="/img/Attention1/Image2.jpg" alt="">'
		,'<img src="/img/Attention1/Image3.jpg" alt="">'
		,'<img src="/img/Attention1/Image4.jpg" alt="">'
		,'<img src="/img/Attention1/Image5.jpg" alt="">'
		,'<img src="/img/Attention1/Image6.jpg" alt="">'
		,'<img src="/img/Attention1/Image7.jpg" alt="">'
		,'<img src="/img/Attention1/Image8.jpg" alt="">'
	
		,'<img src="/img/Attention1/Image9.jpg" alt="">'
		,'<img src="/img/Attention1/Image10.jpg" alt="">'
		,'<img src="/img/Attention1/Image11.jpg" alt="">'
		,'<img src="/img/Attention1/Image12.jpg" alt="">'
		,'<img src="/img/Attention1/Image13.jpg" alt="">'
		,'<img src="/img/Attention1/Image14.jpg" alt="">'
		,'<img src="/img/Attention1/Image15.jpg" alt="">'
		,'<img src="/img/Attention1/Image16.jpg" alt="">'
	
		,'<img src="/img/Attention1/Image17.jpg" alt="">'
		,'<img src="/img/Attention1/Image18.jpg" alt="">'
		,'<img src="/img/Attention1/Image19.jpg" alt="">'
		,'<img src="/img/Attention1/Image20.jpg" alt="">'
		,'<img src="/img/Attention1/Image21.jpg" alt="">'
		,'<img src="/img/Attention1/Image22.jpg" alt="">'
		,'<img src="/img/Attention1/Image23.jpg" alt="">'
		,'<img src="/img/Attention1/Image24.jpg" alt="">'
        ,'<img src="/img/Attention1/Image25.jpg" alt="">'
        
        ,'<img src="/img/Attention1/Image26.jpg" alt="">'
		,'<img src="/img/Attention1/Image27.jpg" alt="">'
		,'<img src="/img/Attention1/Image28.jpg" alt="">'
		,'<img src="/img/Attention1/Image29.jpg" alt="">'
		,'<img src="/img/Attention1/Image30.jpg" alt="">'
		,'<img src="/img/Attention1/Image31.jpg" alt="">'
	
		,'<img src="/img/Attention1/Image32.jpg" alt="">'
		,'<img src="/img/Attention1/Image33.jpg" alt="">'
		,'<img src="/img/Attention1/Image34.jpg" alt="">'
		,'<img src="/img/Attention1/Image35.jpg" alt="">'
		,'<img src="/img/Attention1/Image36.jpg" alt="">'
		,'<img src="/img/Attention1/Image37.jpg" alt="">'
		,'<img src="/img/Attention1/Image38.jpg" alt="">'
		,'<img src="/img/Attention1/Image39.jpg" alt="">'
        ,'<img src="/img/Attention1/Image40.jpg" alt="">'
    
    ]


		const respond = ['/img/Attention1/Ques1.jpg', '/img/Attention1/Ques1.jpg',
		 '/img/Attention1/Ques1.jpg', '/img/Attention1/Ques1.jpg', '/img/Attention1/Ques1.jpg'
		 , '/img/Attention1/Ques2.jpg', '/img/Attention1/Ques2.jpg', '/img/Attention1/Ques2.jpg'
		
		,'/img/Attention1/Ques2.jpg', '/img/Attention1/Ques2.jpg',
		'/img/Attention1/Ques3.jpg', '/img/Attention1/Ques3.jpg', '/img/Attention1/Ques3.jpg'
		, '/img/Attention1/Ques3.jpg', '/img/Attention1/Ques3.jpg', '/img/Attention1/Ques4.jpg'
	
		,'/img/Attention1/Ques4.jpg', '/img/Attention1/Ques4.jpg',
		'/img/Attention1/Ques4.jpg', '/img/Attention1/Ques4.jpg', '/img/Attention1/Ques5.jpg'
		, '/img/Attention1/Ques5.jpg', '/img/Attention1/Ques5.jpg', '/img/Attention1/Ques5.jpg'
        , '/img/Attention1/Ques5.jpg'  

        ,'/img/Attention1/Ques6.jpg', '/img/Attention1/Ques6.jpg',
		 '/img/Attention1/Ques6.jpg', '/img/Attention1/Ques6.jpg', '/img/Attention1/Ques6.jpg'
		 , '/img/Attention1/Ques7.jpg', '/img/Attention1/Ques7.jpg', '/img/Attention1/Ques7.jpg'
		
		,'/img/Attention1/Ques7.jpg', '/img/Attention1/Ques7.jpg',
		'/img/Attention1/Ques8.jpg', '/img/Attention1/Ques8.jpg', '/img/Attention1/Ques8.jpg'
		, '/img/Attention1/Ques8.jpg', '/img/Attention1/Ques8.jpg'
    
    ]

		const corrAns = ['1','1','1','1','1','6','6','6'
			,'6','6','5','5','5','5','5','2'
			,'2','2','2','2','8','8','8','8','8','4','4','4','4','4','7','7','7'
			,'7','7','3','3','3','3','3']

		for (let i = 0; i < 40; i++) {
			console.log('Printinnnnnnnnnnnnnggggg')
			console.log(present1[i])
			console.log(present2[i])
			console.log(respond[i])
			const t1Stimulus1 = {
				type: htmlKeyboardResponse,
				stimulus: present1[i],
				choices: "NO_KEYS",
				trial_duration: 1000,
			};

			timeline.push(t1Stimulus1);

            const t1Stimulus2 = {
				type: htmlKeyboardResponse,
				stimulus: present2[i],
				choices: "NO_KEYS",
				trial_duration: 1000,
			};

			timeline.push(t1Stimulus2);

			const t1ResponseScreen = {
				type: imageKeyboardResponse,
				stimulus: respond[i],
				choices: ['1', '2', '3', '4', '5', '6', '7', '8'],
				// prompt: `<p style="font-size:21px;"><b>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</b></p>`,
				
				data: {
					task: 'response',
					correct_response: corrAns[i]
				},
				on_finish: function (data) {
					data.correct = data.response == data.correct_response;
					final.push(present1[i],present2[i],respond[i],corrAns[i],data.correct);
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

export default Attention1;
