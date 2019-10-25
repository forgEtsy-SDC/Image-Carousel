import React from 'react'
import Style from './Scroller.css';
import MainImage from '../MainImage/MainImage.jsx';

const Scroller = ({ url, scrollLeft, scrollRight, exitHeart,
                    toggleFavorite, favorited, overArrow, overHeart,
                    exitArrow, lefthovering, righthovering, toggleImageZoom }) => {
    return (
        <div className={Style.scroller} onClick={toggleImageZoom} style={{ backgroundImage: `url(${url})`}}>
            {<MainImage 
                // url = {url}
                scrollLeft={scrollLeft} 
                scrollRight={scrollRight} 
                toggleFavorite={toggleFavorite}
                favorited={favorited}
                overHeart={overHeart}
                exitHeart={exitHeart}
                overArrow={overArrow}
                exitArrow={exitArrow}
                lefthovering={lefthovering}
                righthovering={righthovering}
            />}
        </div>
    )
}

export default Scroller;