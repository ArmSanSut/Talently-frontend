import React from 'react'
import './choices.css';

const Choices = ({order, title}) => {
  return (
    <div className='choice-list-div'>
        <ul className='choiceList' >
            <li>
                {order === '1' && (<><span className='choiceBox'></span>{title}</>)}
                {order === '2' && (<><span className='choiceBox'></span>{title}</>)}
                {order === '3' && (<><span className='choiceBox'></span>{title}</>)}
                {order === '4' && (<><span className='choiceBox'></span>{title}</>)}
                {order === '' && (<><span className='choiceBox'></span>{title}</>)}
            </li>
        </ul>

    </div>
  )
}

export default Choices