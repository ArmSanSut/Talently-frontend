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

const UpdateAchievement = ({ setIsModalUpdateAchievement, achievement, setEditAchievement }) => {
	const [dateSelected, setDateSelected] = useState([]);

	const achievement_index = achievement.id;
	console.log(achievement_index);

	const onSelectedDate = (date, dateString) => {
		setDateSelected(dateString);
	};
	const onFinish = async (values) => {
		console.log("successupdate", values);

		await axios.put(`http://localhost:3000/api/user/update_achievement/${achievement.id}`, {
			date_start: dateSelected[0],
			date_end: dateSelected[1],
			title: values.title,
			description: values.description,
			type: values.type

		});
		setEditAchievement(null);
		setIsModalUpdateAchievement(false);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	console.log("test", achievement);
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
				// initialValues={{
				// 	type : data.type,
				// 	title : data.title,
				// 	description : data.description,					
				// }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					name="type"
					label="Type"
					initialValue={achievement.type}
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
					name="title"
					initialValue={achievement.title}
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
					name="description"
					initialValue={achievement.description}
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