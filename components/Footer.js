import React from 'react';
import LogoBig from '../assets/img/logo-big.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-wrapper">
        <div className="footer-left">
            <img src={LogoBig} className="logo"/>
            <p>&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="footer-right">
            <div className="title">Other Links</div>
            <ul className="links-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Top Books</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">F.A.Q.</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;