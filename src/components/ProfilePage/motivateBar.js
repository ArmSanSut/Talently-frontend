import React from "react";
import { Progress } from "antd";
import "./motivateBar.css";
const MotivateBar = () => {
	return (
		<div style={{ display : "flex", width : "100%" }}>
			<div className="left-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-left"/>
			</div>
			<div className="right-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" className="progress-display-blue-right"/>
			</div>
		</div>
	);
};
export default MotivateBar;