import React, {useState} from 'react';
import Login from "../Components/Login";
import Register from "../Components/Register";

function Auth(props) {
	const [authStatus, setAuthStatus] = useState(true);


	return (
		<div className="container w-25 mt-5">
			{
				authStatus ? <Login authState={setAuthStatus}></Login> : <Register authState={setAuthStatus}></Register>
			}
			{/*<p className="text-danger fw-bold text-center mt-2">Demo only - please press login or register to proceed to the dashboard</p>*/}
		</div>
	);
}

export default Auth;
