import React from 'react';
import Style from './Arrow.css'

const Arrow = ({ onclick, direction, overArrow, exitArrow}) => {
    return (
        <div className={(direction ? Style.arrowleft : Style.arrowright)}>
            <button className={Style.circle} onClick={onclick} onMouseLeave={exitArrow} onMouseOver={()=>{overArrow(direction)}}>
                <svg className={Style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    {direction ? 
    /** Left Arrow */   <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path>
                        :
    /** Right Arrow */  <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path>
                    }
                </svg>   
            </button>
        </div>
    )
}

export default Arrow;