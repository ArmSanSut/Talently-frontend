/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./quiz.css";
import Choices from "./Choices";
import { Button, Progress, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "./storeReducer";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const QuizItem = () => {
	const navigate = useNavigate();
	const answers_selected = useSelector(state => state.answer.answers);
	console.log("answers", answers_selected);

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

	const [isModalVisible, setIsModalVisible] = useState(false);


	const onSubmitAnswer = () => {
		if (number === 4) {
			console.log("answers bug", answers_selected);
			const answerStr = JSON.stringify(answers_selected);
			console.log("3",answerStr);
			let answers = JSON.parse(answerStr);
		const id = parseInt(localStorage.getItem("ID"), 10);
		if (answers) {
			console.log("4",answers);
			for (let index = 0; index < answers.length; index++) {
				answers[index][0] = id;
			}
			axios.post("http://localhost:3000/api/user/quiz/", answers)
				.then(res => {
					console.log(res.data);
				})
				.catch(err => console.log(err));
		}
		}
		
		
		navigate("/profile");
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleNext = (id) => {
		if (choiceSelected.length !== 4) return;
		dispatch(addAnswer([1, id, choiceSelected.join(), 1]));
		if (number < 37) {
			setNumber(number + 1);
			console.log("number", number);
		}
		setPercent(number * 2.9);

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
			console.log(res.data);
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
					{number <= 3 ?
						<div>
							<div className="bar">
								<p style={{ margin: "0px", fontSize: "16px" }}>คำถามที่ {number} จาก 35</p>
								<Progress percent={percent} showInfo={false} strokeColor={{
									"0%": "#3A13B8",
									"100%": "#A255FF",
								}} />
							</div>
							<div>
								<h5 className="head-quiz">
									{question && question.map(val =>
										val.id === number && (
											`Question ${val.id} : ${val.question}`
										)
									)}
								</h5>
							</div>
							<div className="choice-list-grid">

								{question && question.map(val =>
									val.id === number && (
										<>
											<div onClick={handleClick1}><Choices order={choice1} title={val.choice_1.split("::")[1]} /></div>
											<div onClick={handleClick2}><Choices order={choice2} title={val.choice_2.split("::")[1]} /></div>
											<div onClick={handleClick3}><Choices order={choice3} title={val.choice_3.split("::")[1]} /></div>
											<div onClick={handleClick4}><Choices order={choice4} title={val.choice_4.split("::")[1]} /></div>

										</>
									)
								)
								}
							</div>

							<div className="btn">
								<button className="list-btn1" onClick={handleReset}>เคลียร์คำตอบ</button>
								<Button
									className="list-btn2"
									onClick={() => handleNext(question[number - 1].id)}
								>
									ต่อไป
								</Button>
							</div>

						</div>
						:
						<div className="finished-ans">
							<p className="thanks">Thank you for your attention!!</p>
							{number === 4 ?
								<div className="sent-ans">
									<Modal
										className="modal-login"
										title="LOGIN" visible={isModalVisible}
										onOk={handleOk} onCancel={handleCancel}
										footer={null}
									>
										{/* <Login /> */}
									</Modal>
									<Button className="list-btn-sent-ans"
										onClick={(onSubmitAnswer)}
									>
										ส่งคำตอบ
									</Button>
								</div>
								: <></>}
						</div>
					}
				</div>
			</div>

		</div>

	);
};

export default QuizItem;
