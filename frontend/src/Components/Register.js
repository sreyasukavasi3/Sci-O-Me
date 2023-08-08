import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function Register(props) {
	let navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="card">
			<div className="card-body">
				<h1 className="card-title fw-bold mb-3">Register</h1>
				<input type="text" className="form-control mb-3" id="nameInput" placeholder="Full Name"
				       onChange={(e) => setName(e.target.value)}/>
				<input type="email" className="form-control mb-3" id="emailInput" placeholder="Email Address"
				       onChange={(e) => setEmail(e.target.value)}/>
				<input type="password" className="form-control mb-3" id="passwordInput" placeholder="Password"
				       onChange={(e) => setPassword(e.target.value)}/>
				<button className="btn btn-primary w-100 mb-3" onClick={() => navigate("/dashboard")}>Register</button>
				<p className="text-center text-muted">or</p>
				<button className="btn btn-outline-secondary w-100 mb-3">
					<i className="bi bi-google"></i> Continue with Google
				</button>
			</div>
			<div className="card-footer text-center">
				<button className="btn btn-light" onClick={() => props.authState(true)}>Login</button>
			</div>
		</div>
	);
}

export default Register;
