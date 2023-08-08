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
const data = [];
let currentScore = 0;
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

function SaccadeTime(props) {
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
				`<p style="font-size:21px;"><b> In the previous experiment (PeripheralVis) you discovered that your peripheral vision had much lower acuity than your central vision. 
				This fact was revealed by presenting letters in the corner or the center of the screen.  
                <br> The letters were presented so briefly that you were unable to move your eyes (a saccade) to the corner of the screen in time to see the letter before it disappeared. 
				<br> In order to determine the saccade time we can leave the letters on the screen for a longer period. 
				<br> When the time is long enough for you to move your central vision to the corner of the screen, you will be able to perceive the identity of the small letters in the corner. 
				<br> In this experiment the letters will remain small throughout the experiment but the time that they are present will decrease with each trial. 
				<br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);

        const welcome2 = {
			type: instructions,
			pages: [
				`<p style="font-size:21px;"><b> In this experiment, a letter will appear briefly somewhere on the screen
				Try to move your eye to see the letter.
				<br> You will be asked which letter you saw.
				<br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome2);   

		const welcome3 = {
			type: instructions,
			pages: [
				`<p style="font-size:21px;"><b> There are 5 trials in total.
				<br> Press Next to continue.
                </br></b></p>`,
				
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome3);   

        

		// Adding present images list
		const present = ['p', 'q','d','b','o','p','q','d','b','o',
        'p','q','d','b','o','p','q','d','b','o',
        'p','q','d','b','o','p','q','d','b','o'
        ]

        const x_cord = ['left', 'right', 'left', 'right' ];
        const y_cord = ['top', 'top', 'bottom', 'bottom'];

        // const sizes = [600, 400, 200, 120, 80];
		const frames = [320, 340, 380, 460, 620];
		const corrAns = ['1', '1','1','1','1','1','1','1','1','1',
        'p','q','d','b','o','p','q','d','b','o',
        'p','q','d','b','o','p','q','d','b','o']
		
        // Shuffling function
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
        }
          
        const shuffleIndex = Array.from(Array(present.length).keys());
        shuffleArray(shuffleIndex);

        const shuffledPresent = shuffleIndex.map((index) => present[index]);
        const shuffledXCord = shuffleIndex.map((index) => x_cord[index % 4]);
        const shuffledYCord = shuffleIndex.map((index) => y_cord[index % 4]);
        const shuffledCorrAns = shuffleIndex.map((index) => corrAns[index]);

        for (let t = 0; t < 5; t++) {
            const duration = frames[t];
			const textSize = 120;
            for (let i = 0; i < 30; i++) {
                // console.log('print somethingggg',i,shuffledXCord[i], shuffledYCord[i], shuffledCorrAns[i] );
                if(shuffledCorrAns[i] == '1'){
                    const t1Stimulus1 = {
                        type: htmlKeyboardResponse,
                        stimulus: `<div style="position: absolute; font-weight: bold; font-size: ${textSize}%;">${shuffledPresent[i]}</div>`,
                        choices: "NO_KEYS",
                        trial_duration: duration,
                    };
        
                    timeline.push(t1Stimulus1);

                }else {
                    const t1Stimulus1 = {
                    type: htmlKeyboardResponse,
                    stimulus: `<div style="position: absolute; font-weight: bold; ${shuffledXCord[i]}: 50px; ${shuffledYCord[i]}: 50px; font-size: ${textSize}%;"> ${shuffledPresent[i]}</div>`,
                    choices: "NO_KEYS",
                    trial_duration: duration,
                    };

                    timeline.push(t1Stimulus1);

                }
            

			const t1ResponseScreen = {
				type: imageKeyboardResponse,
				stimulus: '',
				choices: [' ', 'p', 'q', 'd', 'b', 'o'],
				prompt: `<p style="font-size:21px;"><b>What letter did you see? 
                <br> Press the correct lower case letter key or Press 'space' for do not know  </br></b></p>`,
				
				data: {
					task: 'response',
					correct_response: shuffledCorrAns[i]
				},
				on_finish: function (data) {
					data.correct = data.response == data.correct_response;
					final.push(shuffledPresent[i],shuffledCorrAns[i],data.correct);
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
            
            if(i==29 || i==59 || i==89 || i==119 || i== 149){
                timeline.push({
                type: htmlButtonResponse,
                stimulus: function () {
                const trials = jsPsych.data.get().filter({task: 'response'});
                const correct_trials = trials.filter({correct: true});
                
                const score = correct_trials.count() - currentScore; // Calculate score for the current trial
                // console.log(`Total ${correct_trials.count()}` )
                // console.log(`Currentscore ${currentScore}` )
                // console.log(`displayscore ${score}` )
                // console.log('HIII HONEY')
                currentScore = score+ currentScore; // Update the cumulative score
                console.log(`Currentscoreafter ${currentScore}` )
                return `<p style="font-size:21px;"><b>You scored ${score} out 20 questions correctly. The score includes only correct answers for letters appearing in the corners. </b></p>`
                },
                choices: ['Finish'],
                prompt: `<p style="font-size:21px;"><b>Click finish to end this trail</b></p>`,
                });
                
            }             
                                          
		}}
		jsPsych.run(timeline);
	}, []);

	return (
		<>
			{/*	LEAVE EMPTY */}
		</>
	);
}

export default SaccadeTime;
