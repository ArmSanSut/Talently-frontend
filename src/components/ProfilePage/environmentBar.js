import React from "react";
import { Progress } from "antd";
import "./environmentBar.css";
const EnvironmentBar = () => {
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