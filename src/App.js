import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";
import LayoutQuiz from "./components/QuizPage/LayoutQuiz";
import LayoutProfile from "./components/ProfilePage/LayoutProfile";
import RegisterForm from "./components/RegisterForm/register";
import StrengthSelectedPage from "./components/Strength/StrengthSelectedPage";
// import axios from "axios";
// import Choices from "./components/Choices";

function App() {
	return (
		<div className="display">
			<Routes>
				{/* <Route path="/" element={<LayoutQuiz />}> */}
				<Route path="/quiz" element={<LayoutQuiz />} />
				<Route path="/profile" element={<LayoutProfile />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/strength" element={<StrengthSelectedPage />} />
				{/* <Route path="login" element={<Dashboard />} /> */}
				{/* </Route> */}
			</Routes>
		</div>
	);
}

export default App;
