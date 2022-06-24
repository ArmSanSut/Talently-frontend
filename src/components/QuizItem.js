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

  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [choice3, setChoice3] = useState('');
  const [choice4, setChoice4] = useState('');

  const [choiceSelected, setChoiceSelected] = useState([]);

  const [order, setOrder] = useState(["4", "3", "2", "1"]);

  const handleNext = () => {
    let newNumber = number + 1;
    setPercent(newNumber * 2.86);

    if (newNumber > 35) {
      newNumber = 35;
    }

    setNumber(newNumber);
    setOrder(["4", "3", "2", "1"]);
    setChoice1('');
    setChoice2('');
    setChoice3('');
    setChoice4('');

  };

  const handleClick1 = e => {
    if (!choice1) {
      setChoice1(order.pop());
      setChoiceSelected(choiceSelected ? [...choiceSelected, "1"] : "1");
    }
  }
  const handleClick2 = e => {
    if (!choice2) {
      setChoice2(order.pop())
      setChoiceSelected(choiceSelected ? [...choiceSelected, "2"] : "2");
    }
  }
  const handleClick3 = e => {
    if (!choice3) {
      setChoice3(order.pop())
      setChoiceSelected(choiceSelected ? [...choiceSelected, "3"] : "3");
    }
  }
  const handleClick4 = e => {
    if (!choice4) {
      setChoice4(order.pop())
      setChoiceSelected(choiceSelected ? [...choiceSelected, "4"] : "4");
    }
  }

  const handleReset = e => {
    setOrder(["4", "3", "2", "1"]);
    setChoice1('');
    setChoice2('');
    setChoice3('');
    setChoice4('');
    setChoiceSelected([]);

  }
  const getData = () => {
    const url = "http://localhost:3000"
    axios.get(`${url}/api/user/`).then((res) => {
      // data = res.data;
      // console.log(res.data);
      setQuestion(res.data);
    });
  };
  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {
    console.log(choiceSelected);
  // }, choiceSelected)


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
                <div onClick={handleClick1}><Choices order={choice1} title={val.choice_1} /></div>
                <div onClick={handleClick2}><Choices order={choice2} title={val.choice_2} /></div>
                <div onClick={handleClick3}><Choices order={choice3} title={val.choice_3} /></div>
                <div onClick={handleClick4}><Choices order={choice4} title={val.choice_4} /></div>
              </>

            )
          )}
        </div>

        <div className="btn">
          <button className="list-btn1" onClick={handleReset}>เคลียร์คำตอบ</button>
          <Button
            className="list-btn2"
            onClick={handleNext}
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
