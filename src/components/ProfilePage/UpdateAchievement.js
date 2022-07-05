/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./achievement/achievement.css";
import { Button, DatePicker, Form, Input, Select } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const UpdateAchievement = ({ setIsModalUpdateAchievement, achievement }) => {
	console.log("id", achievement);
	// const navigate = useNavigate();
	const [dateSelected, setDateSelected] = useState([]);
	// const [typeSelected, setTypeSelected] = useState([]);

	// useEffect(() => {
	// 	setTypeSelected(achievement.type);
	// }, []);
	// console.log(typeSelected);


	// const achievement_list = achievement[parseInt(achievement.id)];
	// console.log("11", achievement_list);
	// const type_achievement = achievement_list.type;

	const onSelectedDate = (date, dateString) => {
		console.log(dateString);
		setDateSelected(dateString);
	};
	const onFinish = async (values) => {

		console.log("successupdate", values);
		console.log("date start", dateSelected);

		await axios.put(`http://localhost:3000/api/user/update_achievement/${achievement.id}`, {
			date_start: dateSelected[0],
			date_end: dateSelected[1],
			title: values.title,
			description: values.description,
			type: values.type

		});
		setIsModalUpdateAchievement(false);
		// navigate("/profile");
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<div className="achievement-box">
			<Form
				className="achievement-form"
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					name="type"
					label="Type"
					// initialValue={type_achievement}
					rules={[
						{
							required: true,
							message: "Please select type!",
						},
					]}
				>
					<Select placeholder="select your type achievements">
						<Option value="Personal">Personal</Option>
						<Option value="Career">Career</Option>
						<Option value="other">Other</Option>
					</Select>
				</Form.Item>
				<Form.Item
					label="Title"
					// initialValue="hello-t"
					name="title"
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Description"
					// initialValue={achievement.description}
					name="description"
					rules={[
						{
							required: true,
						},
					]}
				>
					<TextArea row={10} />
				</Form.Item>

				<Form.Item
					label="Time Selected"
					// initialValue={achievement.date}
					name="date"

					wrapperCol={{
						offset: 0,
						span: 18,
					}}
				>
					<RangePicker
						format="YYYY-MM-DD"
						onChange={onSelectedDate}
					/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 10,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit" >
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default UpdateAchievement;