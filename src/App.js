import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import LayoutQuiz from "./components/QuizPage/LayoutQuiz";
import LayoutProfile from "./components/ProfilePage/LayoutProfile";
import RegisterForm from "./components/RegisterForm/register";
// import Login from "./components/Login/Login";
import StrengthSelectedPage from "./components/Strength/StrengthSelectedPage";
import AchievementCreate from "./components/ProfilePage/achievement/achievementCreate";
import LayoutLogin from "./components/Login/LayoutLogin";
import HomeLayout from "./components/HomePage/HomeLayout";

function App() {

	return (
<<<<<<< HEAD
		<div className="display">
			<Routes>
				{/* <Route path="/" element={<LayoutQuiz />}> */}
				<Route path="/login" element={<Login />} />
				<Route path="/quiz" element={<LayoutQuiz />} />
				<Route path="/profile" element={<LayoutProfile />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/strength" element={<StrengthSelectedPage />} />
				<Route path="/achievement" element={<AchievementCreate />} />
				{/* <Route path="/login" element={<Login />} /> */}
				{/* </Route> */}
			</Routes>
		</div>
=======
		<Routes>

			<Route index element={<HomeLayout />} />
			<Route path="/login" element={<LayoutLogin />} />
			<Route path="/register" element={<RegisterForm />} />
			<Route path="/quiz" element={<LayoutQuiz />} />
			<Route path="/profile" element={<LayoutProfile />} />
			<Route path="/strength" element={<StrengthSelectedPage />} />
			<Route path="/achievement" element={<AchievementCreate />} />

		</Routes>
>>>>>>> ba36f23c7ca40db745065aba1066f9b10c113d44
	);
}

export default App;
