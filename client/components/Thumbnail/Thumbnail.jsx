import React from 'react';
import Style from './Thumbnail.css';

const Thumbnail = ({ url, selected }) => {
    return (
        <div>
            <img className={selected ? Style.thumbnailselected : Style.thumbnail} src={url}/>
        </div>
    )
}

export default Thumbnail;