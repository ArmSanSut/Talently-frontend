/* eslint-disable linebreak-style */
import React from "react";
import "./strenght.css";
import "antd/dist/antd.css";
import { AiFillMinusCircle, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

const StrengtSelectedPage = () => {
	const [, updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);
	const [strenghtSelected, setStrenghtSelected] = useState([]);
	const [strenghtList, setStrenghtList] = useState([]);

	const getData = async () => {
		const url = "http://localhost:3000";
		await axios.get(`${url}/api/user/strength`).then((res) => {
			let strength = res.data;
			strength = strength.map(val => {
				return {
					...val, isSelect: false
				};
			});
			setStrenghtList(strength);
		});
	};
	useEffect(() => {
		getData();
	}, []);

	const checkBoxSelected = (e) => {
		console.log(e.target.value);
		let id = parseInt(e.target.value, 10);
		for (let i = 0; i < strenghtSelected.length; i++) {
			if (id === strenghtSelected[i]) {
				strenghtSelected.splice(i, 1);
				let temp = strenghtList;
				temp[id - 1].isSelect = false;
				setStrenghtList(temp);
				forceUpdate();
				console.log(strenghtList);
				console.log("slice");
				return;
			}
		}
		if (strenghtSelected.length === 8) return;
		strenghtList[id - 1].isSelect = true;
		setStrenghtSelected([...strenghtSelected, id]);
		console.log(strenghtSelected);
	};

	const box = strenghtList.map((x) => (
		<div className="item" key={x.id}>
			<ul className="column-item">
				<li>
					{x.isSelect && strenghtSelected.length === 8 ? (
						<input className="box-larger" type="checkbox" name="checked" value={x.id} id={x.title} onClick={checkBoxSelected} />
					) : strenghtSelected.length === 8 && x.isSelect === false ? (
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

	console.log(strenghtSelected);

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

export default StrengtSelectedPage;
