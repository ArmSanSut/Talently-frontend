/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from "react";
import "./layoutProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Form, Modal, Button } from "antd";
import AchievementCreate from "./achievement/achievementCreate";
import MotivateBar from "./motivateBar";
import EnvironmentBar from "./environmentBar";
import IdealworkBar from "./idealworkBar";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BsFlag } from "react-icons/bs";
import { AiFillCalendar, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsCheckSquare } from "react-icons/bs";
import UpdateAchievement from "./UpdateAchievement";

const LayoutProfile = () => {
	const url = "http://localhost:3000";
	const [updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isEditModalVisible, setIsEditModalVisible] = useState(false);
	const [isModalDescription, setIsModalDescription] = useState(false);
	const [isModalUpdateAchievement, setIsModalUpdateAchievement] = useState(false);
	const [firstName, setFirstName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [email, setEmail] = useState([]);
	const [image, setImage] = useState(null);
	const [profileImage, setProfileImage] = useState(() => {
		return localStorage.getItem("image");
	});
	const [index, setIndex] = useState();
	const [modalDetailValue, setModalDetailValue] = useState();

	// const [editAchievement, setEditAchievement] = useState([]);


	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			var decode = jwt_decode(token);

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
		// isModalDescription[i] = false;
		setIsEditModalVisible(false);
		setIsModalUpdateAchievement(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setIsModalDescription(false);
		// isModalDescription[i] = false;
		setIsEditModalVisible(false);
		setIsModalUpdateAchievement(false);
	};

	const [showSecondNav, setShowSecondNav] = useState(false);
	let [strength, setStrength] = useState([]);
	const [achievement, setAchievement] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const getStrength = () => {
			const id = localStorage.getItem("ID");
			axios.get(`${url}/api/user/strength/${id}`)
				.then((res) => {
					setStrength(res.data);
				}).catch(err => console.log(err));
		};
		getStrength();
	}, []);

	useEffect(() => {
		const getAchievement = () => {
			const id = localStorage.getItem("ID");
			axios.get(`${url}/api/user/achievement/${id}`)
				.then((response) => {
					setAchievement(response.data);
				}).catch(err => console.log(err));
		};
		getAchievement();
	}, [isModalVisible]);

	useEffect(() => {
		const getAchievement = () => {
			const id = localStorage.getItem("ID");
			axios.get(`${url}/api/user/achievement/${id}`)
				.then((response) => {
					setAchievement(response.data);
				}).catch(err => console.log(err));
		};
		getAchievement();
	}, [isModalUpdateAchievement]);

	const handleHamburgerClick = (e) => {
		e.preventDefault();
		setShowSecondNav(!showSecondNav);
	};
	const handleAddStrength = () => {
		navigate("/strength");
	};
	const handleEditStrength = () => {
		navigate("/edit-strength");
	};
	const handleAddAchievement = () => {
		setIsModalVisible(true);
	};

	const showDescription = (val) => {
		setModalDetailValue(val);
		setIsModalDescription(true);
		forceUpdate();
	};

	const onEditImage = () => {
		setIsEditModalVisible(true);
	};
	const handleSubmitForm = () => {
		try {
			const formData = new FormData();
			formData.append("image", image);
			// const url = "http://localhost:3000";
			const id = localStorage.getItem("ID");
			axios.put(`${url}/api/user/edit-image/${id}`, formData).then(result => {
				setProfileImage(result.data.profileImage);
				localStorage.setItem("image", result.data.profileImage);
			});
		}
		catch (err) {
			console.log("ERROR", err);
		}
		setIsEditModalVisible(false);
	};

	const editDescription = (val ,i) => {
		setIsModalUpdateAchievement(true);
		setModalDetailValue(val);
		setIndex(i);
		forceUpdate();
	};

	const deleteAchievement = async (id) => {
		try {
			await axios.delete(`${url}/api/user/achievement/${id}`);

		} catch (e) {
			console.log(e);
		}

		const user_id = localStorage.getItem("ID");
		axios.get(`${url}/api/user/achievement/${user_id}`)
			.then((response) => {
				setAchievement(response.data);
			}).catch(err => console.log(err));
	};

	const token = localStorage.getItem("token");

	return (
		<div>
			{token ?
				<div className="profile">
					<div className="profile-bg">
						<img className="profile-bluebg" src="bluebg.png" />
						<img className="profile-purplebg" src="purple-profile.png" />
						<nav className="head-profile1">
							<img className="profile-logo" src="logo.png" />
							<ul className="center">
								<li className="item-center">
									<Link to="/">เกี่ยวกับเรา</Link>
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
									<Link to="/logout">ออกจากระบบ</Link>
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
									<Link to="/">เกี่ยวกับเรา</Link>
								</li>
								<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
									<Link to="/quiz">แบบทดสอบ</Link>
								</li>
								<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
									<Link to="/contact">ติดต่อเรา</Link>
								</li>
								<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
									<Link to="/help">ช่วยเหลือ</Link>
								</li>
								<li className={`item2 ${showSecondNav ? "" : "hide-navbar-profile"}`}>
									<Link to="/logout">ออกจากระบบ</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="dashboard-container">
						<div className="about-me-container">
							<div className="user-detail" >
								<Avatar size={100} src={`http://localhost:3000/static/users_images/${profileImage}`} style={{ marginTop: 2 }} onClick={onEditImage} />
								<Modal title="Edit Profile Image" visible={isEditModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
									<Form
										onFinish={handleSubmitForm}
									>
										<input type="file" onChange={(e) => setImage(e.target.files[0])} /> Upload Image
										<Form.Item
											wrapperCol={{
												offset: 0,
												span: 16,
											}}
										>
											<Button className="btn-submit" htmlType="submit">
												ยืนยันการเปลี่นแปลง
											</Button>

										</Form.Item>
									</Form>
								</Modal>
								<h4 className="firstname">{firstName} {lastName}</h4>
								<h4 className="email">{email}</h4>
								<div className="hashtag-box">
									<h4 className="hashtag">#dreamer</h4>
								</div>
							</div>
							<div className="description-detail">
								<div>
									<h4 className="text-description">เกี่ยวกับตัวฉัน</h4>
									<h4 className="text-description-2">ฉันชอบทำงานที่ให้อิสระทางความคิด และชื่นชอบที่จะได้พบปะกับผู้คนใหม่ๆ</h4>
								</div>
								<div>
									<img src="circle.png" className="circle" />
									<img src="person.png" className="person" />
								</div>
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
										<hr />
										<div className="motivated_result_left">
											การช่วยเหลือผู้คน
										</div>
										<div className="motivated_result_right">
											เมาท์คอนเซ็ปต์ แคนยอน ไอเดีย โรแมนติกนิรันดร์อาร์ติสต์แคมป์บลูเบอร์รี เอาท์ไฮกุเพียบแปร้โฮลวีต
										</div>
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
										<hr />
										<div className="environment_result_left">
											การช่วยเหลือผู้คน
										</div>
										<div className="environment_result_right">
											เมาท์คอนเซ็ปต์ แคนยอน ไอเดีย โรแมนติกนิรันดร์อาร์ติสต์แคมป์บลูเบอร์รี เอาท์ไฮกุเพียบแปร้โฮลวีต
										</div>
									</div>
								</div>
								<div className="work-box">
									<div className="work-header-box">
										<img className="icon" src="icon.png" style={{ margin: 10, width: "30px", height: "30px" }} />
										<h3 className="text-motivated">Ideal Work</h3>
									</div>
									<div>
										<IdealworkBar />
										<hr />

										<div className="ideal_result_left">
											การช่วยเหลือผู้คน

										</div>
										<div className="ideal_result_right">
											เมาท์คอนเซ็ปต์ แคนยอน ไอเดีย โรแมนติกนิรันดร์อาร์ติสต์แคมป์บลูเบอร์รี เอาท์ไฮกุเพียบแปร้โฮลวีต
										</div>
									</div>
								</div>
							</div>
							<div className="right-container">
								<div className="strength-box">
									<div className="strength-box-head">
										<h5 className="text-right-container-2">จุดแข็ง 8 อันดับแรก</h5>
										{strength.length === 8 ? <button className="btn1" onClick={handleEditStrength}>+ แก้ไข</button>
											:
											<button className="btn1" onClick={handleAddStrength}>+ เพิ่ม</button>
										}
									</div>
									<div className="display-image-strength">
										{strength && strength.map(x => (

											<div key = {"strength-box-" +x.id}>
												<img className="img-strength" key={x.image} src={"http://localhost:3000/strength_images/" + x.image} style={{ margin: 10, }} />
											</div>


										))}
									</div>
								</div>
								<div className="achievement-box">
									<div className="achievement-box-head">
										<div>
											<h5 className="text-right-container-3">ความสำเร็จในชีวิต</h5>
										</div>
										<div>
											{achievement.length <= 1 ?
												<button className="btn2" onClick={handleAddAchievement}>+ เพิ่ม</button> :
												<></>}
											<Modal title="Achievements" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
												<AchievementCreate setIsModalVisible={setIsModalVisible} />
											</Modal>
											<Modal title="Update Achievements" visible={isModalUpdateAchievement} onOk={handleOk} onCancel={handleCancel} footer={null}>
												{ index > -1 ? <UpdateAchievement setIsModalUpdateAchievement={setIsModalUpdateAchievement} achievement={achievement[index]} /> 
													: <div>Loading...</div>
												}
											</Modal>
										</div>
									</div>
									<div className="display-achievement">
										{isModalDescription && (
											<Modal title="Achievement" visible={isModalDescription} onOk={handleOk} onCancel={handleCancel} footer={null}>
												<div className="modal-display-achievement">
													<h6>Title :  </h6>
													<p className="title-2">{modalDetailValue.title}</p>
												</div>
												<div className="modal-display-achievement">
													<h6>Description :  </h6>
													<p className="description">{modalDetailValue.description}</p>
												</div>
												<div className="modal-display-achievement">
													<h6>Duration <AiFillCalendar></AiFillCalendar> :  </h6>
													<p className="date">{modalDetailValue.date_start} to {modalDetailValue.date_end}</p>
												</div>
											</Modal>
										)}
										{achievement && achievement.map((y, i) => {
											return (
												<div className="achievement" key={"achievement-box-" +i} >
													<div>
														<h3 className="title" key={y.id}>{y.title}
															<a className="delete-achievement" onClick={() => deleteAchievement(y.id)}><AiOutlineDelete></AiOutlineDelete></a>
															<a className="edit-description" onClick={() => editDescription(y,i)}> <AiOutlineEdit></AiOutlineEdit></a>
														</h3>
														<p className="date">{y.date_start} to {y.date_end} <a className="read-more" onClick={() => showDescription(y)}> อ่านต่อ </a></p>
														<p className="type-achievement"><BsFlag></BsFlag> {y.type}</p>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>

				:
				<div className="not-authorized-page">
					<h1 className="not-authorized">You are not authorized to access this page!!</h1>
					<h2 className="login-first">Please Login...</h2>
					<Link to="/"><button className="not-authorized-btn"> Back to Home</button></Link>
				</div>
			}
		</div>
	);
};

export default LayoutProfile;
