import React,  { useEffect, useState } from "react";
import { Progress } from "antd";
import "./environmentBar.css";
import axios from "axios";

const EnvironmentBar = () => {
	const id = localStorage.getItem("ID");
	// const [, setLoad] = useState(true);
	const [percent, setPercent] = useState([]);

	const UserScore = async ()=> {
		// setLoad(false);
		const getScore = await axios.get(`http://localhost:3000/api/user/score/${id}`);
		const totalScore = getScore.data[0].score.score;
		const scoreM = totalScore.scoreM;
		// const [tempValue, ] = useState([]);
		const temp = [];
		
		for (let index = 0; index < 6; index++) {
			let mFirst = scoreM[`M${2*index + 1}`];
			let mSecond = scoreM[`M${2*index + 2}`];
			let score = mFirst - mSecond;
			let percentDisplay = ((mFirst + mSecond)/40)*100;
			// console.log(score);
			if (score > 0 ){

				temp.push(["L", percentDisplay]);
	
			}else if (score < 0) {

				temp.push(["R", percentDisplay]);
					
			}else {

				temp.push(["E", percentDisplay]);
					
			}
			console.log(index);
		}
		setPercent(temp);
		// return temp;
	};
		
	console.log(percent);
	useEffect(() => {
		UserScore();

		console.log(percent.length);	
	}, []);

	return (
		<div style={{ display : "flex", width : "100%" }}>
			<div className="left-side-bar">
				<h5>Deliberate</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>Reflective</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>Steady</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>Cautious</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
			</div>
			<div className="right-side-bar">
				<h5>Decisive</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>Outgoing</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>Spontaneous</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>Free Form</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
			</div>
		</div>
	);
};
export default EnvironmentBar;