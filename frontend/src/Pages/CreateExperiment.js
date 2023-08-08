import React from 'react';
import {useNavigate} from "react-router-dom";
import NewExperimentCard from "../Components/NewExperimentCard";
import SearchHeader from "../Components/SearchHeader";
import templatesList from "../TemplateExperiments/TemplatesList";

function CreateExperiment() {
	let navigate = useNavigate();

	return (
		<div className="container">
			<i className="bi bi-arrow-left opacity-50 fs-3" role={"button"}
			   onClick={() => {
				   navigate('/dashboard')
			   }}/>
			<SearchHeader title="New Experiment" subtitle="Select an experiment from the available templates below"/>
			<div className="new-experiment-cards mt-4">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					{
						templatesList.map(experiment => (
							<NewExperimentCard
								title={experiment.type}
								description={experiment.description}
								thumbnail={experiment.thumbnail}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default CreateExperiment;
