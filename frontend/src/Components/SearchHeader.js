import React from 'react';

function SearchHeader(props) {
	return (
		<div>
			<h1 className="page-title fw-bold fs-3 text-dark">{props.title}</h1>
			<p className="text-muted">{props.subtitle}</p>
			<div className="input-group mb-3">
				<span className="input-group-text bg-transparent border-end-0"><i className="bi bi-search opacity-75"/></span>
				<input type="text" className="form-control fs-6 bg-transparent border-start-0" placeholder="Search"/>
				{/*<button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>*/}
			</div>
		</div>
	);
}

export default SearchHeader;
