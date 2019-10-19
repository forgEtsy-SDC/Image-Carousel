import React from 'react';
import Style from './MainImage.css';
import Arrow from '../Arrow/Arrow.jsx';

const MainImage = ({ url, scrollLeft, scrollRight }) => {
    const style = {
        display: 'grid',
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
            {<Arrow direction={1} onclick={scrollLeft} char="&#8592;"/>}
            {<Arrow direction={0} onclick={scrollRight} char="&#8594;"/>}
        </div>
    )
}

export default MainImage;