import React from 'react'
import './choices.css';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';


const Choices = ({order, title, select}) => {
  return (
    <div className='choice-list-div'>
        <ul className='choiceList'  >
            <li className= {select ? 'selected': 'not-selected'}>
                {order === '1' && (<><RiNumber1 className='choiceBox'></RiNumber1> {title}</>)}
                {order === '2' && (<><RiNumber2 className='choiceBox'></RiNumber2> {title}</>)}
                {order === '3' && (<><RiNumber3 className='choiceBox'></RiNumber3> {title}</>)}
                {order === '4' && (<><RiNumber4 className='choiceBox'></RiNumber4> {title}</>)}
                {order === '' && (<><span className='choiceBox'></span>{title}</>)}
            </li>
        </ul>

    </div>
  )
}

export default Choices