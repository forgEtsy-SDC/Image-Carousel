import React from 'react';
import Style from './Footer.css';


const Footer = ({ url, display, toggleSellerModal }) => {
  return(
    <div className={Style.footer}>
      <div className={Style.avatar} style={{backgroundImage: `url(${url})`}}></div>
      <div className={Style.note}>
        <p>Have a question about the item? <a onClick={!display ? toggleSellerModal : null} 
                          className={Style.contact}>Send a message.</a></p>
        <p>This seller usually responds <a className={Style.responsetime}>within a few hours.</a></p>
      </div>
    </div>
  )
}

export default Footer;