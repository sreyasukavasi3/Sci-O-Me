import React, {useEffect, useState} from 'react';
import '../css/App.css'
import {useNavigate} from "react-router-dom";

function ExperimentDashboard(props) {
	const navigate = useNavigate();

	const [title, setTitle] = useState("Memory Limits");
	const [question, setQuestion] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?");

	return (
		<div className="container">
			<i className="bi bi-arrow-left opacity-50 fs-3" role={"button"}
			   onClick={() => {
				   navigate(-1)
			   }}
			/>
			<div className="header mt-2">
				<div className="row">
					<div className="col-auto">
						<h1 className="page-title fw-bold fs-3 text-dark">My Experiment 1</h1>
					</div>
					<div className="col-auto mt-1">
						<span className="badge rounded-pill text-bg-primary">Stimuli to Multiple Choice</span>
					</div>
				</div>
				<div className="form-floating">
						<textarea className="form-control bg-transparent" id="question" style={{height: "100px"}}
						          onChange={(e) => setQuestion(e.target.value)}
						          value={question}/>
					<label htmlFor="question">Question</label>
				</div>
			</div>

			<div className="mt-4">
				<ul className="nav nav-tabs nav-fill" role="tablist">
					<li className="nav-item" role="presentation">
						<button className="nav-link active" id="home-tab" data-bs-toggle="tab"
						        data-bs-target="#analytics-tab-pane" type="button" role="tab">
							<i className="bi bi-bar-chart-fill"></i> Analytics
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="profile-tab" data-bs-toggle="tab"
						        data-bs-target="#content-tab-pane" type="button" role="tab">
							<i className="bi bi-pencil-square"></i> Edit
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="contact-tab" data-bs-toggle="tab"
						        data-bs-target="#share-tab-pane" type="button" role="tab">
							<i className="bi bi-share-fill"></i> Share
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="disabled-tab" data-bs-toggle="tab"
						        data-bs-target="#settings-tab-pane" type="button" role="tab">
							<i className="bi bi-gear-fill"></i> Settings
						</button>
					</li>
				</ul>
			</div>

			<div className="tab-content p-4 bg-white vh-100 mb-5 border border-top-0 rounded-bottom">
				<div className="tab-pane fade show active" id="analytics-tab-pane" role="tabpanel" tabIndex="0">
					Graphs?
				</div>
				<div className="tab-pane fade" id="content-tab-pane" role="tabpanel" tabIndex="0">
					Edit
				</div>
				<div className="tab-pane fade" id="share-tab-pane" role="tabpanel" tabIndex="0">
					Share Settings
				</div>
				<div className="tab-pane fade" id="settings-tab-pane" role="tabpanel" tabIndex="0">
					Settings
				</div>
			</div>

			<button className="btn btn-success position-absolute bottom-0 end-0 mb-5 me-5 rounded-pill">
				<i className="bi bi-download"></i> Save Changes
			</button>
		</div>
	);
}

export default ExperimentDashboard;
