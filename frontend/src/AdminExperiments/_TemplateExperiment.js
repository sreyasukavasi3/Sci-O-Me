import React, {useMemo} from 'react';

// CSS styles
import 'jspsych/css/jspsych.css';

// jsPsych
import {initJsPsych} from 'jspsych';

// jsPsych plugins - https://www.jspsych.org/7.2/plugins/list-of-plugins/
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';


function _TemplateExperiment(props) {
	// Single render - no deps
	// We don't want to re-render the experiment for any reason!!
	useMemo(() => {
		// Initialize jsPsych
		const jsPsych = initJsPsych();

		// Create the experiment timeline - https://www.jspsych.org/7.2/overview/timeline/
		let timeline = [];

		// Display welcome message
		const welcome = {
			type: htmlKeyboardResponse,
			stimulus: "This experiment"
		};

		// Add welcome step to timeline
		timeline.push(welcome);

		// Display instructions
		var instructions = {
			type: htmlKeyboardResponse,
			stimulus: `
			    <p>In this experiment, a circle will appear in the center 
			    of the screen.</p><p>If the circle is <strong>blue</strong>, 
			    press the letter F on the keyboard as fast as you can.</p>
			    <p>If the circle is <strong>orange</strong>, press the letter J 
			    as fast as you can.</p>
			    <div style='width: 700px;'>
			    <div style='float: left;'><img src='img/blue.png'></img>
			    <p class='small'><strong>Press the F key</strong></p></div>
			    <div style='float: right;'><img src='img/orange.png'></img>
			    <p class='small'><strong>Press the J key</strong></p></div>
			    </div>
			    <p>Press any key to begin.</p>
            `,
			post_trial_gap: 2000
		};

		timeline.push(instructions);


		jsPsych.run(timeline);
	}, []);

	return (
		<>
			{/*	LEAVE EMPTY */}
		</>
	);
}

export default _TemplateExperiment;
