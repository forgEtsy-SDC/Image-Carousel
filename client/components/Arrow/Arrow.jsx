import React from 'react';
import Style from './Arrow.css'

const Arrow = ({ char, onclick, direction}) => {
    if(direction === 1){
        // Left arrow
        return (
            <div className={Style.arrowleft}>
                <button className={Style.circle} onClick={onclick}>
                    <span>{char}</span>
                </button>
            </div>
        )
    }else{
        // Right arrow
        return (
            <div className={Style.arrowright}>
                <button className={Style.circle} onClick={onclick}>
                    <span>{char}</span>
                </button>
            </div>
        )
    }


}

export default Arrow;