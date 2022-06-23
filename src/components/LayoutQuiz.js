import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Button } from "antd";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Quiz from "./QuizItem";

const LayoutQuiz = () => {
  return (
    <div className="bg">
      <img className="bluebg" src="bluebg.png" />
      <img className="purplebg" src="purplebg.png" />
      <img className="yellowbg" src="yellowbg.png" />

      <div className="top">
        <nav>
          <img className="logo" src="logo.png" />
          <ul >
            <li >
            <Link to="/about">เกี่ยวกับเรา</Link>
              
            </li>
            <li >
              <Link to="/test">แบบทดสอบ</Link>
            </li>
            <li >
            <Link to="/login">เข้าสู่ระบบ</Link>
            </li>
            <li className="item">
              <input type="checkbox" className="check" />
              <label for="check">
                <i className="fas fa-bars" id="btn-icon"></i>
              </label>
            </li>
          </ul>
        </nav>
      </div>
      <Quiz />
      <Outlet />
    </div>
  );
};

export default LayoutQuiz;
