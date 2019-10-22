import React from 'react'
import Style from './Scroller.css';
import MainImage from '../MainImage/MainImage.jsx';

const Scroller = ({ url, scrollLeft, scrollRight, toggleFavorite, favorited, overArrow, exitArrow, lefthovering, righthovering }) => {
    return (
        <div className={Style.scroller}>
            {<MainImage 
                url={url} 
                scrollLeft={scrollLeft} 
                scrollRight={scrollRight} 
                toggleFavorite={toggleFavorite}
                favorited={favorited}
                overArrow={overArrow}
                exitArrow={exitArrow}
                lefthovering={lefthovering}
                righthovering={righthovering}
            />}
        </div>
    )
}

export default Scroller;