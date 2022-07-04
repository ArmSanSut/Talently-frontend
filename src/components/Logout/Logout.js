import React from "react";
import "../../App.css";

function Logout() {


	const token = localStorage.getItem("token");

	if (token) {
		localStorage.removeItem("token");
	}
	window.location.href = "/";
	return (

		<h1 className="center">we are logging you out...</h1>
	);
}

export default Logout;