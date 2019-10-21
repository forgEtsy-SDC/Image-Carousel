import React from 'react'
import Style from './Scroller.css';
import MainImage from '../MainImage/MainImage.jsx';

const Scroller = ({ url, scrollLeft, scrollRight, toggleFavorite, favorited }) => {
    return (
        <div className={Style.scroller}>
            {<MainImage 
                url={url} 
                scrollLeft={scrollLeft} 
                scrollRight={scrollRight} 
                toggleFavorite={toggleFavorite}
                favorited={favorited}
            />}
        </div>
    )
}

export default Scroller;