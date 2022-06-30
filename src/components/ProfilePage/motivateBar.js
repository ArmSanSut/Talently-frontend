import React from "react";
import { Progress } from "antd";
import "./motivateBar.css";
const MotivateBar = () => {
	return (
		<div style={{ display : "flex", width : "100%" }}>
			<div className="left-side-bar">
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} />
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} />
				<h5>การช่วยเหลือผู้คน</h5>
				<Progress percent={50} showInfo={false} />
				<h5>อิสระเสรี</h5>
				<Progress percent={50} showInfo={false} />
			</div>
			<div className="right-side-bar">
				<h1>bar2</h1>
			</div>
		</div>
	);
};
export default MotivateBar;