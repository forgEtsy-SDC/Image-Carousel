import React from 'react';
import Style from './SellerModal.css'

import ReactModal from 'react-modal';

ReactModal.setAppElement('body')

const SellerModal = ({ seller, shop, url, display, toggleSellerModal }) => {
  if(display){
      return (
      <div className={Style.sellermodal}>
        <div className={Style.info}>
          <div className={Style.button} onClick={toggleSellerModal}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path>
              </svg>
            </span>
          </div>
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
          <div>
            Write a message
          </div>
          <div className={Style.imageicon}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M22,22H2V2H22V22ZM4,20H20V4H4V20Z"></path><circle cx="8" cy="8" r="2"></circle><polygon points="6 18 18 18 14 10 11 15 9 13 6 18"></polygon>
              </svg>
            </span>
          </div>
          <div className={Style.enter}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    )
  }else{
    return null
  }
}

export default SellerModal;
// images upload
// submit
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path>
</svg>