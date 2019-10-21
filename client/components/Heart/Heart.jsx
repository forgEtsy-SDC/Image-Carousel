import React from 'react';
import Style from './Heart.css';

const Heart = ({ toggleFavorite, favorited }) => {
    return (
      <div className={Style.favoritebutton}>
      <button className={Style.heart} onClick={toggleFavorite}>
          <span className={favorited ? Style.favorited : Style.unfavorited}>&#9825;</span>
      </button>
    </div>
  )

}

export default Heart;
