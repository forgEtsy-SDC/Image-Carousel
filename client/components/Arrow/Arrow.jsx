import React from 'react';
import Style from './Arrow.css'

const Arrow = ({ char, onclick, direction}) => {
    return (
        <div className={direction ? Style.arrowleft : Style.arrowright}>
            <button className={Style.circle} onClick={onclick}>
                <span>{char}</span>
            </button>
        </div>
    )
}

export default Arrow;