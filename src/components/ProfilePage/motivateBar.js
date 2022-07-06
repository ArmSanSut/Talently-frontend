/* eslint-disable no-empty */
import React  from "react";
import { Progress } from "antd";
import "./motivateBar.css";
// import axios from "axios";
const MotivateBar = () => {

	

	return (
		<div style={{ display : "flex", width : "100%" }}>
			
			<div className="left-side-bar">
				<h5>Helping</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>Supporting</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>knowledge</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>Order</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>Service</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>Belonging</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
			</div>
			<div className="right-side-bar">
				<h5>Self Reliance</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>Influence</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>Practicality</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>Freedom</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>Financial Security</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>Uniqueness</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
			</div>
			
		</div>
	);
};
export default MotivateBar;