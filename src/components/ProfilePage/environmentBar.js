import React from "react";
import { Progress } from "antd";
import "./motivateBar.css";
const EnvironmentBar = () => {
	return (
		<div style={{ display : "flex", width : "100%" }}>
			<div className="left-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF" gapPosition="right"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
			</div>
			<div className="right-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} trailColor="#F3F8FF"/>
			</div>
		</div>
	);
};
export default EnvironmentBar;