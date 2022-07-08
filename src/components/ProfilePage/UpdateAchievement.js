/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./achievement/achievement.css";
import { Button, DatePicker, Form, Input, Select } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import moment from "moment";

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const UpdateAchievement = ({ setIsModalUpdateAchievement, achievement }) => {
	const url = "http://54.179.56.185:3000"; 
	const [dateSelected, setDateSelected] = useState([]);

	const [form] = Form.useForm();

	const onSelectedDate = (date, dateString) => {
		setDateSelected(dateString);
	};
	const onFinish = async (values) => {
		console.log("success update", values);

		await axios.put(`${url}/api/user/update_achievement/${achievement.id}`, {
			date_start: dateSelected[0],
			date_end: dateSelected[1],
			title: values.title,
			description: values.description,
			type: values.type

		});
		setIsModalUpdateAchievement(false);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	useEffect(() => {
		form.setFieldsValue({
			type: achievement.type,
			title: achievement.title,
			description: achievement.description,
			date : [moment(achievement.date_start),moment(achievement.date_end)]
		});
	}, [achievement]);

	return achievement.id ? (
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
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				form={form}
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
					rules={[
						{
							required: true,
						},
					]}
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
	) : null;
};
export default UpdateAchievement;