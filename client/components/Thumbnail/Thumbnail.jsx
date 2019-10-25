import React from 'react';
import Style from './Thumbnail.css';

const Thumbnail = ({ url, selected, selectImage, index }) => {
    return (
        <div onClick={()=>selectImage(index)}>
            <img className={Style.thumbnail} src={url}
                // style={selected ? {cursor: 'auto'} : {cursor: 'pointer'}}
                style={selected ? 
                        {
                            opacity: '1',
                            cursor: 'auto'
                        } : {
                            opacity: '0.5',
                            cursor: 'pointer'
                        }
                    }
            />
        </div>
    )
}

export default Thumbnail;