import React from 'react';
import Style from './EnlargedImage.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('body')

const EnlargedImage = ({toggleImageZoom, image_url, imageZoom}) => {
  const style = {
    backgroundImage: `url(${image_url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    maxHeight: '100%',
    outline: '1px solid grey',
}
  return (
    <div>
      <ReactModal 
        isOpen={imageZoom}
        onRequestClose={toggleImageZoom}
        shouldCloseOnOverlayClick={true}
        className={Style.modal}
      >
        <div style={style} onClick={toggleImageZoom}>
          <button className={Style.button} onClick={toggleImageZoom}>X</button>
        </div>
      </ReactModal>
    </div>
  )
}

export default EnlargedImage;