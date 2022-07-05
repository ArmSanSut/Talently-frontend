import React from "react";
import "../../App.css";

function Logout() {


	const token = localStorage.getItem("token");
	const ID = localStorage.getItem("ID");
	const image = localStorage.getItem("image");

	if (token || ID || image) {
		localStorage.removeItem("token");
		localStorage.removeItem("ID");
		localStorage.removeItem("image");
	}
	window.location.href = "/";
	return (

		<h1 className="center">we are logging you out...</h1>
	);
}

export default Logout;