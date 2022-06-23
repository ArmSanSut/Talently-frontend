import React from "react";
import "./quiz.css";
import Choices from "./Choices";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useState } from "react";

const QuizItem = () => {
  const [number, setNumber] = useState(1);
  const [percent, setPercent] = useState(2.86);

  const increase = () => {
    let newNumber = number + 1;
    setPercent(newNumber * 2.86);

    if (newNumber > 35) {
      newNumber = 35;
    }

    setNumber(newNumber);
  };

  return (
    <div className="box">
      <div className="inbox">
        <div className="bar">
          <p>คำถามที่ {number} จาก 35</p>
          <Progress percent={percent} showInfo={false} />
        </div>
        <div>
          <h5 className="head">หากคุณต้องการประสบความสำเร็จ สิ่งสำคัญคือ</h5>
        </div>
        <div className="choice-list-grid">
          <Choices order={'1'} title={'Choice1'}/>
          <Choices order={'2'} title={'Choice2'}/>
          <Choices order={'3'} title={'Choice3'}/>
          <Choices order={'4'} title={'Choice4'}/>
          {/* <div className="list">
            <p className="c1">
              <label for="c1">
                <input type="checkbox" className="checkbox"></input>
                ช่วยเหลือผู้คน
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
          </div> */}
        </div>

        <div className="btn">
          <button className="list-btn1">เคลียร์คำตอบ</button>
          <Button
            className="list-btn2"
            onClick={increase}
            style={{
              background: "linear-gradient(180deg, #EB9714 0%, #FF814B 100%",
              color: "white",
            }}
          >
            ต่อไป
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
