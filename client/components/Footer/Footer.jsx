import React from 'react';
import Style from './Footer.css';


const Footer = ({ url }) => {
  const avatar = {
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  }

  return(
    <div className={Style.footer}>
      <div style={avatar}></div>
      <div className={Style.note}>
        <p>Have a question about the item? <a className={Style.contact}>Send a message.</a></p>
        <p>This seller usually responds <a className={Style.responsetime}>within a few hours.</a></p>
      </div>
    </div>
  )
}

export default Footer;