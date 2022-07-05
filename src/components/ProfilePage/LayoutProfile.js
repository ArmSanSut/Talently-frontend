/* eslint-disable react/jsx-key */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from "react";
import "./layoutProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import AchievementCreate from "./achievement/achievementCreate";
import MotivateBar from "./motivateBar";
import EnvironmentBar from "./environmentBar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BsFlag } from "react-icons/bs";
import { AiFillCalendar, AiOutlineEdit } from "react-icons/ai";
import { BsCheckSquare } from "react-icons/bs";
import UpdateAchievement from "./UpdateAchievement";

const LayoutProfile = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isModalDescription, setIsModalDescription] = useState(false);
	const [isModalUpdateAchievement, setIsModalUpdateAchievement] = useState(false);
	const [firstName, setFirstName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [email, setEmail] = useState([]);
	const [index, setIndex] = useState();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			var decode = jwt_decode(token);
			console.log(decode);

			const getFirstName = decode.firstname;
			setFirstName(getFirstName);

			const getLastName = decode.lastname;
			setLastName(getLastName);

			const getEmail = decode.email;
			setEmail(getEmail);
		}
	}, []);

	const handleOk = () => {
		setIsModalVisible(false);
		setIsModalDescription(false);
		setIsModalUpdateAchievement(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setIsModalDescription(false);
		setIsModalUpdateAchievement(false);
	};


	const [showSecondNav, setShowSecondNav] = useState(false);
	const [strength, setStrength] = useState([]);
	const [achievement, setAchievement] = useState([]);

	const navigate = useNavigate();


	useEffect(() => {
		const getStrength = () => {
			const id = localStorage.getItem("ID");
			axios.get(`http://localhost:3000/api/user/strength/${id}`)
				.then((res) => {
					setStrength(res.data);
				}).catch(err => console.log(err));
		};
		getStrength();
	}, []);

	useEffect(() => {
		const getAchievement = () => {
			const id = localStorage.getItem("ID");
			axios.get(`http://localhost:3000/api/user/achievement/${id}`)
				.then((response) => {
					console.log("data", response);
					setAchievement(response.data);
					console.log(response.data);
					console.log(achievement.length);
				}).catch(err => console.log(err));
		};
		getAchievement();
		console.log(achievement);
	}, [isModalVisible]);

	useEffect(() => {
		const getAchievement = () => {
			const id = localStorage.getItem("ID");
			axios.get(`http://localhost:3000/api/user/achievement/${id}`)
				.then((response) => {
					console.log("data", response);
					setAchievement(response.data);
					console.log(response.data);
					console.log("achievement",achievement);
				}).catch(err => console.log(err));
		};
		getAchievement();
		console.log(achievement);
	}, [isModalUpdateAchievement]);

	const handleHamburgerClick = (e) => {
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};
	const handleAddStrength = () => {
		navigate("/strength");
	};
	const handleAddAchievement = () => {
		setIsModalVisible(true);
	};

	const showDescription = () => {
		setIsModalDescription(true);
	};

	const editDescription = (i) => {
		setIsModalUpdateAchievement(true);
		setIndex(i);
	};

	return (
		<div className="profile">
			<div className="profile-bg">
				<img className="profile-bluebg" src="bluebg.png" />
				<img className="profile-purplebg" src="purplebg.png" />
				<nav className="head-profile1">
					<img className="profile-logo" src="logo.png" />
					<ul className="center">
						<li className="item-center">
							<Link to="/about">เกี่ยวกับเรา</Link>
						</li>
						<li className="item-center">
							<Link to="/quiz">แบบทดสอบ</Link>
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
							<h4>{firstName} {lastName}</h4>
							<h4>{email}</h4>
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
									<li><BsCheckSquare className="checkCicle-list"></BsCheckSquare> ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
									<li><BsCheckSquare className="checkCicle-list"></BsCheckSquare> ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
								</ul>
							</div>
							<div>
								<ul style={{ listStyleType: "none", width: "100%" }}>
									<li><BsCheckSquare className="checkCicle-list"></BsCheckSquare> ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
									<li> <BsCheckSquare className="checkCicle-list"></BsCheckSquare> ฉันเป็นคนสื่อสารอย่างตรงไปตรงมา</li>
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
								<div>
									<EnvironmentBar />
								</div>
							</div>
							<div className="work-box">
								<div className="work-header-box">
									<img className="icon" src="icon.png" style={{ margin: 10, width: "30px", height: "30px" }} />
									<h3 className="text-motivated">Ideal Work</h3>
								</div>
								<div>
									<MotivateBar />
								</div>
							</div>
						</div>
						<div className="right-container">
							<div className="radar-chart-box">
								<h5 className="text-right-container-1">พลังงาน / แรงขับเคลื่อน</h5>
							</div>
							<div className="strength-box">
								{/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}> */}
								<div className="strength-box-head">
									<h5 className="text-right-container-2">จุดแข็ง 8 อันดับแรก</h5>
									<button className="btn1" onClick={handleAddStrength}>+ เพิ่ม</button>
								</div>
								{/* </div> */}
								<div className="display-image-strength">
									{strength && strength.map(x => (

										<div >
											<img className="img-strength" key={x.image} src={"http://localhost:3000/strength_images/" + x.image} style={{ margin: 10, }} />
										</div>


									))}
								</div>
							</div>
							<div className="achievement-box">
								{/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}> */}
								<div className="achievement-box-head">
									<div>
										<h5 className="text-right-container-3">ความสำเร็จในชีวิต</h5>
									</div>
									<div>
										{achievement.length <= 1 ?
											<div>
												<button className="btn2" onClick={handleAddAchievement}>+ เพิ่ม</button>
												<Modal title="Achievements" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
													<AchievementCreate setIsModalVisible={setIsModalVisible} />
												</Modal>
											</div>
											:
											<>
												<Modal title="Update Achievements" visible={isModalUpdateAchievement} onOk={handleOk} onCancel={handleCancel} footer={null}>
													<UpdateAchievement setIsModalUpdateAchievement={setIsModalUpdateAchievement} achievement={achievement[index]}/>
												</Modal>
											</>
										}
									</div>
								</div>
								<div className="display-achievement">
									{achievement && achievement.map((y,i) => (
										<div className="achievement" >
											{achievement.length <= 1 ?
												<div>
													<h3 className="title" key={y.id}>{y.title}</h3>
													<Modal title="Achievement" visible={isModalDescription} onOk={handleOk} onCancel={handleCancel} footer={null}>
														<h3 className="title">{y.title}</h3>
														<h6>Description :<p className="description"> {y.description}</p></h6>
														<h6>Duration <AiFillCalendar></AiFillCalendar> : <p className="date"> {y.date_start} to {y.date_end}</p></h6>
													</Modal>
													<p className="date">{y.date_start} to {y.date_end} <a className="read-more" onClick={showDescription}>อ่านต่อ </a></p>
													<p className="type-achievement"><BsFlag></BsFlag> {y.type}</p>
												</div>
												:
												<div>
													<h3 className="title" key={y.id}>{y.title} <a className="edit-description" onClick={() => editDescription(i)}> <AiOutlineEdit></AiOutlineEdit></a></h3>
													<Modal title="Achievement" visible={isModalDescription} onOk={handleOk} onCancel={handleCancel} footer={null}>
														<h3 className="title">{y.title}</h3>
														<h6>Description :<p className="description"> {y.description}</p></h6>
														<h6>Duration <AiFillCalendar></AiFillCalendar> : <p className="date"> {y.date_start} to {y.date_end}</p></h6>
													</Modal>
													<p className="date">{y.date_start} to {y.date_end} <a className="read-more" onClick={showDescription}>อ่านต่อ </a></p>
													<p className="type-achievement"><BsFlag></BsFlag> {y.type}</p>
												</div>
											}
										</div>
									))}
								</div>

								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LayoutProfile;
