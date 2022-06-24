import React, { useState } from "react";
import "./layoutProfile.css";
import { Link, Outlet } from "react-router-dom";

const LayoutProfile = () => {
  const [showSecondNav, setShowSecondNav] = useState(false);

  const handleHamburgerClick = (e) => {
    setShowSecondNav(!showSecondNav);
  };
  return (
    <div className="profile">
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
          <label className="label-profile" for="check">
            {showSecondNav ? (
              <i
                className="fas fa-times"
                id="profile-icon1"
                onClick={handleHamburgerClick}
              ></i>
            ) : (
              <i
                className="fas fa-bars"
                id="profile-icon2"
                onClick={handleHamburgerClick}
              ></i>
            )}
          </label>
          <div className="blur-background">
            <ul className={`nav2 ${showSecondNav ? "" : "hide-navbar"}`}>
              <li className={`item2 ${showSecondNav ? "" : "hide-navbar"}`}>
                <Link to="/about">เกี่ยวกับเรา</Link>
              </li>
              <li className={`item2 ${showSecondNav ? "" : "hide-navbar"}`}>
                <Link to="/test">แบบทดสอบ</Link>
              </li>
              <li className={`item2 ${showSecondNav ? "" : "hide-navbar"}`}>
                <Link to="/contact">ติดต่อเรา</Link>
              </li>
              <li className={`item2 ${showSecondNav ? "" : "hide-navbar"}`}>
                <Link to="/help">ช่วยเหลือ</Link>
              </li>
              <li className={`item2 ${showSecondNav ? "" : "hide-navbar"}`}>
                <Link to="/login">เข้าสู่ระบบ</Link>
              </li>
            </ul>
          </div>

          {/* <input type="checkbox" className="profile-check" /> */}
        </nav>
      </div>
    </div>
  );
};

export default LayoutProfile;
