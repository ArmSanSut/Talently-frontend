import React, { useState } from 'react'
import axios from "axios";


const url = "http://localhost:3000"


function Question() {
    const [display, setDisplay] = useState(null);
    let data; 
    const getData = () => {
        axios.get(`${url}/api/user/`).then((res) => {
            data = res.data;
            console.log(data);
            setDisplay(data);
          });
      };
      if (display === null) {
        getData();
      }
    
    return (
        <div style={{ width: "80%", margin: "20px 10px" }}>
          <div >
            {display
              ? display.map((x) => (
                  <div key={x}>
                    
                    <h4 key={x.question}>
                      question : {x.question}
                    </h4>
                    
                  </div>
                ))
              : ""}
          
          </div>
        </div>
      );
}

export default Question;

