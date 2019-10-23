import React from 'react';
import Style from './EnlargedImage.css';

const EnlargedImage = ({toggleImageZoom, image_url}) => {
  const style = {
    backgroundImage: `url(${image_url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  }
  return (
    <div className={Style.overlay} onClick={toggleImageZoom}>
      <img src={image_url}/>
    </div>
  )
}

export default EnlargedImage;