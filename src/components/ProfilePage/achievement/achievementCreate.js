/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./achievement.css";
import { Button, DatePicker, Form, Input, Select } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const AchievementCreate = ({ setIsModalVisible }) => {
	const url = "http://54.179.56.185:3000";
	const [dateSelected, setDateSelected] = useState([]);

	const onSelectedDate = (date, dateString) => {
		console.log(dateString);
		setDateSelected(dateString);
	};
	const onFinish = async (values) => {

		console.log("success", values);
		console.log("date start", dateSelected);

		const id = localStorage.getItem("ID");
		await axios.post(`${url}/api/user/achievement/${id}`, {
			date_start: dateSelected[0],
			date_end: dateSelected[1],
			title: values.title,
			description: values.description,
			type: values.type

		});
		setIsModalVisible(false);
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
export default AchievementCreate;