<<<<<<< HEAD
import React, { useState } from "react";
import "./layoutProfile.css";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const LayoutProfile = () => {
	const [showSecondNav, setShowSecondNav] = useState(false);

	const handleHamburgerClick = (e) => {
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};
	return (
		<div className="profile">
			<div className="profile-bg">
				<img className="profile-bluebg" src="bluebg.png" />
				<img className="profile-purplebg" src="profile-purplebg.png" />
				<nav className="head-profile1">
					<img className="profile-logo" src="logo.png" />
					<ul className="center">
						<li className="item-center">
							<Link to="/about">เกี่ยวกับเรา</Link>
						</li>
						<li className="item-center">
							<Link to="/test">แบบทดสอบ</Link>
						</li>
						<li className="item-center">
							<Link to="/contact">ติดต่อเรา</Link>
						</li>
						<li className="item-center">
							<Link to="/help">ช่วยเหลือ</Link>
						</li>
					</ul>
					<ul className="right">
						<li className="item-right">
							<Link to="/login">เข้าสู่ระบบ</Link>
						</li>
					</ul>
				</nav>
				<nav className="head-profile2">
					<img className="profile-logo" src="logo.png" />
					<label className="label-profile" htmlFor="check">
						{showSecondNav ? (
							<i
								className="fas fa-times"
								id="profile-icon1"
								onClick={handleHamburgerClick}
							></i>
						) : (
							<i
								className="fas fa-bars"
								id="profile-icon2"
								onClick={handleHamburgerClick}
							></i>
						)}
					</label>
					<ul className={`nav2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/about">เกี่ยวกับเรา</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/test">แบบทดสอบ</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/contact">ติดต่อเรา</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/help">ช่วยเหลือ</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/login">เข้าสู่ระบบ</Link>
						</li>
					</ul>
					{/* <input type="checkbox" className="profile-check" /> */}
				</nav>
				<div className="dashboard-container">
					<div className="about-me-container">
						<div className="user-detail" style={{ display: "flex", justifyContent :"center"}}>
							<Avatar size={55} icon={<UserOutlined />} style={{ marginTop : 10 }}/>
						</div>
						<div className="description-detail">
							<h4 className="text-description">เกี่ยวกับตัวฉัน</h4>
							<h4 className="text-description-2">ฉันชอบทำงานที่ให้อิสระทางความคิด และชื่นชอบที่จะได้พบปะกับผู้คนใหม่ๆ</h4>
						</div>
					</div>
					<div className="personality-container">
						<h5 className="text-personality-container">สื่อสารกับฉันอย่างไร</h5>
						<div style={{ display : "flex", color : "black" }}>
							<div>
								<ul style={{ listStyleType : "none", width : "100%"}}>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>									
								</ul>
							</div>
							<div>
								<ul style={{ listStyleType : "none", width : "100%" }}>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="results-container">
						<div className="left-container">
							<h5 className="text-results-container">ผลลัพธ์จากบททดสอบ</h5>
							<div className="motivated-box"></div>
							<div className="environment-box"></div>
							<div className="work-box"></div>
						</div>
						<div className="right-container">
							<div className="radar-chart-box">
								<h5 className="text-rigth-container">พลังงาน และ แรงขับเคลื่อน</h5>
							</div>
							<div className="strength-box">
								<h5 className="text-rigth-container">จุดแข็ง 8 อันดับแรก</h5>
							</div>
							<div className="achievement-box">
								<h5 className="text-rigth-container">ความสำเร็จในชีวิต</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default LayoutProfile;
=======
import React, { useState } from "react";
import "./layoutProfile.css";
import { Link } from "react-router-dom";

const LayoutProfile = () => {
	const [showSecondNav, setShowSecondNav] = useState(false);

	const handleHamburgerClick = (e) => {
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};
	return (
		<div className="profile">
			<div className="profile-bg">
				<img className="profile-bluebg" src="bluebg.png" />
				<img className="profile-purplebg" src="profile-purplebg.png" />
				<nav className="head-profile1">
					<img className="profile-logo" src="logo.png" />
					<ul className="center">
						<li className="item-center">
							<Link to="/about">เกี่ยวกับเรา</Link>
						</li>
						<li className="item-center">
							<Link to="/test">แบบทดสอบ</Link>
						</li>
						<li className="item-center">
							<Link to="/contact">ติดต่อเรา</Link>
						</li>
						<li className="item-center">
							<Link to="/help">ช่วยเหลือ</Link>
						</li>
					</ul>
					<ul className="right">
						<li className="item-right">
							<Link to="/login">เข้าสู่ระบบ</Link>
						</li>
					</ul>
				</nav>
				<nav className="head-profile2">
					<img className="profile-logo" src="logo.png" />
					<label className="label-profile" htmlFor="check">
						{showSecondNav ? (
							<i
								className="fas fa-times"
								id="profile-icon1"
								onClick={handleHamburgerClick}
							></i>
						) : (
							<i
								className="fas fa-bars"
								id="profile-icon2"
								onClick={handleHamburgerClick}
							></i>
						)}
					</label>
					<ul className={`nav2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/about">เกี่ยวกับเรา</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/test">แบบทดสอบ</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/contact">ติดต่อเรา</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/help">ช่วยเหลือ</Link>
						</li>
						<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
							<Link to="/login">เข้าสู่ระบบ</Link>
						</li>
					</ul>
					{/* <input type="checkbox" className="profile-check" /> */}
				</nav>
			</div>
		</div>
	);
};

export default LayoutProfile;
>>>>>>> 382052e13e8c5976848ae26486f410d929e19557
