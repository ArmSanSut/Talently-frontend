import React from 'react'
import axios from "axios";

const url = "http://localhost:3000"

function Question() {
    axios.get(`${url}/api/user/`).then((response) => {
        const allQuiz = response.data[4].question;
        console.log(allQuiz);
      }).catch(error => console.error('Error'));
    
  return (
    <>
    <allQuiz/>
    </>
  )
}

export default Question;

