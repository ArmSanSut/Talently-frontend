/* eslint-disable indent */
import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./homeLayout.css";

const HomeLayout = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

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
            <img className="yellow-homebg" src="/yellowbg.png" />
            <img className="purple-homebg" src="/purplebg.png" />
            <img className="combine-homebg" src="/groupcombine.png" />
            <img className="people-homebg" src="/grouppeople.png" />
            <div className="head-home">
                <ul className="head-home-nav">
                    <li className="head-home-nav-item"><Link to="/">เกี่ยวกับเรา</Link></li>
                    <li className="head-home-nav-item">
                        <Link to={token ? "/quiz" : "/login"}>แบบทดสอบ</Link>
                    </li>
                    <li className="head-home-nav-item">
                    {token ? 
                        <Link to="/logout">ออกจากระบบ</Link> :
                        <Link to="/login">เข้าสู่ระบบ</Link>
                    }
                    </li>
                    <li className="head-home-nav-btn"><Button className="btn-to-quiz" onClick={linkToQuiz}>ทำแบบทดสอบ</Button></li>
                </ul>
            </div>
            <div className="content-home">
                <p className="about-home">เกี่ยวกับเรา</p>
                <h1 className="talent-home">TALENTMATCH</h1>
                <p className="home-paragraph">อพาร์ตเมนต์เด้อฮิปโปกีวี วอล์กแซว คาร์ซาดิสต์ คาแร็คเตอร์รองรับ บึ้มวานิลลาโอเพ่นปาร์ตี้ นาฏยศาลาด็อกเตอร์โดนัทช็อคคีตราชัน เพนตากอนแคชเชียร์สวีท พาเหรดซูฮกแจ็กเก็ตบลอนด์ แอคทีฟวอล์คแอปเปิ้ลไฟแนนซ์โปรเจกเตอร์ </p>
                <Button className="btn-to-quiz-content" onClick={linkToQuiz}>ทำแบบทดสอบ</Button>
            </div>
            <div className="footer-home"></div>
        </div>
    );
};

export default HomeLayout;