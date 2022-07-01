import React from "react";
import "./achievement.css";
import { Button, DatePicker, Form, Input } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const AchievementCreate = () => {
	const onFinish = () => {
		
		const id = localStorage.getItem("ID"); 
		const achievement_result = axios.post(`http://lcoalhost:3000/api/user/achievement/:${id}`);
		console.log("Success:", achievement_result);
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
					label = "Time Selected"
					name="date"
					
					wrapperCol={{
						offset: 0,
						span: 18,
					}}
				>
					<RangePicker
						showTime={{
							format: "HH:mm",
						}}
						format="YYYY-MM-DD HH:mm"
						// onChange={onChange}
						// onOk={onOk}
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