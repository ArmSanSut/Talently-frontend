import React from "react";
import "./choices.css";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";


// eslint-disable-next-line react/prop-types
const Choices = ({order, title}) => {
	return (
		<div className="choice-list-div">
			<ul className= {order ? "choiceList-selected" : "choiceList"}  >
				<li className=  "selected">
					{order === 1 && (<><li className="selected-list" ><RiNumber1 className="choiceBox"></RiNumber1></li><li className="seleect-title">{title}</li> </>)}
					{order === 2 && (<><li className="selected-list" ><RiNumber2 className="choiceBox"></RiNumber2></li><li className="seleect-title">{title}</li></>)}
					{order === 3 && (<><li className="selected-list" ><RiNumber3 className="choiceBox"></RiNumber3></li><li className="seleect-title">{title}</li></>)}
					{order === 4 && (<><li className="selected-list" ><RiNumber4 className="choiceBox"></RiNumber4></li><li className="seleect-title">{title}</li></>)}
					{order == "" && (<><span className="choiceBox"></span><li className="choiceBox-seleect-title">{title}</li></>)}
				</li>
			</ul>

		</div>
	);
};

export default Choices;