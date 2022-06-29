/* eslint-disable linebreak-style */
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import QuizItem from "./QuizItem";

const LayoutQuiz = () => {

	const [showSecondNav, setShowSecondNav] = useState(false);

	const handleHamburgerClick = (e) => {
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};

	return (
		<div className="quiz-bg">
			<img className="bluebg" src="bluebg.png" />
			<img className={`purplebg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="purplebg.png" />
			<img className={`yellowbg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="yellowbg.png" />
			<div>
				<nav className="nav-quiz1">
					<img className="quiz-logo" src="logo.png" />
					<ul className="quiz-center">
						<li className="item-quiz-center">
							<Link to="/about">เกี่ยวกับเรา</Link>
						</li>
						<li className="item-quiz-center">
							<Link to="/quiz">แบบทดสอบ</Link>
						</li>
					</ul>
					<ul className="quiz-login">
						<li className="item-quiz-login">
							<Link to="/login">เข้าสู่ระบบ</Link>
						</li>
					</ul>
				</nav>
			</div>      
			<div className={`box-question ${showSecondNav ? "show-navbar-quiz" : ""}`}>
				<QuizItem />
			</div>
			<nav className="nav-quiz2">
				<img className="quiz-logo" src="logo.png" />
				<label className="label-quiz" htmlFor="check">
					{showSecondNav ? (
						<i
							className="fas fa-times"
							id="quiz-icon1"
							onClick={handleHamburgerClick}
						></i>
					) : (
						<i
							className="fas fa-bars"
							id="quiz-icon2"
							onClick={handleHamburgerClick}
						></i>
					)}
				</label>
				<ul className={`quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
					<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
						<Link to="/about">เกี่ยวกับเรา</Link>
					</li>
					<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
						<Link to="/quiz">แบบทดสอบ</Link>
					</li>
					<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
						<Link to="/login">เข้าสู่ระบบ</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default LayoutQuiz;
