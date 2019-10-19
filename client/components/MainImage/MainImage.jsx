import React from 'react';
import Style from './MainImage.css';
import Arrow from '../Arrow/Arrow.jsx';

const MainImage = ({ url, scrollLeft, scrollRight }) => {
    const style = {
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        maxHeight: '100%',
    }
    return (
        <div style={style}>
            {<Arrow direction={1} onclick={scrollLeft} char="&#8592;"/>}
            {<Arrow direction={0} onclick={scrollRight} char="&#8594;"/>}
            {/* <img src={url}/> */}
        </div>
    )
}

export default MainImage;