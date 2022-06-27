import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Button } from "antd";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import QuizItem from "./QuizItem";

const LayoutQuiz = () => {
  return (
    <div className="quiz-bg">
      <img className="bluebg" src="bluebg.png" />
      <img className="purplebg" src="purplebg.png" />
      <img className="yellowbg" src="yellowbg.png" />
      <nav className="nav-quiz1">
        <img className="quiz-logo" src="logo.png" />
        {/* <input type="checkbox" className="check" />
        <label for="check">
          <i className="fas fa-bars" id="btn-icon"></i>
        </label> */}
        <ul className="quiz-center">
          <li className="item-quiz-center">
            <Link to="/about">เกี่ยวกับเรา</Link>
          </li>
          <li className="item-quiz-center">
            <Link to="/test">แบบทดสอบ</Link>
          </li>
        </ul>
        <ul className="quiz-login">
          <li className="item-quiz-login">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </li>
          <li className="item"></li>
        </ul>
      </nav>
    
      <QuizItem />
   
     
      <Outlet />
    </div>
  );
};

export default LayoutQuiz;
