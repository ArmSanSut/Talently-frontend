/* eslint-disable indent */
import React from "react";
import "./layoutLogin.css";
import Login from "./Login";

const LayoutLogin = () => {
    return (
        <div className="layout-login">
            <div className="layout-l">
                <img className="blue-loginbg" src="bluebg.png" />
                <img className="yellow-loginbg" src="yellowbg.png" />
                <div className="word-description">
                    <h1 className="word">TALENTMATCH</h1>
                    <p className="paragraph">อพาร์ตเมนต์เด้อฮิปโปกีวี วอล์กแซว คาร์ซาดิสต์ คาแร็คเตอร์รองรับ บึ้มวานิลลาโอเพ่นปาร์ตี้ นาฏยศาลาด็อกเตอร์โดนัทช็อคคีตราชัน เพนตากอนแคชเชียร์สวีท พาเหรดซูฮกแจ็กเก็ตบลอนด์ แอคทีฟวอล์คแอปเปิ้ลไฟแนนซ์โปรเจกเตอร์ </p>
                </div>
            </div>
            <div className="layout-r">
                <div className="box-login">
                    <h4 className="head-login">Login</h4>
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default LayoutLogin;