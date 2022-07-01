/* eslint-disable no-empty */
import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import "./register.css";
import axios from "axios";

const RegisterForm = () => {
	const handleSubmitForm = async (values) => {

		console.log("Registration Successfully", values);

		try {
			const url = "http://localhost:3000";
			await axios.post(`${url}/api/user/register/`, {
				name: values.name,
				sirname: values.sirname,
				username: values.username,
				email: values.email,
				password: values.password,
			});
		}
		catch (err) {

		}

	};
	const handleSubmitFormFailed = () => {

	};
	return (
		<div className="register-bg">
			<img className="purple-bg" src="purpleRegister.png" />
			<img className="group-bg" src="groupbgRegister.png" />
			<div className="register-form">
				<Form
					style={{
						marginTop: "2.5rem",
					}}
					name="basic"
					labelCol={{
						span: 6,
					}}
					wrapperCol={{
						span: 13,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={handleSubmitForm}
					onFinishFailed={handleSubmitFormFailed}
				>
					<h1 className="header-text">ลงทะเบียน</h1>
					<p>Firstname :</p>
					<Form.Item
						name="name"
						rules={[
							{
								required: true,
								message: "Please input your name!",
							},
						]}
					>
						<Input className="input" />
					</Form.Item>
					<p>Sirname :</p>
					<Form.Item
						name="sirname"
						rules={[
							{
								required: true,
								message: "Please input your sirname!",
							},
						]}
					>
						<Input className="input" />
					</Form.Item>
					<p>Username :</p>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input className="input" />
					</Form.Item>
					<p>Email :</p>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input className="input" />
					</Form.Item>
					<p>Password :</p>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password className="input" />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							offset: 0,
							span: 16,
						}}
					>
						<Button className="btn-submit" htmlType="submit">
							ลงทะเบียน
						</Button>

					</Form.Item>

				</Form>
			</div>

		</div>
	);

};

export default RegisterForm;