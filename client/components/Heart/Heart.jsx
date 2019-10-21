import React from 'react';
import Style from './Heart.css';

const Heart = ({char}) => {
  return (
    <div className={Style.favoritebutton}>
      <button className={Style.heart} >
          <span>{char}</span>
      </button>
    </div>
  )
}

export default Heart;