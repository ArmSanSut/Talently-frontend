import React from "react";
import { Progress } from "antd";
import "./IdealworkBar.css";
const IdealworkBar = () => {
	return (
		<div style={{ display : "flex", width : "100%" }}>
			<div className="left-side-bar">
				<h5>Proven Methods</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-left"/>
				<h5>Work with fact</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-left"/>
				<h5>Predictability</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-left"/>
				<h5>Structure</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-left"/>
			</div>
			<div className="right-side-bar">
				<h5>New Solution</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-right"/>
				<h5>Work with people</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-right"/>
				<h5>Variety</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-right"/>
				<h5>Flexibility</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-orange-right"/>
			</div>
		</div>
	);
};
export default IdealworkBar;