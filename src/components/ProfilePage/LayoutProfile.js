import React, { useState, useEffect } from "react";
import "./layoutProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import AchievementCreate from "./achievement/achievementCreate";
import MotivateBar from "./motivateBar";
import axios from "axios";

const LayoutProfile = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);	
	const handleOk = () => {
		setIsModalVisible(false);
	};
	
	const handleCancel = () => {
		setIsModalVisible(false);
	};
	

	const [showSecondNav, setShowSecondNav] = useState(false);
	const [strength, setStrength] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const getStrength = () => {
			axios.get("http://localhost:3000/api/user/strength/1")
				.then((res) => {
					setStrength(res.data);
				}).catch(err => console.log(err));
		};
		getStrength();
	}, []);

	const handleHamburgerClick = (e) => {
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};
	const handleAddStrength = () => {
		navigate("/strength");
	};
	const handleAddAchievement = () => {
		// navigate("/achievement");
		// console.log("add 2 click");
		setIsModalVisible(true);
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
						<div className="user-detail" >
							<Avatar size={55} icon={<UserOutlined />} style={{ marginTop: 2 }} />
							<h4>Amonrat Pongka</h4>
							<h4>Amonrat.Pongka@gmail.com</h4>
							<div className="hashtag-box">
								<h4 className="hashtag">#dreamer</h4>
							</div>
						</div>
						<div className="description-detail">
							<h4 className="text-description">เกี่ยวกับตัวฉัน</h4>
							<h4 className="text-description-2">ฉันชอบทำงานที่ให้อิสระทางความคิด และชื่นชอบที่จะได้พบปะกับผู้คนใหม่ๆ</h4>
						</div>
					</div>
					<div className="personality-container">
						<h5 className="text-personality-container">สื่อสารกับฉันอย่างไร</h5>
						<div style={{ display: "flex", color: "black" }}>
							<div>
								<ul style={{ listStyleType: "none", width: "100%" }}>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
								</ul>
							</div>
							<div>
								<ul style={{ listStyleType: "none", width: "100%" }}>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
									<li>ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="results-container">
						<div className="left-container">
							<h5 className="text-results-container">ผลลัพธ์จากบททดสอบ</h5>
							<div className="motivated-box">
								<div className="motivate-header-box">
									<img className="icon" src="icon.png" style={{ margin: 10, width: "30px", height: "30px" }} />
									<h3 className="text-motivated">Motivated By</h3>
									<img className="icon-2" src="important_sign.png" style={{ width: "20px", height: "20px", margin: 10, marginTop: 18 }} />
								</div>
								<div>
									<MotivateBar />
								</div>
							</div>
							<div className="environment-box">
								<div className="environment-header-box">
									<img className="icon" src="icon.png" style={{ margin: 10, width: "30px", height: "30px" }} />
									<h3 className="text-motivated">Best Environment</h3>
									<img className="icon-2" src="important_sign.png" style={{ width: "20px", height: "20px", margin: 10, marginTop: 18 }} />
								</div>
							</div>
							<div className="work-box">
								<div className="work-header-box">
									<img className="icon" src="icon.png" style={{ margin: 10, width: "30px", height: "30px" }} />
									<h3 className="text-motivated">Ideal Work</h3>
								</div>
							</div>
						</div>
						<div className="right-container">
							<div className="radar-chart-box">
								<h5 className="text-right-container-1">พลังงาน / แรงขับเคลื่อน</h5>
							</div>
							<div className="strength-box">
								<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
									<div></div>
									<div className="strength-box-head">
										<h5 className="text-right-container-2">จุดแข็ง 8 อันดับแรก</h5>
										<button className="btn1" onClick={handleAddStrength}>+ เพิ่ม</button>
									</div>
								</div>
								{strength && strength.map(x => (<>
									<img key={x.image} src={"http://localhost:3000/strength_images/" + x.image} />
								</>))}
							</div>
							<div className="achievement-box">
								<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
									<div></div>
									<div className="achievement-box-head">
										<h5 className="text-right-container-3">ความสำเร็จในชีวิต</h5>
										<button className="btn2" onClick={handleAddAchievement}>+ เพิ่ม</button>
										<Modal title="Personal Achievements" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
											<AchievementCreate />
										</Modal>
									</div>

								</div>



							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default LayoutProfile;
