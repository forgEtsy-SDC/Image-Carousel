import React from 'react';
import Style from './Thumbnail.css';

const Thumbnail = ({ url, selected, selectImage, index }) => {
    return (
        <div onClick={()=>selectImage(index)}>
            <img className={selected ? Style.selected : Style.thumbnail} src={url}
            />
        </div>
    )
}

export default Thumbnail;