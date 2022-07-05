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
import Logout from "./components/Logout/Logout";
import StrengthEditedPage from "./components/Strength/UpdateStrength";
function App() {

	return (
		<Routes>

			<Route index element={<HomeLayout />} />
			<Route path="/login" element={<LayoutLogin />} />
			<Route path="/register" element={<RegisterForm />} />
			<Route path="/quiz" element={<LayoutQuiz />} />
			<Route path="/profile" element={<LayoutProfile />} />
			<Route path="/strength" element={<StrengthSelectedPage />} />
			<Route path="/edit-strength" element={<StrengthEditedPage />} />
			<Route path="/achievement" element={<AchievementCreate />} />
			<Route path="/logout" element={<Logout />} />
		</Routes>
	);
}

export default App;
