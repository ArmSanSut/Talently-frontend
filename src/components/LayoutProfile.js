import React from "react";
import "./layoutProfile.css";
import { Link, Outlet } from "react-router-dom";

const LayoutProfile = () => {
  return (
    <div className="profile-bg">
      <img className="profile-bluebg" src="bluebg.png" />
      <img className="profile-purplebg" src="profile-purplebg.png" />
      <nav className="head-profile1">
        <img className="profile-logo" src="logo.png" />
        <ul className="center">
          <li className="item-center">
            <Link to="/about">เกี่ยวกับเรา</Link>
          </li>
          <li className="item-center">
            <Link to="/test">แบบทดสอบ</Link>
          </li>
          <li className="item-center">
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
          <li className="item-center">
            <Link to="/help">ช่วยเหลือ</Link>
          </li>
        </ul>
        <ul className="right">
          <li className="item-right">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </li>
        </ul>
      </nav>
      <nav className="head-profile2">
        <img className="profile-logo" src="logo.png" />
        <ul className="nav2">
          <li className="item2">
            <Link to="/about">เกี่ยวกับเรา</Link>
          </li>
          <li className="item2">
            <Link to="/test">แบบทดสอบ</Link>
          </li>
          <li className="item2">
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
          <li className="item2">
            <Link to="/help">ช่วยเหลือ</Link>
          </li>
          <li className="item2">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </li>
        </ul>
        <input type="checkbox" className="profile-check" />
        <label className="label-profile" for="check">
          <i className="fas fa-bars" id="profile-icon"></i>
        </label>
      </nav>
    </div>
  );
};

export default LayoutProfile;
