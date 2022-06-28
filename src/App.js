import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutQuiz from "./components/QuizPage/LayoutQuiz";
import LayoutProfile from "./components/ProfilePage/LayoutProfile";
// import Choices from "./components/Choices";

function App() {
	return (
		<div className="display">
			<Routes>
				{/* <Route path="/" element={<LayoutQuiz />}> */}
				<Route path="/quiz" element={<LayoutQuiz />} />
				<Route path="/profile" element={<LayoutProfile />} />
				{/* <Route path="login" element={<Dashboard />} /> */}
				{/* </Route> */}
			</Routes>
		</div>
	);
}

export default App;
