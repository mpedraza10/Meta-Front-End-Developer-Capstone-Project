// React improts
import React from "react";
import ReactDOM from "react-dom/client";

// React router imports
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.css";

// Components
import App from "./App";

// Vitals
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
