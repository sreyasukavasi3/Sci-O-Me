// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

// React Router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Global project CSS. Use App.css for page level css.
import './css/index.css';

// Pages
import App from './App';
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import CreateExperiment from './Pages/CreateExperiment';
import CreateExperimentForm from "./Pages/CreateExperimentForm";
import ExperimentDashboard from "./Pages/ExperimentDashboard";

// Experiments
import MemoryLimits from "./AdminExperiments/MemoryLimits/MemoryLimits";
import Attention1 from "./AdminExperiments/Attention1/Attention1";
import Faces9 from "./AdminExperiments/Faces9/Faces9";
import MemoryObjects1 from "./AdminExperiments/MemoryObjects1/MemoryObjects1";
import MemoryObjects6 from "./AdminExperiments/MemoryObjects6/MemoryObjects6";
import PeripheralVision from "./AdminExperiments/PeripheralVision/PeripheralVision";
import SaccadeTime from "./AdminExperiments/SaccadeTime/SaccadeTime";
import Test from "./TemplateExperiments/Test/Test";
import Test1 from "./TemplateExperiments/Test1/Test1";
import _TemplateExperiment from "./AdminExperiments/_TemplateExperiment";
import FeaturedDashboard from "./Pages/FeaturedDashboard";

// AWS Amplify
// import {Amplify} from 'aws-amplify';
// import awsExports from './aws-exports';
//
// Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}/>
				<Route path="auth" element={<Auth/>}/>
				<Route path="dashboard" element={<Dashboard/>}/>
				<Route path="featured" element={<FeaturedDashboard/>}/>

				{/* DYNAMIC USER EXPERIMENTS */}
				<Route path="experiment">
					<Route path="new" element={<CreateExperiment/>}/>
					<Route path="new/:experimentType" element={<CreateExperimentForm/>}/>
					<Route path=":experiment" element={<ExperimentDashboard/>}/>
				</Route>

				{/* STATIC ADMIN EXPERIMENTS */}
				<Route path="template-experiment" element={<_TemplateExperiment/>}/>
				<Route path="MemoryLimits" element={<MemoryLimits/>}/>
				<Route path="Attention1" element={<Attention1/>}/>
				<Route path="Faces9" element={<Faces9/>}/>
				<Route path="MemoryObjects1" element={<MemoryObjects1/>}/>
				<Route path="MemoryObjects6" element={<MemoryObjects6/>}/>
				<Route path="PeripheralVision" element={<PeripheralVision/>}/>
				<Route path="SaccadeTime" element={<SaccadeTime/>}/>
				<Route path="Test" element={<Test/>}/>
				<Route path="Test1" element={<Test1/>}/>


				{/* Display 404 page when no route match */}
				<Route path="*" element={<p>Error 404: Page not found</p>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
