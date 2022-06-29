/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./quiz.css";
import Choices from "./Choices";
import { Button, Progress, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addAnswer } from "./storeReducer";
import Login from "../Login/Login";

// eslint-disable-next-line react/prop-types
const QuizItem = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const dispatch = useDispatch();

	const [number, setNumber] = useState(1);
	const [percent, setPercent] = useState(2.86);
	const [question, setQuestion] = useState([]);

	const [choice1, setChoice1] = useState("");
	const [choice2, setChoice2] = useState("");
	const [choice3, setChoice3] = useState("");
	const [choice4, setChoice4] = useState("");


	const [choiceSelected, setChoiceSelected] = useState([]);

	const [order, setOrder] = useState(["4", "3", "2", "1"]);

	const handleNext = (id) => {
		if (choiceSelected.length !== 4) return;
		let check = dispatch(addAnswer({ id, answer: choiceSelected.join() }));
		console.log(check);
		if (number < 35) {
			setNumber(number + 1);
		}
		setPercent(number * 2.86);

		if (number == 35) {
			console.log("complete test");
		}

		setOrder(["4", "3", "2", "1"]);
		setChoice1("");
		setChoice2("");
		setChoice3("");
		setChoice4("");
		setChoiceSelected([]);
	};

	const handleClick1 = e => {
		e.preventDefault();
		if (!choice1) {
			setChoice1(order.pop());
			setChoiceSelected(choiceSelected ? [...choiceSelected, "1"] : "1");
		}
	};
	const handleClick2 = e => {
		e.preventDefault();
		if (!choice2) {
			setChoice2(order.pop());
			setChoiceSelected(choiceSelected ? [...choiceSelected, "2"] : "2");
		}
	};
	const handleClick3 = e => {
		e.preventDefault();
		if (!choice3) {
			setChoice3(order.pop());
			setChoiceSelected(choiceSelected ? [...choiceSelected, "3"] : "3");
		}
	};
	const handleClick4 = e => {
		e.preventDefault();
		if (!choice4) {
			setChoice4(order.pop());
			setChoiceSelected(choiceSelected ? [...choiceSelected, "4"] : "4");
		}
	};

	const handleReset = e => {
		e.preventDefault();
		setOrder(["4", "3", "2", "1"]);
		setChoice1("");
		setChoice2("");
		setChoice3("");
		setChoice4("");
		setChoiceSelected([]);

	};
	const getData = () => {
		const url = "http://localhost:3000";
		axios.get(`${url}/api/user/`).then((res) => {
			setQuestion(res.data);
		});
	};
	useEffect(() => {
		getData();
	}, []);
	console.log(choiceSelected);

	return (
		<div>
			<div className="box">
				<div className="inbox">
					<div className="bar">
						<p style={{ margin: "0px", fontSize: "16px" }}>คำถามที่ {number} จาก 35</p>
						<Progress percent={percent} showInfo={false} />
					</div>
					<div>
						<h5 className="head">
							{question.map(val =>
								val.id === number && (
									`Question ${val.id} : ${val.question}`

								)
							)}
						</h5>
					</div>
					<div className="choice-list-grid">

						{question.map(val =>
							val.id === number && (
								<>
									<div onClick={handleClick1}><Choices order={choice1} title={val.choice_1} /></div>
									<div onClick={handleClick2}><Choices order={choice2} title={val.choice_2} /></div>
									<div onClick={handleClick3}><Choices order={choice3} title={val.choice_3} /></div>
									<div onClick={handleClick4}><Choices order={choice4} title={val.choice_4} /></div>

								</>
							)
						)
						}
					</div>

					<div className="btn">
						<button className="list-btn1" onClick={handleReset}>เคลียร์คำตอบ</button>
						{number === 35 ? <Button
							onClick={showModal}
						>
							ส่งคำตอบ
						</Button> : <Button
							className="list-btn2"
							onClick={() => handleNext(question[number - 1].id)}
						>
							ต่อไป
						</Button>}
					</div>
				</div>
			</div>
			<Modal className="modal-login" title="Please Login!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
				<Login />
			</Modal>
		</div>

	);
};

export default QuizItem;