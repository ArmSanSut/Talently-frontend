/* eslint-disable no-empty */
import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import "./register.css";
import axios from "axios";

const RegisterForm = () => {
	const handleSubmitForm = async (values)=> {

		console.log("Registration Successfully", values);

		try{
			const url = "http://localhost:3000";
			await axios.post(`${url}/api/user/register/`, {
				name : values.name,
				sirname : values.sirname,
				username : values.username,
				email : values.email,
				password : values.password,
			});     
		}
		catch (err){

		}
	};
	const handleSubmitFormFailed = ()=> {
        
	};
	return (
		<div className="register-form">
			<Form
				style={{
					marginTop: "4rem",
				}}
				name="basic"
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 12,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish = {handleSubmitForm}
				onFinishFailed = {handleSubmitFormFailed}
			>
				<h1 className="header-text">Registration Form</h1>
				<Form.Item
					label="Name"
					name="name"
					rules={[
						{
							required: true,
							message: "Please input your name!",
						},
					]}
				>
					<Input className="input"/>
				</Form.Item>
				<Form.Item
					label="Sirname"
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
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<Input className="input"/>
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your email!",
						},
					]}
				>
					<Input className="input"/>
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password className="input"/>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button className="btn-submit" htmlType="submit">
                        SUBMIT
					</Button>

				</Form.Item>

			</Form>
		</div>
	);

};

export default RegisterForm;