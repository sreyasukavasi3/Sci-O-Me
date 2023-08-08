import React from 'react';
import {useNavigate} from "react-router-dom";

function NewExperimentCard(props) {
	let navigate = useNavigate();

	return (
		<div className="col">
			<div className="card h-100">
				<img src={props.thumbnail} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<button className="btn btn-outline-secondary btn-sm" onClick={() => {
						navigate(props.title.toLowerCase().replaceAll(" ", "-"))
					}}>
						<i className="bi bi-lightning-charge-fill"/> Create
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewExperimentCard;
