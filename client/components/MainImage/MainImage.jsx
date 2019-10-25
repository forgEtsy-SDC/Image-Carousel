import React from 'react';
import Style from './MainImage.css'

import Arrow from '../Arrow/Arrow.jsx';
import Heart from '../Heart/Heart.jsx';

const MainImage = ({ url, scrollLeft, scrollRight, overHeart,
                    toggleFavorite, favorited, overArrow, 
                    exitHeart, exitArrow}) => {

    return (
        <div className={Style.mainimage}>
            {<Heart 
                toggleFavorite={toggleFavorite} 
                favorited={favorited}
                overHeart={overHeart}
                exitHeart={exitHeart}
                />}
            {<Arrow direction={1} 
                overArrow={overArrow} 
                exitArrow={exitArrow} 
                onclick={scrollLeft}
            />}
            {<Arrow direction={0} 
                overArrow={overArrow} 
                exitArrow={exitArrow} 
                onclick={scrollRight}
            />}
        </div>
    )
}

export default MainImage;