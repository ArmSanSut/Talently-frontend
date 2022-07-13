/* eslint-disable linebreak-style */
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import QuizItem from "./QuizItem";

const LayoutQuiz = () => {

	const [showSecondNav, setShowSecondNav] = useState(false);

	const handleHamburgerClick = (e) => {
		console.log("hamberger", e);
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};

	console.log(showSecondNav);

	const token = localStorage.getItem("token");

	return (
		<div>
			{token ?
				<div className="quiz-bg">
					<img className="bluebg" src="bluebg.png" />
					<img className={`purplebg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="purplebg.png" />
					<img className={`yellowbg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="yellowbg.png" />
					<div>
						<nav className="nav-quiz1">
							<img className="quiz-logo" src="logo.png" />
							<ul className="quiz-center">
								<li className="item-quiz-center">
									<Link to="/">เกี่ยวกับเรา</Link>
								</li>
								<li className="item-quiz-center">
									<Link to="/quiz">แบบทดสอบ</Link>
								</li>
								<li className="item-quiz-center">
									<Link to="/contact">ติดต่อเรา</Link>
								</li>
								<li className="item-quiz-center">
									<Link to="/help">ช่วยเหลือ</Link>
								</li>
							</ul>
							<ul className="quiz-login">
								<li className="item-quiz-login">
									<Link to="/logout">ออกจากระบบ</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className={`box-question ${showSecondNav ? "show-navbar-quiz" : ""}`}>
						<QuizItem />
					</div>
					<nav className="nav-quiz2">
						<img className="quiz-logo" src="logo.png" />
						{showSecondNav ? (
							<label className="label-quiz1" htmlFor="check" onClick={handleHamburgerClick}>
								<i
									className="fas fa-times"
									id="quiz-icon1"
								></i>
							</label>
						) : (
							<label className="label-quiz2" htmlFor="check" onClick={handleHamburgerClick} >
								<i
									className="fas fa-bars"
									id="quiz-icon2"
								></i>
							</label>
						)}
						<ul className={`quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
							<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
								<Link to="/">เกี่ยวกับเรา</Link>
							</li>
							<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
								<Link to="/quiz">แบบทดสอบ</Link>
							</li>
							<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
								<Link to="/contact">ติดต่อเรา</Link>
							</li>
							<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
								<Link to="/help">ช่วยเหลือ</Link>
							</li>
							<li className={`item-quiz ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
								<Link to="/logout">ออกจากระบบ</Link>
							</li>
						</ul>
					</nav>
					<Outlet />
				</div>
				:
				<div className="not-authorized-page">
					<h1 className="not-authorized">You are not authorized to access this page!!</h1>
					<h2 className="login-first">Please Login...</h2>
					<Link to="/"><button className="not-authorized-btn"> Back to Home</button></Link>
				</div>
			}
		</div>
	);
};

export default LayoutQuiz;
