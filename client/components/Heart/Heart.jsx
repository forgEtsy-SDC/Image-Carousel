import React from 'react';
import Style from './Heart.css';

const Heart = ({char, toggleFavorite}) => {
  return (
    <div className={Style.favoritebutton}>
      <button className={Style.heart} onClick={toggleFavorite}>
          <span>{char}</span>
      </button>
    </div>
  )
}

export default Heart;