import React from 'react';
import ReactModal from 'react-modal';
import Style from './FavoriteModal.css'

ReactModal.setAppElement('body');

const FavoriteModal = ({ favorited, unfavorited }) => {
  return (
    <div>
      <ReactModal className={Style.modal} 
        isOpen={favorited || unfavorited}>
        {favorited ? <div>Added to favorites!</div> : <div>Removed from favorites D:</div>}
      </ReactModal>
    </div>
  )
}

export default FavoriteModal;