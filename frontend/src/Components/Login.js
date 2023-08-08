import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login(props) {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="card">
			<div className="card-body">
				<h1 className="card-title fw-bold mb-3">Login</h1>
				<input type="email" className="form-control mb-3" id="emailInput" placeholder="Email Address"
				       onChange={(e) => setEmail(e.target.value)}/>
				<input type="password" className="form-control mb-3" id="passwordInput" placeholder="Password"
				       onChange={(e) => setPassword(e.target.value)}/>
				<div className="text-end">
					<button type="button" className="btn btn-light btn-sm mb-3 text-muted">Forgot Password?</button>
				</div>
				<button className="btn btn-primary w-100 mb-3" onClick={() => navigate("/dashboard")}>Login</button>
				<p className="text-center text-muted">or</p>
				<button className="btn btn-outline-secondary w-100 mb-3">
					<i className="bi bi-google"></i> Continue with Google
				</button>
			</div>
			<div className="card-footer text-center">
				<button className="btn btn-light btn-sm" onClick={() => props.authState(false)}>Register</button>
			</div>
		</div>
	);
}

export default Login;
