/* eslint-disable linebreak-style */
/* eslint-disable indent */
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import LayoutQuiz from "./components/QuizPage/LayoutQuiz";
import LayoutProfile from "./components/ProfilePage/LayoutProfile";
import StrengtSelectedPage from "./components/Strength/StrengtSelectedPage";

function App() {
	return (
		<div className="display">
			<Routes>
				{/* <Route path="/" element={<LayoutQuiz />}> */}
				<Route index element={<StrengtSelectedPage />} />
				<Route path="/quiz" element={<LayoutQuiz />} />
				<Route path="/profile" element={<LayoutProfile />} />
				{/* </Route> */}
			</Routes>
		</div>
	);
}

export default App;
