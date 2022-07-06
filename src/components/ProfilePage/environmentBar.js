import React,  { useEffect, useState } from "react";
import { Progress } from "antd";
import "./environmentBar.css";
import axios from "axios";

const EnvironmentBar = () => {
	const id = localStorage.getItem("ID");
	// const [, setLoad] = useState(true);
	const [percent, setPercent] = useState([]);

	const progressBarTagLeft = ["Deliberate", "Reflective", "Steady","Cautious"];
	const progressBarTagRight = ["Decisive", "Outgoing", "Spontaneous","Free Form"];

	const UserScore = async ()=> {
		// setLoad(false);
		const getScore = await axios.get(`http://localhost:3000/api/user/score/${id}`);
		const totalScore = getScore.data[0].score.score;
		const scoreM = totalScore.scoreM;
		// const [tempValue, ] = useState([]);
		const temp = [];
		
		for (let index = 0; index < 4; index++) {
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
				{percent && percent.map ((val, index) => (
					<>
						<h5>{progressBarTagLeft[index]}</h5>
						{val[0] == "L" ? (
							<Progress percent={val[1]} showInfo={false} trailColor="#F3F8FF" className="progress-display-green-environment-left"/>
						) : (
							<Progress percent={100} showInfo={false} trailColor="#F3F8FF" className="progress-display-gray-environment-left"/>
						)}
						
					</>
				))}
			</div>
			<div className="right-side-bar">
				{percent && percent.map ((val, index) => (
					<>
						<h5>{progressBarTagRight[index]}</h5>
						{val[0] == "R" ? (
							<Progress percent={val[1]} showInfo={false} trailColor="#F3F8FF" className="progress-display-green-environment-right"/>
						) : (
							<Progress percent={100} showInfo={false} trailColor="#F3F8FF" className="progress-display-gray-environment-right"/>
						)}
						
					</>
				))}
			</div>
		</div>
	);
};
export default EnvironmentBar;