import React from 'react';
import Style from './ImageBar.css'
import Thumbnail from '../Thumbnail/Thumbnail.jsx';

const ImageBar = ({ urls, index, selectImage }) => {
    return(
        <div className={Style.imagebar}>
            {urls.map((url, i) => <Thumbnail key={i} url={url} 
                                    selected={(index === i ? true : false)}
                                    selectImage={selectImage}
                                    index={i}
                                    /> )}
        </div>
    )
}

export default ImageBar;