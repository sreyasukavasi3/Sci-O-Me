import React, {useMemo} from 'react';

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
const trials = [
	{
		"test1": {
			"stimulus": "",
			"question": "",
			"solution": ""
		}
	}
	
]

function MemoryObjects6(props) {
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
				`<p style="font-size:21px;"><b> This experiment will test your memory for objects. 
                There will be 4 trials of 10 images each. Try to remember the specific objects that you see in each image.  
				<br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);


		// Adding present images list
		const present = ['<img src="/img/MemoryObjects6/Image1.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image2.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image3.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image4.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image5.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image6.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image7.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image8.jpg" alt="">'
	
		,'<img src="/img/MemoryObjects6/Image9.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image10.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image11.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image12.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image13.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image14.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image15.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image16.jpg" alt="">'
	
		,'<img src="/img/MemoryObjects6/Image17.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image18.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image19.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image20.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image21.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image22.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image23.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image24.jpg" alt="">'
        ,'<img src="/img/MemoryObjects6/Image25.jpg" alt="">'
        
        ,'<img src="/img/MemoryObjects6/Image26.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image27.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image28.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image29.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image30.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image31.jpg" alt="">'
	
		,'<img src="/img/MemoryObjects6/Image32.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image33.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image34.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image35.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image36.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image37.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image38.jpg" alt="">'
		,'<img src="/img/MemoryObjects6/Image39.jpg" alt="">'
        ,'<img src="/img/MemoryObjects6/Image40.jpg" alt="">'
    
    ]


		const respond = ['/img/MemoryObjects6/Image41.jpg', '/img/MemoryObjects6/Image41.jpg',
		 '/img/MemoryObjects6/Image41.jpg', '/img/MemoryObjects6/Image41.jpg', '/img/MemoryObjects6/Image41.jpg'
		 , '/img/MemoryObjects6/Image42.jpg', '/img/MemoryObjects6/Image42.jpg', '/img/MemoryObjects6/Image42.jpg'
		
		,'/img/MemoryObjects6/Image42.jpg', '/img/MemoryObjects6/Image42.jpg',
		'/img/MemoryObjects6/Image43.jpg', '/img/MemoryObjects6/Image43.jpg', '/img/MemoryObjects6/Image43.jpg'
		, '/img/MemoryObjects6/Image43.jpg', '/img/MemoryObjects6/Image43.jpg', '/img/MemoryObjects6/Image44.jpg'
	
		,'/img/MemoryObjects6/Image44.jpg', '/img/MemoryObjects6/Image44.jpg',
		'/img/MemoryObjects6/Image44.jpg', '/img/MemoryObjects6/Image44.jpg', '/img/MemoryObjects6/Image45.jpg'
		, '/img/MemoryObjects6/Image45.jpg', '/img/MemoryObjects6/Image45.jpg', '/img/MemoryObjects6/Image45.jpg'
        , '/img/MemoryObjects6/Image45.jpg'  

        ,'/img/MemoryObjects6/Image46.jpg', '/img/MemoryObjects6/Image46.jpg',
		 '/img/MemoryObjects6/Image46.jpg', '/img/MemoryObjects6/Image46.jpg', '/img/MemoryObjects6/Image46.jpg'
		 , '/img/MemoryObjects6/Image47.jpg', '/img/MemoryObjects6/Image47.jpg', '/img/MemoryObjects6/Image47.jpg'
		
		,'/img/MemoryObjects6/Image47.jpg', '/img/MemoryObjects6/Image47.jpg',
		'/img/MemoryObjects6/Image48.jpg', '/img/MemoryObjects6/Image48.jpg', '/img/MemoryObjects6/Image48.jpg'
		, '/img/MemoryObjects6/Image48.jpg', '/img/MemoryObjects6/Image48.jpg'
    
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
				trial_duration: 2000,
			};

			timeline.push(t1Stimulus1);


			const t1ResponseScreen = {
				type: imageKeyboardResponse,
				stimulus: respond[i],
				choices: ['1', '2', '3', '4', '5'],
				prompt: `<p style="font-size:21px;"><b>How many of the objects from the last image are present in this image?  
                <br> Press the corresponding number key: 1, 2, 3, 4 or 5. </br></b></p>`,
				
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
	}, []);

	return (
		<>
			{/*	LEAVE EMPTY */}
		</>
	);
}

export default MemoryObjects6;
