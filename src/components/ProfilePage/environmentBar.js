import React from "react";
import { Progress } from "antd";
import "./environmentBar.css";
const EnvironmentBar = () => {
	return (
		<div style={{ display : "flex", width : "100%" }}>
			<div className="left-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-left"/>
			</div>
			<div className="right-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} strokeWidth="16px" showInfo={false} trailColor="#F3F8FF" className="progress-display-environment-right"/>
			</div>
		</div>
	);
};
export default EnvironmentBar;