import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import templatesList from "../TemplateExperiments/TemplatesList";
import StimuliToMultipleChoiceForm from "../TemplateExperiments/StimuliToMultipleChoice/StimuliToMultipleChoiceForm";
import StimuliToAlphabetForm from "../TemplateExperiments/StimuliToAlphabet/StimuliToAlphabetForm";
import StimuliToNumerical from "../TemplateExperiments/StimuliToNumerical";

function CreateExperimentForm(props) {
	const {experimentType} = useParams();
	let navigate = useNavigate();

	function getFormToLoad() {
		if (experimentType === 'stimuli-to-multiple-choice') {
			return <StimuliToMultipleChoiceForm/>
		} else if (experimentType === 'stimuli-to-alphabet') {
			return <StimuliToAlphabetForm/>
		} else if (experimentType === 'stimuli-to-numerical') {
			return <StimuliToNumerical/>
		}
	}

	return (
		<div className="container">
			<i className="bi bi-arrow-left opacity-50 fs-3" role={"button"} onClick={() => {
				navigate("/experiment/new")
			}}></i>

			<div className="mb-4">
				{
					getFormToLoad()
				}
			</div>

		</div>
	);
}

export default CreateExperimentForm;
