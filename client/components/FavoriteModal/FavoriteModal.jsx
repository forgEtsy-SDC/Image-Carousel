import React from 'react';
import ReactModal from 'react-modal';
import Style from './FavoriteModal.css'

ReactModal.setAppElement('body');

const FavoriteModal = ({ favorited, unfavorited, }) => {
  if(favorited || unfavorited){
    return (
      <div className={Style.modal}>
        {favorited ? (
          <div className={Style.favorite}>
            <p>&#10004; Favorited</p>
          </div> 
        ) : (
          <div className={Style.unfavorite}>
            <p>Removed from favorites</p>
          </div>
        )}
        {favorited && <p className={Style.add}>Add to list</p>}
      </div>
    )
  }else{
    return null
  }



  // return (
  //   <div>
  //     <ReactModal className={Style.modal} 
  //       isOpen={favorited || unfavorited}>
  //       {favorited ? <div>Added to favorites!</div> : <div>Removed from favorites D:</div>}
  //     </ReactModal>
  //   </div>
  // )
}

export default FavoriteModal;