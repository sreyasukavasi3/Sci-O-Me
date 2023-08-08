import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function ExperimentCard(props) {
	let navigate = useNavigate();

	return (
		<div className="col">
			<div className="card h-100">
				<div className="card-header text-muted">{props.experiment.type}</div>
				<div className="card-body">
					<h5 className="card-title" id={props.edit && "editable-card"} role="button"
					    onClick={() => {
						    props.edit && navigate('/experiment/bruh')
					    }}>
						{props.experiment.title}
					</h5>
					<p className="card-text fs-6 text-secondary">
						Brief description of the experiment here.
					</p>
					<div className="row g-1 justify-content-between">
						<div className="col-auto">
							<button type="button" className="btn btn-success btn-sm"
							        onClick={() => window.open(props.experiment.title.replace(" ", ""), "_blank")}>
								<i className="bi bi-play-fill"></i> Run
							</button>
						</div>
						<div className="col-auto">
							<button type="button" className="btn btn-outline-secondary btn-sm"
							        onClick={() => props.alert(true)}>
								<i className="bi bi-share-fill"></i> Share
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperimentCard;
