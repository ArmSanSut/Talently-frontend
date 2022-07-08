import React,  { useEffect, useState } from "react";
import { Progress } from "antd";
import "./IdealworkBar.css";
import axios from "axios";

const IdealWorkBar = () => {
	const url = "http://54.179.56.185:3000";
	const id = localStorage.getItem("ID");
	// const [, setLoad] = useState(true);
	const [percent, setPercent] = useState([]);

	const progressBarTagLeft = ["Proven Methods", "Work with fact", "Predictability","Structure"];
	const progressBarTagRight = ["New Solution", "Work with people", "Variety","Flexibility"];

	const UserScore = async ()=> {
		// setLoad(false);
		const getScore = await axios.get(`${url}/api/user/score/${id}`);
		const totalScore = getScore.data[0].score.score;
		const scoreW = totalScore.scoreW;
		// const [tempValue, ] = useState([]);
		const temp = [];
		
		for (let index = 0; index < 4; index++) {
			let mFirst = scoreW[`W${2*index + 1}`];
			let mSecond = scoreW[`W${2*index + 2}`];
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
		<div className="ideal-type">
			<div className="left-side-bar-ideal">
				{percent && percent.map ((val, index) => (
					<>
						<h5>{progressBarTagLeft[index]}</h5>
						{val[0] == "L" ? (
							<Progress percent={val[1]} strokeWidth="10px" showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-left"/>
						) : (
							<Progress percent={100} strokeWidth="10px" showInfo={false} trailColor="#F3F8FF" className="progress-display-gray-left"/>
						)}
						
					</>
				))}
			</div>
			<div className="right-side-bar-ideal">
				{percent && percent.map ((val, index) => (
					<>
						<h5>{progressBarTagRight[index]}</h5>
						{val[0] == "R" ? (
							<Progress percent={val[1]} strokeWidth="10px" showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-right"/>
						) : (
							<Progress percent={100} strokeWidth="10px" showInfo={false} trailColor="#F3F8FF" className="progress-display-gray-right"/>
						)}
						
					</>
				))}
			</div>
		</div>
	);
};
export default IdealWorkBar;