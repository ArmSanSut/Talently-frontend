import React from "react";
import "./strength.css";
import "antd/dist/antd.css";
import { AiFillMinusCircle, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

const StrengthSelectedPage = () => {
	const [updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);
	const [strengthSelected, setStrengthSelected] = useState([]);
	const [strengthList, setStrengthList] = useState([]);

	const getData = async () => {
		const url = "http://localhost:3000";
		await axios.get(`${url}/api/user/strength`).then((res) => {
			let strength = res.data;
			strength = strength.map(val => {
				return {
					...val, isSelect: false
				};
			});
			setStrengthList(strength);
		});
	};
	useEffect(() => {
		getData();
	}, []);

	const checkBoxSelected = (e) => {
		console.log(e.target.value);
		let id = parseInt(e.target.value, 10);
		for (let i = 0; i < strengthSelected.length; i++) {
			if (id === strengthSelected[i]) {
				strengthSelected.splice(i, 1);
				let temp = strengthList;
				temp[id - 1].isSelect = false;
				setStrengthList(temp);
				forceUpdate();
				console.log(strengthList);
				console.log("slice");
				return;
			}
		}
		if (strengthSelected.length === 8) return;
		strengthList[id - 1].isSelect = true;
		setStrengthSelected([...strengthSelected, id]);
		console.log(strengthSelected);
	};

	const box = strengthList.map((x) => (
		<div className="item" key= {x.id}>
			<ul className="column-item">
				<li>
					{x.isSelect && strengthSelected.length === 8 ? (
						<input className="box-larger" type="checkbox" name="checked" value={x.id} id={x.title} onClick={checkBoxSelected} />
					) : strengthSelected.length === 8 && x.isSelect === false ? (
						<input className="box-larger" disabled type="checkbox" name="checked" value={x.id} id={x.title} onClick={checkBoxSelected} />
					) : (
						<input className="box-larger" type="checkbox" name="checked" value={x.id} id={x.title} onClick={checkBoxSelected} />
					)}
					<label htmlFor={x.title}></label>
				</li>
				<ul className="column-list">
					<li className="column-item-text-title">{x.title}</li>
					<li className="column-item-text-desc">{x.description}</li>
				</ul>
			</ul>
		</div>
	));

	console.log(strengthSelected);

	return (
		<div>
			<h2 className="head">
				Now, choose your top eight life priorities out of the following list:{" "}
			</h2>
			<form >
				<div className="flex-container">
					<div className="column">{box}</div>
				</div>
				<div className="checked-btn">
					<button className="clear-ans-btn" type="reset">
						<AiFillMinusCircle></AiFillMinusCircle> Clear Answer
					</button>
					<button className="continue-btn" type="submit" value="Submit" >
						Continue <AiOutlineArrowRight></AiOutlineArrowRight>
					</button>
				</div>
			</form>
		</div>
	);
};

export default StrengthSelectedPage;
