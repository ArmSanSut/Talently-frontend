import React from "react";
import axios from "axios";
import "./quiz.css";
import Choices from "./Choices";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useState, useEffect } from "react";

const QuizItem = () => {
  const [number, setNumber] = useState(1);
  const [percent, setPercent] = useState(2.86);
  const [question, setQuestion] = useState([]);

  const increase = () => {
    let newNumber = number + 1;
    setPercent(newNumber * 2.86);

    if (newNumber > 35) {
      newNumber = 35;
    }

    setNumber(newNumber);

  };

  const getData = () => {
    const url = "http://localhost:3000"
    axios.get(`${url}/api/user/`).then((res) => {
      // data = res.data;
      console.log(res.data);
      setQuestion(res.data);
    });
  };
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="box">
      <div className="inbox">
        <div className="bar">
          <p>คำถามที่ {number} จาก 35</p>
          <Progress percent={percent} showInfo={false} />
        </div>
        <div>
          <h5 className="head">
            {question.map(val =>
              val.id == number && (
                `Question ${val.id} : ${val.question}` 
                
              )
            )}
          </h5>
        </div>
        <div className="choice-list-grid">
          {question.map(val =>
            val.id == number && (
              <>
                <Choices order={'1'} title={val.choice_1} />
                <Choices order={'2'} title={val.choice_2} />
                <Choices order={'3'} title={val.choice_3} />
                <Choices order={'4'} title={val.choice_4} />
              </>

            )
          )}
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
