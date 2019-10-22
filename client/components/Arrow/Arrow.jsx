import React from 'react';
import Style from './Arrow.css'

const Arrow = ({ char, onclick, direction, overArrow, exitArrow, hovering}) => {
    return (
        <div className={(direction ? Style.arrowleft : Style.arrowright)}>
            <button className={hovering ? Style.circlehover : Style.circlenohover} onClick={onclick}
                    onMouseLeave={exitArrow} onMouseOver={()=>{overArrow(direction)}}>
                <span>{char}</span>
            </button>
        </div>
    )
}

export default Arrow;