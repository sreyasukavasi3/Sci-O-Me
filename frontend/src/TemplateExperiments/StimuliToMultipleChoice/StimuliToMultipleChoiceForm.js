import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function StimuliToMultipleChoiceForm(props) {
	let navigate = useNavigate();

	const [rangeValue, setRangeValue] = useState(5);
	const [questions, setQuestions] = useState(() => {
		let tempQuestions = [];
		for (let i = 0; i < rangeValue; i++) {
			tempQuestions.push({
				stimuli: null,
				answerChoice1: null,
				answerChoice2: null,
				answerChoice3: null,
				answerChoice4: null,
			});
		}
		return tempQuestions;
	});

	useEffect(() => {
		if (questions.length < rangeValue) {
			//	add blank questions
			let tempQuestions = [...questions]
			for (let i = 0; i < rangeValue - questions.length; i++) {
				tempQuestions.push({
					"stimuli": null,
					"answerChoice1": null,
					"answerChoice2": null,
					"answerChoice3": null,
					"answerChoice4": null,
				})
			}
			setQuestions(tempQuestions)
		} else if (questions.length > rangeValue) {
			//	remove questions from the back
			let tempQuestions = [...questions]
			for (let i = 0; i < questions.length - rangeValue; i++) {
				tempQuestions.pop()
			}
			setQuestions(tempQuestions)
		}
	}, [rangeValue]);

	function updateQuestions(e, index, field) {
		let tempArr = [...questions];
		tempArr[index][field] = e.target.files[0]
		setQuestions(tempArr)
	}

	return (
		<div>
			<h1 className="page-title fw-bold fs-3 text-dark">Stimuli to Multiple Choice</h1>
			<p className="text-muted">
				The experiment will show a stimuli (image) followed by a question and four image answer options.
			</p>
			<div className="row mt-4 g-2">
				<div className="col-md-6">
					<div className="row">
						<label htmlFor="numberOfQuestions" className="col">Number Of Questions</label>
						<p className={"col-auto mb-0"}>{rangeValue}</p>
						<div className="col-12 mt-1">
							<input type="range" className="form-range" min="1" max="50" value={rangeValue}
							       onChange={(e) => {
								       setRangeValue(e.target.value)
							       }}/>
						</div>
					</div>
				</div>

				<div className="col-md-6 text-end">
					<button className="btn btn-primary" onClick={() => {
						navigate('/experiment/qwerty123', {state: [...questions]})
					}}>
						<i className="bi bi-lightning-charge-fill"/> Create
					</button>
				</div>

				<div className="col-12">
					<input type="text" className="form-control bg-transparent" placeholder="Name of the Experiment"/>
				</div>

				<div className="col-12 mb-3">
					<textarea className="form-control bg-transparent" rows="3"
					          placeholder="What is the Experiment Question?"/>
				</div>

				{
					questions.map((value, index) => (
						<div className="col-12">
							<div className="card bg-light">
								<div className="card-body">
									<h5 className="fw-bold">{`Question ${index + 1}`}</h5>
									<div className="row g-2 align-items-center">
										<div className="col">
											<label className="form-label">Stimuli</label>
											<input className="form-control form-control-sm" type="file" accept="image/*"
											       onChange={(e) => updateQuestions(e, index, "stimuli")}/>
										</div>
										<div className="col text-center">
											<i className="bi bi-arrow-right fs-1 text-muted"/>
										</div>
										<div className="col">
											<label className="form-label">Answer (Correct)</label>
											<input className="form-control form-control-sm" type="file"
											       onChange={(e) => updateQuestions(e, index, "answerChoice1")}/>
										</div>
										<div className="col">
											<label className="form-label">Answer option 2</label>
											<input className="form-control form-control-sm" type="file"
											       onChange={(e) => updateQuestions(e, index, "answerChoice2")}/>
										</div>
										<div className="col">
											<label className="form-label">Answer option 3</label>
											<input className="form-control form-control-sm" type="file"
											       onChange={(e) => updateQuestions(e, index, "answerChoice3")}/>
										</div>
										<div className="col">
											<label className="form-label">Answer option 4</label>
											<input className="form-control form-control-sm" type="file"
											       onChange={(e) => updateQuestions(e, index, "answerChoice4")}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default StimuliToMultipleChoiceForm;
