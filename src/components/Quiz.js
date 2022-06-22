import React from "react";
import "./quiz.css";

const Quiz = () => {
  return (
    <div className="box">
      <div className="inbox">
        <div>
          <h2 className="head">หากคุณต้องการประสบความสำเร็จ สิ่งสำคัญคือ</h2>
        </div>
        <div className="list">
          <p className="c1">
            <label for="c1">
              <input type="checkbox" className="checkbox"></input>ช่วยเหลือผู้คน
            </label>
          </p>
        </div>
        <div className="list">
          <p className="c2">
            <label for="c2">
              <input type="checkbox" className="checkbox"></input>
              ทำตามสิ่งที่คาดหวัง
            </label>
          </p>
        </div>
        <div className="list">
          <p className="c3">
            <label for="c3">
              <input type="checkbox" className="checkbox"></input>
              เรียนรู้ให้ได้มากที่สุด
            </label>
          </p>
        </div>
        <div className="list">
          <p className="c4">
            <label for="c4">
              <input type="checkbox" className="checkbox"></input>
              แข่งขันและเอาชนะ
            </label>
          </p>
        </div>
        <div className="btn">
            <button className="list-btn1">เคลียร์คำตอบ</button>
            <button className="list-btn2">ต่อไป</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
