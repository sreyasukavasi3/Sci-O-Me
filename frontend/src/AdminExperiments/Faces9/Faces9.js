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

function Faces9(props) {
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
				`<p style="font-size:21px;"><b>This experiment tests your ability to remember facial features.  
                You will see an image of a face and then four images. 
                You are to identify which of the four is the same as the first. 
                There are 40 trials in total.
                <br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);

        // Adding present images list

        const present = ['/img/Faces9/image1.png'
        ,'/img/Faces9/image2.png'
        ,'/img/Faces9/image3.png'
        ,'/img/Faces9/image4.png'
        ,'/img/Faces9/image11.png'
        ,'/img/Faces9/image12.png'
        ,'/img/Faces9/image13.png'
        ,'/img/Faces9/image14.png'
        ,'/img/Faces9/image21.png'
        ,'/img/Faces9/image22.png'
        ,'/img/Faces9/image23.png'
        ,'/img/Faces9/image24.png'
        ,'/img/Faces9/image31.png'
        ,'/img/Faces9/image32.png'
        ,'/img/Faces9/image33.png'
        ,'/img/Faces9/image34.png'
        ,'/img/Faces9/image41.png'
        ,'/img/Faces9/image42.png'
        ,'/img/Faces9/image43.png'
        ,'/img/Faces9/image44.png'
        ,'/img/Faces9/image51.png'
        ,'/img/Faces9/image52.png'
        ,'/img/Faces9/image53.png'
        ,'/img/Faces9/image54.png'
        ,'/img/Faces9/image61.png'
        ,'/img/Faces9/image62.png'
        ,'/img/Faces9/image63.png'
        ,'/img/Faces9/image64.png'
        ,'/img/Faces9/image71.png'
        ,'/img/Faces9/image72.png'
        ,'/img/Faces9/image73.png'
        ,'/img/Faces9/image74.png'
        ,'/img/Faces9/image81.png'
        ,'/img/Faces9/image82.png'
        ,'/img/Faces9/image83.png'
        ,'/img/Faces9/image84.png'
        ,'/img/Faces9/image91.png'
        ,'/img/Faces9/image92.png'
        ,'/img/Faces9/image93.png'
        ,'/img/Faces9/image94.png'
        ]

        const respond1 = ['/img/Faces9/image1.png'
        ,'/img/Faces9/image1.png'
        ,'/img/Faces9/image1.png'
        ,'/img/Faces9/image1.png'
        ,'/img/Faces9/image11.png'
        ,'/img/Faces9/image11.png'
        ,'/img/Faces9/image11.png'
        ,'/img/Faces9/image11.png'
        ,'/img/Faces9/image21.png'
        ,'/img/Faces9/image21.png'
        ,'/img/Faces9/image21.png'
        ,'/img/Faces9/image21.png'
        ,'/img/Faces9/image31.png'
        ,'/img/Faces9/image31.png'
        ,'/img/Faces9/image31.png'
        ,'/img/Faces9/image31.png'
        ,'/img/Faces9/image41.png'
        ,'/img/Faces9/image41.png'
        ,'/img/Faces9/image41.png'
        ,'/img/Faces9/image41.png'
        ,'/img/Faces9/image51.png'
        ,'/img/Faces9/image51.png'
        ,'/img/Faces9/image51.png'
        ,'/img/Faces9/image51.png'
        ,'/img/Faces9/image61.png'
        ,'/img/Faces9/image61.png'
        ,'/img/Faces9/image61.png'
        ,'/img/Faces9/image61.png'
        ,'/img/Faces9/image71.png'
        ,'/img/Faces9/image71.png'
        ,'/img/Faces9/image71.png'
        ,'/img/Faces9/image71.png'
        ,'/img/Faces9/image81.png'
        ,'/img/Faces9/image81.png'
        ,'/img/Faces9/image81.png'
        ,'/img/Faces9/image81.png'
        ,'/img/Faces9/image91.png'
        ,'/img/Faces9/image91.png'
        ,'/img/Faces9/image91.png'
        ,'/img/Faces9/image91.png'
        

        ]

        const respond2 = ['/img/Faces9/image2.png'
        ,'/img/Faces9/image2.png'
        ,'/img/Faces9/image2.png'
        ,'/img/Faces9/image2.png'
        ,'/img/Faces9/image12.png'
        ,'/img/Faces9/image12.png'
        ,'/img/Faces9/image12.png'
        ,'/img/Faces9/image12.png'
        ,'/img/Faces9/image22.png'
        ,'/img/Faces9/image22.png'
        ,'/img/Faces9/image22.png'
        ,'/img/Faces9/image22.png'
        ,'/img/Faces9/image32.png'
        ,'/img/Faces9/image32.png'
        ,'/img/Faces9/image32.png'
        ,'/img/Faces9/image32.png'
        ,'/img/Faces9/image42.png'
        ,'/img/Faces9/image42.png'
        ,'/img/Faces9/image42.png'
        ,'/img/Faces9/image42.png'
        ,'/img/Faces9/image52.png'
        ,'/img/Faces9/image52.png'
        ,'/img/Faces9/image52.png'
        ,'/img/Faces9/image52.png'
        ,'/img/Faces9/image62.png'
        ,'/img/Faces9/image62.png'
        ,'/img/Faces9/image62.png'
        ,'/img/Faces9/image62.png'
        ,'/img/Faces9/image72.png'
        ,'/img/Faces9/image72.png'
        ,'/img/Faces9/image72.png'
        ,'/img/Faces9/image72.png'
        ,'/img/Faces9/image82.png'
        ,'/img/Faces9/image82.png'
        ,'/img/Faces9/image82.png'
        ,'/img/Faces9/image82.png'
        ,'/img/Faces9/image92.png'
        ,'/img/Faces9/image92.png'
        ,'/img/Faces9/image92.png'
        ,'/img/Faces9/image92.png'
        
        ]

        const respond3 = ['/img/Faces9/image3.png'
        ,'/img/Faces9/image3.png'
        ,'/img/Faces9/image3.png'
        ,'/img/Faces9/image3.png'
        ,'/img/Faces9/image13.png'
        ,'/img/Faces9/image13.png'
        ,'/img/Faces9/image13.png'
        ,'/img/Faces9/image13.png'
        ,'/img/Faces9/image23.png'
        ,'/img/Faces9/image23.png'
        ,'/img/Faces9/image23.png'
        ,'/img/Faces9/image23.png'
        ,'/img/Faces9/image33.png'
        ,'/img/Faces9/image33.png'
        ,'/img/Faces9/image33.png'
        ,'/img/Faces9/image33.png'
        ,'/img/Faces9/image43.png'
        ,'/img/Faces9/image43.png'
        ,'/img/Faces9/image43.png'
        ,'/img/Faces9/image43.png'
        ,'/img/Faces9/image53.png'
        ,'/img/Faces9/image53.png'
        ,'/img/Faces9/image53.png'
        ,'/img/Faces9/image53.png'
        ,'/img/Faces9/image61.png'
        ,'/img/Faces9/image63.png'
        ,'/img/Faces9/image63.png'
        ,'/img/Faces9/image63.png'
        ,'/img/Faces9/image73.png'
        ,'/img/Faces9/image73.png'
        ,'/img/Faces9/image73.png'
        ,'/img/Faces9/image73.png'
        ,'/img/Faces9/image83.png'
        ,'/img/Faces9/image83.png'
        ,'/img/Faces9/image83.png'
        ,'/img/Faces9/image83.png'
        ,'/img/Faces9/image93.png'
        ,'/img/Faces9/image93.png'
        ,'/img/Faces9/image93.png'
        ,'/img/Faces9/image93.png'
        
        ]


        const respond4 = ['/img/Faces9/image4.png'
        ,'/img/Faces9/image4.png'
        ,'/img/Faces9/image4.png'
        ,'/img/Faces9/image4.png'
        ,'/img/Faces9/image14.png'
        ,'/img/Faces9/image14.png'
        ,'/img/Faces9/image14.png'
        ,'/img/Faces9/image14.png'
        ,'/img/Faces9/image24.png'
        ,'/img/Faces9/image24.png'
        ,'/img/Faces9/image24.png'
        ,'/img/Faces9/image24.png'
        ,'/img/Faces9/image34.png'
        ,'/img/Faces9/image34.png'
        ,'/img/Faces9/image34.png'
        ,'/img/Faces9/image34.png'
        ,'/img/Faces9/image44.png'
        ,'/img/Faces9/image44.png'
        ,'/img/Faces9/image44.png'
        ,'/img/Faces9/image44.png'
        ,'/img/Faces9/image54.png'
        ,'/img/Faces9/image54.png'
        ,'/img/Faces9/image54.png'
        ,'/img/Faces9/image54.png'
        ,'/img/Faces9/image64.png'
        ,'/img/Faces9/image64.png'
        ,'/img/Faces9/image64.png'
        ,'/img/Faces9/image64.png'
        ,'/img/Faces9/image74.png'
        ,'/img/Faces9/image74.png'
        ,'/img/Faces9/image74.png'
        ,'/img/Faces9/image74.png'
        ,'/img/Faces9/image84.png'
        ,'/img/Faces9/image84.png'
        ,'/img/Faces9/image84.png'
        ,'/img/Faces9/image84.png'
        ,'/img/Faces9/image94.png'
        ,'/img/Faces9/image94.png'
        ,'/img/Faces9/image94.png'
        ,'/img/Faces9/image94.png'
        
        
        ]

		const corrAns = ['1','2','3','4','1','2','3','4','1','2','3','4'
        ,'1','2','3','4', '1','2','3','4','1','2','3','4'
        ,'1','2','3','4','1','2','3','4','1','2','3','4'
        ,'1','2','3','4','1','2','3','4','1','2','3','4'
        ,'1','2','3','4','1','2','3','4','1','2','3','4'
        ,'1','2','3','4','1','2','3','4','1','2','3','4'
        ,'1','2','3','4','1','2','3','4','1','2','3','4'
        ,'1','2','3','4','1','2','3','4','1','2','3','4'
    ]

		for (let i = 0; i < 40; i++) {

      console.log('Printinnnnnnnnnnnnnggggg')
			console.log(i)
			const t1Stimulus1 = {
                type: htmlKeyboardResponse,
                stimulus: `<img src="${present[i]}" width="50%">`,
              
                choices: "NO_KEYS",
                trial_duration: 1000,
              };

			timeline.push(t1Stimulus1);


			const t1ResponseScreen = {
				type: htmlKeyboardResponse,
                stimulus: `
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr); gap: 10px;">
      <div style="position: relative;">
        <img src="${respond1[i]}" style="width: 450px; height: 280px;">
        <div style="position: absolute; top: 5px; left: 5px; background-color: white; padding: 5px;">
          <p style="font-size: 18px; margin: 0;">1</p>
        </div>
      </div>
      <div style="position: relative;">
        <img src="${respond2[i]}" style="width: 450px; height: 280px;">
        <div style="position: absolute; top: 5px; left: 5px; background-color: white; padding: 5px;">
          <p style="font-size: 18px; margin: 0;">2</p>
        </div>
      </div>
      <div style="position: relative;">
      <img src="${respond3[i]}" style="width: 450px; height: 280px;">
      <div style="position: absolute; top: 5px; left: 5px; background-color: white; padding: 5px;">
        <p style="font-size: 18px; margin: 0;">3</p>
      </div>
    </div>
    <div style="position: relative;">
      <img src="${respond4[i]}" style="width: 450px; height: 280px;">
      <div style="position: absolute; top: 5px; left: 5px; background-color: white; padding: 5px;">
        <p style="font-size: 18px; margin: 0;">4</p>
      </div>
    </div>
  </div>
  <p style="font-size: 21px;"><b>Press the number for the image that matches the first</b></p>
`,

                choices: ['1', '2', '3', '4'],
				// prompt: `<p style="font-size:21px;"><br>Press number for the image that matches the first.</b></p>`,
				
				data: {
					task: 'response',
					correct_response: corrAns[i]
				},
				on_finish: function (data) {
					data.correct = data.response == data.correct_response;
					final.push(present[i],respond1[i],respond2[i],respond3[i],respond4[i],corrAns[i],data.correct);
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

export default Faces9;