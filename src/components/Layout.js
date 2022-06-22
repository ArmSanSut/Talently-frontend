import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Button } from "antd";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Quiz from "./Quiz";

const LayoutQuiz = () => {
  return (
    <div className="bg">
      {/* <Row className="bg"> */}
      {/* <Col className="column" xs={4} sm={6} md={8} lg={12} xl={24}> */}
      {/* <Col> */}
      <img className="bluebg" src="bluebg.svg" />
      <img className="purplebg" src="purplebg.svg" />
      <img className="yellowbg" src="yellowbg.svg" />
      {/* <input type="checkbox" className="check" />
      <label className="icon" for ="check">
        <i className="fas fa-bars" id="btn"></i>
      </label> */}
      <Quiz />
      <div>
        <nav>
          <img className="logo" src="logo.png" />
          <ul className="container2">
              <input type="checkbox" className="check" />
              <label className="icon" for="check">
                <i className="fas fa-bars" id="btn"></i>
              </label>
              <li className="item">
                <Link to="/about">เกี่ยวกับเรา</Link>
              </li>
              <li className="item">
                <Link to="/test">แบบทดสอบ</Link>
              </li>
              <li className="item">
                <Link to="/login">เข้าสู่ระบบ</Link>
              </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutQuiz;
