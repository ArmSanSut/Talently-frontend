/* eslint-disable indent */
import { Button } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./homeLayout.css";

const HomeLayout = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [showSecondNav, setShowSecondNav] = useState(false);

    const handleHamburgerClick = (e) => {
        e.preventDefault();
        setShowSecondNav(!showSecondNav);
    };

    const linkToQuiz = () => {
        if (token) {
            navigate("/quiz");
        } else {
            alert("Please Login!!");
            navigate("/login");
        }

    };

    return (
        <div className="layout-home">
            <img className="blue-homebg" src="/bluebg.png" />
            <img className="logo-homebg" src="/logo.png" />
            <img className={`yellow-homebg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="/yellowbg.png" />
            <img className={`purple-homebg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="/purplebg.png" />
            <img className={`combine-homebg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="/groupcombine.png" />
            <img className={`people-homebg ${showSecondNav ? "show-navbar-quiz" : ""}`} src="/grouppeople.png" />
            <div className="head-home">
                <ul className="head-home-nav">
                    <li className="head-home-nav-item">
                        <Link to="/">เกี่ยวกับเรา</Link>
                    </li>
                    <li className="head-home-nav-item">
                        <Link to={token ? "/quiz" : "/login"}>แบบทดสอบ</Link>
                    </li>
                    <li className="head-home-nav-item">
                        {token ?
                            <Link to="/logout">ออกจากระบบ</Link> :
                            <Link to="/login">เข้าสู่ระบบ</Link>
                        }
                    </li>
                    <li className="head-home-nav-btn">
                        <Button className="btn-to-quiz" onClick={linkToQuiz}>ทำแบบทดสอบ</Button>
                    </li>
                </ul>
                <img className="quiz-logo" src="logo.png" />

                {showSecondNav ? (
                    <label className="label-home1" htmlFor="check" onClick={handleHamburgerClick}>
                        <i
                            className="fas fa-times"
                            id="home-icon1"
                        >
                        </i>
                    </label>
                ) : (
                    <label className="label-home2" htmlFor="check" onClick={handleHamburgerClick}>
                        <i
                            className="fas fa-bars"
                            id="home-icon2"
                        ></i>
                    </label>
                )}

                <ul className={`head-home-nav2 ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
                    <li className={`head-home-nav-item2 ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
                        <Link to="/">เกี่ยวกับเรา</Link>
                    </li>
                    <li className={`head-home-nav-item2 ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
                        <Link to={token ? "/quiz" : "/login"}>แบบทดสอบ</Link>
                    </li>
                    <li className={`head-home-nav-item2 ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
                        {token ?
                            <Link to="/logout">ออกจากระบบ</Link> :
                            <Link to="/login">เข้าสู่ระบบ</Link>
                        }
                    </li>
                    <li className={`head-home-nav-btn2 ${showSecondNav ? "" : "hide-navbar-quiz"}`}>
                        <Button className="btn-to-quiz" onClick={linkToQuiz}>ทำแบบทดสอบ</Button>
                    </li>
                </ul>
            </div>
            <div className={`content-home ${showSecondNav ? "show-navbar-quiz" : ""}`}>
                <p className={`about-home ${showSecondNav ? "show-navbar-quiz" : ""}`}>เกี่ยวกับเรา</p>
                <h1 className={`talent-home${showSecondNav ? "show-navbar-quiz" : ""}`}>TALENTMATCH</h1>
                <p className={`home-paragraph ${showSecondNav ? "show-navbar-quiz" : ""}`}>อพาร์ตเมนต์เด้อฮิปโปกีวี วอล์กแซว คาร์ซาดิสต์ คาแร็คเตอร์รองรับ บึ้มวานิลลาโอเพ่นปาร์ตี้ นาฏยศาลาด็อกเตอร์โดนัทช็อคคีตราชัน เพนตากอนแคชเชียร์สวีท พาเหรดซูฮกแจ็กเก็ตบลอนด์ แอคทีฟวอล์คแอปเปิ้ลไฟแนนซ์โปรเจกเตอร์ </p>
                <Button className={`btn-to-quiz-content ${showSecondNav ? "show-navbar-quiz" : ""}`} onClick={linkToQuiz}>ทำแบบทดสอบ</Button>
            </div>
            <div className="footer-home"></div>
        </div>
    );
};

export default HomeLayout;