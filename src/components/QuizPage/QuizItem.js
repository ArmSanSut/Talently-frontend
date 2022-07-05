/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./quiz.css";
import Choices from "./Choices";
import { Button, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "./storeReducer";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const QuizItem = () => {
	const navigate = useNavigate();
	const answers_selected = useSelector(state => state.answer.answers);
	// console.log("answers", answers_selected);
	const user_id = localStorage.getItem("ID");

	const dispatch = useDispatch();

	const [number, setNumber] = useState(1);
	const [percent, setPercent] = useState(2.86);
	const [question, setQuestion] = useState([]);
	const [order, setOrder] = useState(1);

	const [choice1, setChoice1] = useState("");
	const [choice2, setChoice2] = useState("");
	const [choice3, setChoice3] = useState("");
	const [choice4, setChoice4] = useState("");

	const [choiceSelected, setChoiceSelected] = useState([]);

	const onSubmitAnswer = () => {
		if (number === 36) {
			// console.log("answers bug", answers_selected);
			const answerStr = JSON.stringify(answers_selected);
			// console.log("3",answerStr);
			let answers = JSON.parse(answerStr);
		const id = parseInt(localStorage.getItem("ID"), 10);
		if (answers) {
			const score = {
				scoreM : {
					M1 : 0,
					M2 : 0,
					M3 : 0,
					M4 : 0,
					M5 : 0,
					M6 : 0,
					M7 : 0,
					M8 : 0,
					M9 : 0,
					M10 : 0,
					M11 : 0,
					M12 : 0
				},
				scoreB : {
					B1 : 0,
					B2 : 0,
					B3 : 0,
					B4 : 0,
					B5 : 0,
					B6 : 0,
					B7 : 0,
					B8 : 0
				},
				scoreW : {
					W1 : 0,
					W2 : 0,
					W3 : 0,
					W4 : 0,
					W5 : 0,
					W6 : 0,
					W7 : 0,
					W8 : 0
				}
			};

			for (let i = 0; i < 35; i++){
				let answerSplit = answers_selected[i].answer.split(",");
				// console.log(answerSplit);
				if (i < 15){
					for (let index = 0; index < 4; index++) {
						score["scoreM"][answerSplit[index]] += 4 - index;
					}
				}else if ( i >= 15 && i < 25){
					for (let index = 0; index < 4; index++) {
						score["scoreB"][answerSplit[index]] += 4 - index;
					}
				}else {
					for (let index = 0; index < 4; index++) {
						score["scoreW"][answerSplit[index]] += 4 - index;
					}
				}
			}
			console.log({id,score});
			// console.log("test answers",answers);
			for (let index = 0; index < answers.length; index++) {
				answers[index][0] = id;
			}
			// console.log("test2",{answers,score});
			axios.post("http://localhost:3000/api/user/quiz/", {	
				user_id,
				answers,
				score
			})
				.then(res => {
					console.log(res.data);
				})
				.catch(err => console.log(err));
		}
		}
		
		navigate("/profile");
	};

	const handleNext = (id) => {
		if (choiceSelected.length !== 4) return;
		dispatch(addAnswer({
			no : id ,
			answer : choiceSelected.join()
		}));
		if (number < 37) {
			setNumber(number + 1);
			console.log("number", number);
		}
		setPercent(number * 2.9);

		setChoice1("");
		setChoice2("");
		setChoice3("");
		setChoice4("");
		setChoiceSelected([]);
		setOrder(1);
	};

	const handleClick = (key,choice) => {
		if (!choice1 && choice == 1) {
			setChoiceSelected(choiceSelected ? [...choiceSelected, key] : key);
			setChoice1(order);
			setOrder(order + 1);
		}
		if (!choice2 && choice == 2) {
			setChoiceSelected(choiceSelected ? [...choiceSelected, key] : key);
			setChoice2(order);
			setOrder(order + 1);
		}
		if (!choice3 && choice == 3) {
			setChoiceSelected(choiceSelected ? [...choiceSelected, key] : key);
			setChoice3(order);
			setOrder(order + 1);
		}
		if (!choice4 && choice == 4) {
			setChoiceSelected(choiceSelected ? [...choiceSelected, key] : key);
			setChoice4(order);
			setOrder(order + 1);
		}
	};

	const handleReset = e => {
		e.preventDefault();
		setChoice1("");
		setChoice2("");
		setChoice3("");
		setChoice4("");
		setChoiceSelected([]);
		setOrder(1);
		

	};
	const getData = () => {
		const url = "http://localhost:3000";
		axios.get(`${url}/api/user/`).then((res) => {
			// console.log(res.data);
			setQuestion(res.data);
		});
	};
	useEffect(() => {
		getData();
	}, []);
	// console.log(choiceSelected);

	return (
		<div>
			<div className="box">
				<div className="inbox">
					{number <= 35 ?
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
											`${val.question} :`
										)
									)}
								</h5>
							</div>
							<div className="choice-list-grid">

								{question && question.map(val =>
									val.id === number && (
										<>
											<div onClick={() => handleClick(val.choice_1.split("::")[0],1)}><Choices order={choice1} title={val.choice_1.split("::")[1]} /></div>
											<div onClick={() => handleClick(val.choice_2.split("::")[0],2)}><Choices order={choice2} title={val.choice_2.split("::")[1]} /></div>
											<div onClick={() => handleClick(val.choice_3.split("::")[0],3)}><Choices order={choice3} title={val.choice_3.split("::")[1]} /></div>
											<div onClick={() => handleClick(val.choice_4.split("::")[0],4)}><Choices order={choice4} title={val.choice_4.split("::")[1]} /></div>

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
							{number === 36 ?
								<div className="sent-ans">
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
