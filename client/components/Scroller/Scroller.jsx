import React from 'react'
import Style from './Scroller.css';
import MainImage from '../MainImage/MainImage.jsx';
import Arrow from '../Arrow/Arrow.jsx';

const Scroller = ({ url, scrollLeft, scrollRight, toggleFavorite }) => {
    // TODO: Add class name and css file
    return (
        <div className={Style.scroller}>
            {<MainImage 
            url={url} 
            scrollLeft={scrollLeft} 
            scrollRight={scrollRight} 
            toggleFavorite={toggleFavorite}
            />}
        </div>
    )
}

export default Scroller;