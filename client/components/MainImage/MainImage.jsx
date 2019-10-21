import React from 'react';

import Arrow from '../Arrow/Arrow.jsx';
import Heart from '../Heart/Heart.jsx';

const MainImage = ({ url, scrollLeft, scrollRight, toggleFavorite }) => {
    const style = {
        display: 'grid',
        gridTemplateRows: '50px 1fr 50px',
        gridTemplateColumns: '1fr 1fr',
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '100%',
        maxHeight: '100%',
    }
    return (
        <div style={style}>
            {<Heart toggleFavorite={toggleFavorite} char="&#9825;"/>}
            {<Arrow direction={1} onclick={scrollLeft} char="<"/>}
            {<Arrow direction={0} onclick={scrollRight} char=">"/>}
        </div>
    )
}

export default MainImage;