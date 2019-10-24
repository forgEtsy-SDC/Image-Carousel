import React from 'react';
import Style from './MainImage.css'

import Arrow from '../Arrow/Arrow.jsx';
import Heart from '../Heart/Heart.jsx';

const MainImage = ({ url, scrollLeft, scrollRight, overHeart,
                    toggleFavorite, favorited, overArrow, exitHeart,
                    exitArrow, lefthovering, righthovering }) => {

    return (
        <div className={Style.mainimage} style={{ backgroundImage: `url(${url})`}}>
            {<Heart 
                toggleFavorite={toggleFavorite} 
                favorited={favorited}
                overHeart={overHeart}
                exitHeart={exitHeart}
                />}
            {<Arrow direction={1} 
                hovering={lefthovering} 
                overArrow={overArrow} 
                exitArrow={exitArrow} 
                onclick={scrollLeft} char="<"
            />}
            {<Arrow direction={0} 
                hovering={righthovering} 
                overArrow={overArrow} 
                exitArrow={exitArrow} 
                onclick={scrollRight} char=">"
            />}
        </div>
    )
}

export default MainImage;