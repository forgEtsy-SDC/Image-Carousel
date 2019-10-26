import React from 'react';
import Style from './SellerModal.css'

const SellerModal = ({ seller, shop, url, display, toggleSellerModal }) => {
  if(display){
      return (
      <div className={Style.sellermodal}>
        <div className={Style.info}>
          <div className={Style.button} onClick={toggleSellerModal}>X</div>
          <div className={Style.avatar} style={{backgroundImage: `url(${url})`}}/>
          <div className={Style.contact}>
            <div>
              <a className={Style.seller}>{`${seller} from `}<u className={Style.shop}>{`${shop}`}</u></a>
              <br></br>
              <a>Typically responds within a few hours</a>
            </div>
          </div>
        </div>
        <div className={Style.question}>
          <p>{`Got questions? ${shop} can help!`}</p>
        </div>
        <div className={Style.submit}>

        </div>
      </div>
    )
  }else{
    return null
  }
}

export default SellerModal;